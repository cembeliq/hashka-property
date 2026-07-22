import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/kontak/ContactForm";

export const metadata: Metadata = {
  title: "Kontak | Khoirunass Property",
  description:
    "Hubungi tim Khoirunass Property untuk konsultasi gratis, jadwal survey lokasi, atau pertanyaan seputar properti pilihan Anda.",
};

const contactInfo = [
  {
    icon: MapPin,
    label: "Alamat Kantor",
    value: "Gg. Manfaat, Dusun III, Kartasura, Kec. Kartasura, Kabupaten Sukoharjo",
  },
  {
    icon: Phone,
    label: "Telepon / WhatsApp",
    value: "+62 856-4745-6431",
  },
  {
    icon: Mail,
    label: "Email",
    value: "khoirunassproperty@gmail.com",
  },
  {
    icon: Clock,
    label: "Jam Operasional",
    value: "Senin - Sabtu, 09.00 - 16.00 WIB",
  },
];

export default function KontakPage() {
  return (
    <div className="pt-36 pb-24">
      <Container>
        <SectionHeading
          eyebrow="Kontak"
          title="Mari Diskusikan Properti Impian Anda"
          description="Isi form berikut atau hubungi kami langsung — tim konsultan kami siap membantu tanpa biaya."
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-ink/10 bg-cream-2">
                    <info.icon className="h-5 w-5 text-gold-dark" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-ink/50">
                      {info.label}
                    </p>
                    <p className="mt-1 text-sm text-ink/80">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="aspect-video w-full overflow-hidden border border-ink/10">
              <iframe
                title="Lokasi Kantor Khoirunass Property"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.1009187320473!2d110.74477651139459!3d-7.556638792429411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a14ee07c4d0d9%3A0xaf82cc9a68abdc20!2sHashka%20Solutindo!5e0!3m2!1sid!2sid!4v1720000000000!5m2!1sid!2sid"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="border border-ink/10 bg-white p-6 sm:p-8">
            <h2 className="font-serif-display text-xl text-ink">
              Kirim Pesan
            </h2>
            <p className="mt-2 text-sm text-ink/60">
              Pesan akan diteruskan langsung ke WhatsApp tim kami.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
