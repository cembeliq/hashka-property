"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const router = useRouter();
  const [type, setType] = useState("");
  const [keyword, setKeyword] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (type) params.set("type", type);
    if (keyword) params.set("q", keyword);
    router.push(`/listing?${params.toString()}`);
  }

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-ink pb-20 pt-40">
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80&auto=format&fit=crop"
        alt="Hunian mewah modern"
        fill
        priority
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />

      <Container className="relative z-10">
        <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          Agen Properti Premium
        </span>
        <h1 className="max-w-3xl font-serif-display text-4xl leading-[1.1] text-cream sm:text-5xl lg:text-6xl">
          Temukan Hunian Impian dengan Standar Kemewahan Sesungguhnya
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg">
          Kami menghadirkan koleksi rumah, apartemen, dan ruko pilihan di
          lokasi-lokasi terbaik Indonesia — didukung legalitas jelas dan
          layanan personal dari awal hingga serah terima kunci.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/listing" size="lg">
            Lihat Listing
          </Button>
          <Button href="/kontak" variant="outline" size="lg">
            Hubungi Kami
          </Button>
        </div>

        <form
          onSubmit={handleSearch}
          className="mt-12 flex flex-col gap-3 border border-cream/15 bg-ink/60 p-3 backdrop-blur-md sm:flex-row sm:items-center"
        >
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full bg-transparent px-3 py-2.5 text-sm text-cream/90 outline-none sm:w-48 [&>option]:text-ink"
          >
            <option value="">Semua Tipe</option>
            <option value="rumah">Rumah</option>
            <option value="apartemen">Apartemen</option>
            <option value="ruko">Ruko</option>
          </select>
          <div className="hidden h-6 w-px bg-cream/15 sm:block" />
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Cari lokasi, mis. BSD, Sudirman, Bali..."
            className="w-full flex-1 bg-transparent px-3 py-2.5 text-sm text-cream placeholder:text-cream/40 outline-none"
          />
          <Button type="submit" className="w-full sm:w-auto">
            <Search className="h-4 w-4" />
            Cari
          </Button>
        </form>
      </Container>
    </section>
  );
}
