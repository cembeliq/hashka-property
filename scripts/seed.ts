import { getPayload } from "payload";
import config from "../payload.config";
import { properties } from "./seed-properties-source";
import { testimonials } from "./seed-testimonials-source";
import { faqItems } from "./seed-faq-source";

function toLexicalDescription(text: string) {
  return {
    root: {
      type: "root",
      direction: "ltr" as const,
      format: "" as const,
      indent: 0,
      version: 1,
      children: [
        {
          type: "paragraph",
          direction: "ltr" as const,
          format: "" as const,
          indent: 0,
          version: 1,
          children: [
            {
              type: "text",
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text,
              version: 1,
            },
          ],
        },
      ],
    },
  };
}

async function getOrCreateMedia(
  payload: Awaited<ReturnType<typeof getPayload>>,
  url: string,
  cache: Map<string, number | string>
) {
  const cached = cache.get(url);
  if (cached) return cached;

  const res = await fetch(url);
  const contentType = res.headers.get("content-type") ?? "";
  if (!res.ok || !contentType.startsWith("image/")) {
    console.warn(`Skipping unreachable image (${res.status}): ${url}`);
    return undefined;
  }

  const buffer = Buffer.from(await res.arrayBuffer());
  const name = `${new URL(url).pathname.split("/").pop()}.jpg`;

  const doc = await payload.create({
    collection: "media",
    data: { alt: name },
    file: {
      data: buffer,
      mimetype: contentType,
      name,
      size: buffer.length,
    },
  });

  cache.set(url, doc.id);
  return doc.id;
}

async function run() {
  const payload = await getPayload({ config });

  const existingProperties = await payload.count({ collection: "properties" });
  if (existingProperties.totalDocs > 0) {
    console.log("Properties already seeded, skipping.");
  } else {
    const mediaCache = new Map<string, number | string>();
    for (const property of properties) {
      const imageIds: (number | string)[] = [];
      for (const url of property.images) {
        const id = await getOrCreateMedia(payload, url, mediaCache);
        if (id) imageIds.push(id);
      }

      await payload.create({
        collection: "properties",
        data: {
          name: property.name,
          slug: property.slug,
          type: property.type,
          status: property.status,
          location: property.location,
          city: property.city,
          price: property.price,
          bedrooms: property.bedrooms,
          bathrooms: property.bathrooms,
          landArea: property.landArea,
          buildingArea: property.buildingArea,
          images: imageIds,
          description: toLexicalDescription(property.description),
          facilities: property.facilities,
          featured: property.featured,
        },
      });
      console.log(`Seeded property: ${property.name}`);
    }
  }

  const existingTestimonials = await payload.count({ collection: "testimonials" });
  if (existingTestimonials.totalDocs > 0) {
    console.log("Testimonials already seeded, skipping.");
  } else {
    for (const t of testimonials) {
      await payload.create({
        collection: "testimonials",
        data: { name: t.name, role: t.role, quote: t.quote, rating: t.rating },
      });
    }
    console.log(`Seeded ${testimonials.length} testimonials.`);
  }

  const existingFaq = await payload.count({ collection: "faq-items" });
  if (existingFaq.totalDocs > 0) {
    console.log("FAQ items already seeded, skipping.");
  } else {
    for (const item of faqItems) {
      await payload.create({
        collection: "faq-items",
        data: { question: item.question, answer: item.answer },
      });
    }
    console.log(`Seeded ${faqItems.length} FAQ items.`);
  }

  console.log("Seed complete.");
  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
