import { getPayloadClient } from "@/lib/cms/getPayloadClient";
import { FaqItem } from "@/lib/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toFaqItem(doc: any): FaqItem {
  return {
    id: String(doc.id),
    question: doc.question,
    answer: doc.answer,
  };
}

export async function getFaqItems(): Promise<FaqItem[]> {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "faq-items",
    limit: 0,
    sort: "-createdAt",
  });
  return docs.map(toFaqItem);
}
