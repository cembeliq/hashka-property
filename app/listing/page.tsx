import { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ListingClient } from "@/components/property/ListingClient";

export const metadata: Metadata = {
  title: "Listing Properti | Hashka Property",
  description:
    "Jelajahi koleksi rumah, apartemen, dan ruko premium pilihan Hashka Property di berbagai kota strategis.",
};

export default function ListingPage() {
  return (
    <div className="pt-32 pb-24">
      <Container>
        <SectionHeading
          eyebrow="Listing Properti"
          title="Temukan Properti Sesuai Kebutuhan Anda"
          description="Gunakan filter di bawah untuk mempersempit pencarian berdasarkan tipe, kota, dan rentang harga."
        />

        <div className="mt-10">
          <Suspense fallback={null}>
            <ListingClient />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}
