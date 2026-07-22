import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { getTestimonials } from "@/lib/data/testimonials";

export async function Testimonials() {
  const testimonials = await getTestimonials();

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Testimoni Klien"
          title="Dipercaya oleh Ratusan Keluarga & Investor"
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 80}>
              <div className="h-full border border-ink/10 bg-white p-7">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-gold" />
                  ))}
                </div>
                <p className="mt-4 text-base leading-relaxed text-ink/75">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-ink/10 pt-4">
                  <p className="font-serif-display text-base text-ink">{t.name}</p>
                  <p className="text-xs uppercase tracking-wide text-ink/50">
                    {t.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
