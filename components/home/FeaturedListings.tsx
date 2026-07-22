import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PropertyGrid } from "@/components/property/PropertyGrid";
import { Reveal } from "@/components/ui/Reveal";
import { getFeaturedProperties } from "@/lib/data/properties";

export async function FeaturedListings() {
  const featured = await getFeaturedProperties();

  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Pilihan Terbaik"
            title="Properti Unggulan"
            description="Kurasi hunian dan properti komersial dengan lokasi strategis serta kualitas konstruksi terbaik."
          />
          <Button href="/listing" variant="ghost" className="shrink-0">
            Lihat Semua Listing
          </Button>
        </div>

        <Reveal className="mt-12">
          <PropertyGrid properties={featured} />
        </Reveal>
      </Container>
    </section>
  );
}
