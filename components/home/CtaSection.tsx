import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/property-helpers";

export function CtaSection() {
  return (
    <section className="bg-gold py-20 text-ink">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl font-serif-display text-3xl leading-tight sm:text-4xl">
          Siap Menemukan Properti Impian Anda?
        </h2>
        <p className="max-w-xl text-ink/70">
          Jadwalkan konsultasi gratis dengan tim kami dan dapatkan rekomendasi
          properti yang sesuai dengan kebutuhan serta budget Anda.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            href={whatsappLink(
              "Halo, saya ingin menjadwalkan konsultasi gratis mengenai properti."
            )}
            target="_blank"
            variant="ghost"
            size="lg"
            className="border-ink bg-ink text-cream hover:bg-ink-2"
          >
            Jadwalkan Survey
          </Button>
          <Button href="/listing" variant="ghost" size="lg" className="border-ink">
            Jelajahi Listing
          </Button>
        </div>
      </Container>
    </section>
  );
}
