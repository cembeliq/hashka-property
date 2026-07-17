import { ShieldCheck, MapPinned, Wallet, Headset } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Legalitas Terjamin",
    description:
      "Setiap unit memiliki sertifikat dan perizinan lengkap yang dapat diverifikasi sebelum booking.",
  },
  {
    icon: MapPinned,
    title: "Lokasi Strategis",
    description:
      "Portofolio properti kami tersebar di kawasan berkembang dengan akses dan prospek nilai terbaik.",
  },
  {
    icon: Wallet,
    title: "Skema Fleksibel",
    description:
      "Pilihan cicilan bertahap maupun KPR dengan bank rekanan sesuai kemampuan finansial Anda.",
  },
  {
    icon: Headset,
    title: "Layanan After-Sales",
    description:
      "Tim kami tetap mendampingi Anda bahkan setelah serah terima unit selesai dilakukan.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-ink py-24 text-cream">
      <Container>
        <SectionHeading
          eyebrow="Mengapa Memilih Kami"
          title="Kepercayaan yang Dibangun dari Setiap Detail"
          description="Kami memahami membeli properti adalah keputusan besar — karena itu kami hadir mendampingi setiap langkah Anda."
          dark
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 100}>
              <div className="border border-cream/10 p-6 transition-colors hover:border-gold/50">
                <reason.icon className="h-8 w-8 text-gold" />
                <h3 className="mt-5 font-serif-display text-lg text-cream">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">
                  {reason.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
