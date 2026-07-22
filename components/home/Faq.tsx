import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFaqItems } from "@/lib/data/faq";
import { FaqAccordion } from "@/components/home/FaqAccordion";

export async function Faq() {
  const faqItems = await getFaqItems();

  return (
    <section className="bg-cream-2 py-24">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="Pertanyaan yang Sering Diajukan"
          description="Masih ada pertanyaan lain? Tim kami siap membantu melalui WhatsApp atau halaman kontak."
        />

        <FaqAccordion items={faqItems} />
      </Container>
    </section>
  );
}
