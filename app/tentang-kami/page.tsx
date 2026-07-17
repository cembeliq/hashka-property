import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, Award, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Stats } from "@/components/home/Stats";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Tentang Kami | Hashka Property",
  description:
    "Mengenal lebih dekat Hashka Property, agen properti premium yang telah dipercaya ratusan keluarga dan investor di Indonesia.",
};

const values = [
  {
    icon: Target,
    title: "Misi Kami",
    description:
      "Menghadirkan akses properti berkualitas dengan proses transparan, dari survey lokasi hingga serah terima kunci.",
  },
  {
    icon: Eye,
    title: "Visi Kami",
    description:
      "Menjadi agen properti premium terpercaya nomor satu di Indonesia untuk hunian dan investasi jangka panjang.",
  },
  {
    icon: Award,
    title: "Komitmen Kualitas",
    description:
      "Setiap properti yang kami pasarkan melalui proses kurasi ketat, baik dari sisi legalitas maupun kualitas konstruksi.",
  },
  {
    icon: Users,
    title: "Fokus pada Klien",
    description:
      "Tim konsultan berpengalaman yang mendengarkan kebutuhan Anda dan mendampingi hingga jauh setelah transaksi selesai.",
  },
];

export default function TentangKamiPage() {
  return (
    <div>
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-ink pb-16 pt-40">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80&auto=format&fit=crop"
          alt="Kantor Hashka Property"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
        <Container className="relative z-10">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Tentang Kami
          </span>
          <h1 className="max-w-2xl font-serif-display text-4xl leading-tight text-cream sm:text-5xl">
            Mitra Terpercaya untuk Setiap Perjalanan Properti Anda
          </h1>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=1200&q=80&auto=format&fit=crop"
                alt="Tim Hashka Property"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Profil Perusahaan"
              title="12 Tahun Menghadirkan Hunian Berkualitas"
            />
            <p className="mt-6 leading-relaxed text-ink/70">
              Sejak 2014, Hashka Property telah membantu ratusan keluarga dan
              investor menemukan properti yang tepat — mulai dari hunian
              pertama, rumah kedua untuk investasi, hingga ruko untuk memulai
              usaha. Kami memahami bahwa properti bukan sekadar transaksi,
              melainkan keputusan yang berdampak jangka panjang.
            </p>
            <p className="mt-4 leading-relaxed text-ink/70">
              Dengan jaringan proyek pilihan di kota-kota utama Indonesia dan
              tim konsultan berpengalaman, kami berkomitmen memberikan
              layanan personal, transparan, dan profesional di setiap tahap
              proses.
            </p>
            <Button href="/kontak" className="mt-8">
              Hubungi Tim Kami
            </Button>
          </Reveal>
        </Container>
      </section>

      <Stats />

      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Nilai Kami"
            title="Prinsip yang Memandu Setiap Layanan Kami"
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 100}>
                <div className="border border-ink/10 p-6 text-center">
                  <value.icon className="mx-auto h-8 w-8 text-gold-dark" />
                  <h3 className="mt-5 font-serif-display text-lg text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
