import { getPayloadClient } from "@/lib/cms/getPayloadClient";
import { Property } from "@/lib/types";

function toImageUrls(images: unknown): string[] {
  if (!Array.isArray(images)) return [];
  return images
    .map((image) => (typeof image === "string" ? image : (image as { url?: string })?.url))
    .filter((url): url is string => Boolean(url));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toProperty(doc: any): Property {
  return {
    id: String(doc.id),
    slug: doc.slug,
    name: doc.name,
    type: doc.type,
    status: doc.status,
    location: doc.location,
    city: doc.city,
    price: doc.price,
    bedrooms: doc.bedrooms ?? 0,
    bathrooms: doc.bathrooms ?? 0,
    landArea: doc.landArea ?? 0,
    buildingArea: doc.buildingArea ?? 0,
    images: toImageUrls(doc.images),
    description: doc.description,
    facilities: doc.facilities ?? [],
    featured: Boolean(doc.featured),
  };
}

export async function getProperties(): Promise<Property[]> {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "properties",
    limit: 0,
    sort: "-createdAt",
  });
  return docs.map(toProperty);
}

export async function getFeaturedProperties(): Promise<Property[]> {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "properties",
    where: { featured: { equals: true } },
    limit: 0,
    sort: "-createdAt",
  });
  return docs.map(toProperty);
}

export async function getPropertyBySlug(
  slug: string
): Promise<Property | undefined> {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "properties",
    where: { slug: { equals: slug } },
    limit: 1,
  });
  return docs[0] ? toProperty(docs[0]) : undefined;
}

export async function getRelatedProperties(
  current: Property,
  limit = 3
): Promise<Property[]> {
  const all = await getProperties();
  return all
    .filter((p) => p.id !== current.id && p.type === current.type)
    .slice(0, limit)
    .concat(all.filter((p) => p.id !== current.id && p.type !== current.type))
    .slice(0, limit);
}
