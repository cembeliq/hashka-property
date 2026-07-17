"use client";

import { PropertyType } from "@/lib/types";
import { typeLabel } from "@/lib/property-helpers";

const typeOptions: { value: PropertyType | ""; label: string }[] = [
  { value: "", label: "Semua Tipe" },
  { value: "rumah", label: typeLabel.rumah },
  { value: "apartemen", label: typeLabel.apartemen },
  { value: "ruko", label: typeLabel.ruko },
];

const priceOptions = [
  { value: "0", label: "Semua Harga" },
  { value: "3000000000", label: "Sampai Rp 3 M" },
  { value: "5000000000", label: "Sampai Rp 5 M" },
  { value: "8000000000", label: "Sampai Rp 8 M" },
];

interface PropertyFilterProps {
  keyword: string;
  onKeywordChange: (value: string) => void;
  type: PropertyType | "";
  onTypeChange: (value: PropertyType | "") => void;
  city: string;
  onCityChange: (value: string) => void;
  cities: string[];
  priceMax: string;
  onPriceMaxChange: (value: string) => void;
}

export function PropertyFilter({
  keyword,
  onKeywordChange,
  type,
  onTypeChange,
  city,
  onCityChange,
  cities,
  priceMax,
  onPriceMaxChange,
}: PropertyFilterProps) {
  return (
    <div className="grid grid-cols-1 gap-3 border border-ink/10 bg-white p-4 sm:grid-cols-2 lg:grid-cols-4">
      <input
        value={keyword}
        onChange={(e) => onKeywordChange(e.target.value)}
        placeholder="Cari nama atau lokasi..."
        className="border border-ink/15 px-3 py-2.5 text-sm text-ink outline-none focus:border-gold"
      />

      <select
        value={type}
        onChange={(e) => onTypeChange(e.target.value as PropertyType | "")}
        className="border border-ink/15 px-3 py-2.5 text-sm text-ink outline-none focus:border-gold"
      >
        {typeOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <select
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
        className="border border-ink/15 px-3 py-2.5 text-sm text-ink outline-none focus:border-gold"
      >
        <option value="">Semua Kota</option>
        {cities.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <select
        value={priceMax}
        onChange={(e) => onPriceMaxChange(e.target.value)}
        className="border border-ink/15 px-3 py-2.5 text-sm text-ink outline-none focus:border-gold"
      >
        {priceOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
