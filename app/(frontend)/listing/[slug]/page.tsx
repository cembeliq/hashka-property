import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BedDouble,
  Bath,
  Ruler,
  LandPlot,
  MapPin,
  CheckCircle2,
  Phone,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PropertyGallery } from "@/components/property/PropertyGallery";
import { PropertyGrid } from "@/components/property/PropertyGrid";
import { getPropertyBySlug, getRelatedProperties } from "@/lib/data/properties";
import { formatRupiah } from "@/lib/format";
import { statusLabel, typeLabel, whatsappLink } from "@/lib/property-helpers";

// Properties are managed in the CMS and can change at any time, so this
// route is always rendered per-request instead of statically generated.
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);
  if (!property) return {};
  return {
    title: `${property.name} | Khoirunass Property`,
    description: property.description,
  };
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);
  if (!property) notFound();

  const related = await getRelatedProperties(property);
  const isSold = property.status === "terjual";

  const specs = [
    { icon: BedDouble, label: "Kamar Tidur", value: property.bedrooms || "-" },
    { icon: Bath, label: "Kamar Mandi", value: property.bathrooms },
    { icon: Ruler, label: "Luas Bangunan", value: `${property.buildingArea} m²` },
    {
      icon: LandPlot,
      label: "Luas Tanah",
      value: property.landArea ? `${property.landArea} m²` : "-",
    },
  ];

  return (
    <div className="pt-36 pb-24">
      <Container>
        <div className="mb-8 flex items-center gap-2 text-xs uppercase tracking-wide text-ink/50">
          <Link href="/listing" className="hover:text-gold-dark">
            Listing
          </Link>
          <span>/</span>
          <span className="text-ink/70">{property.name}</span>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <PropertyGallery images={property.images} name={property.name} />

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Badge tone={property.status === "promo" ? "gold" : "ink"}>
                {statusLabel[property.status]}
              </Badge>
              <Badge tone="outline" className="border-ink/20 text-ink/70">
                {typeLabel[property.type]}
              </Badge>
            </div>

            <h1 className="mt-4 font-serif-display text-3xl text-ink sm:text-4xl">
              {property.name}
            </h1>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-ink/60">
              <MapPin className="h-4 w-4" />
              {property.location}, {property.city}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 border-y border-ink/10 py-6 sm:grid-cols-4">
              {specs.map((spec) => (
                <div key={spec.label} className="text-center">
                  <spec.icon className="mx-auto h-6 w-6 text-gold-dark" />
                  <p className="mt-2 text-sm font-semibold text-ink">
                    {spec.value}
                  </p>
                  <p className="text-xs text-ink/50">{spec.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h2 className="font-serif-display text-xl text-ink">Deskripsi</h2>
              <p className="mt-3 leading-relaxed text-ink/70">
                {property.description}
              </p>
            </div>

            <div className="mt-10">
              <h2 className="font-serif-display text-xl text-ink">Fasilitas</h2>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {property.facilities.map((facility) => (
                  <div key={facility} className="flex items-center gap-2.5 text-sm text-ink/70">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-dark" />
                    {facility}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="h-fit border border-ink/10 bg-white p-6 lg:sticky lg:top-28">
            <p className="text-xs uppercase tracking-wide text-ink/50">Harga</p>
            <p className="mt-1 font-serif-display text-3xl text-gold-dark">
              {formatRupiah(property.price)}
            </p>

            {isSold ? (
              <p className="mt-6 border border-ink/10 bg-cream-2 p-4 text-sm text-ink/60">
                Unit ini telah terjual. Hubungi kami untuk melihat unit serupa
                yang masih tersedia.
              </p>
            ) : (
              <p className="mt-6 text-sm leading-relaxed text-ink/60">
                Tertarik dengan unit ini? Hubungi tim kami untuk jadwal survey
                lokasi atau simulasi pembayaran.
              </p>
            )}

            <div className="mt-6 flex flex-col gap-3">
              <Button
                href={whatsappLink(
                  `Halo, saya tertarik dengan ${property.name} di ${property.location}, ${property.city}. Mohon informasi lebih lanjut.`
                )}
                target="_blank"
                size="lg"
                className="w-full justify-center"
              >
                <Phone className="h-4 w-4" />
                Hubungi via WhatsApp
              </Button>
              <Button
                href="/kontak"
                variant="ghost"
                size="lg"
                className="w-full justify-center"
              >
                Jadwalkan Survey
              </Button>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <div className="mt-24">
            <SectionHeading eyebrow="Rekomendasi" title="Properti Terkait Lainnya" />
            <div className="mt-10">
              <PropertyGrid properties={related} />
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
