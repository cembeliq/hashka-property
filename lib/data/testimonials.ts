import { getPayloadClient } from "@/lib/cms/getPayloadClient";
import { Testimonial } from "@/lib/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toTestimonial(doc: any): Testimonial {
  return {
    id: String(doc.id),
    name: doc.name,
    role: doc.role,
    quote: doc.quote,
    rating: doc.rating,
  };
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "testimonials",
    limit: 0,
    sort: "-createdAt",
  });
  return docs.map(toTestimonial);
}
