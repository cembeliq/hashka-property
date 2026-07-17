import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { value: "500+", label: "Unit Terjual" },
  { value: "12", label: "Tahun Pengalaman" },
  { value: "98%", label: "Klien Puas" },
  { value: "20+", label: "Lokasi Proyek" },
];

export function Stats() {
  return (
    <section className="border-y border-ink/10 bg-cream-2">
      <Container className="grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 100} className="text-center">
            <p className="font-serif-display text-4xl text-gold-dark sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs font-medium uppercase tracking-wider text-ink/60">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
