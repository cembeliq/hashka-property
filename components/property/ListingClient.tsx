"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Property, PropertyType } from "@/lib/types";
import { PropertyFilter } from "@/components/property/PropertyFilter";
import { PropertyGrid } from "@/components/property/PropertyGrid";

export function ListingClient({ properties }: { properties: Property[] }) {
  const searchParams = useSearchParams();

  const [keyword, setKeyword] = useState(searchParams.get("q") ?? "");
  const [type, setType] = useState<PropertyType | "">(
    (searchParams.get("type") as PropertyType | null) ?? ""
  );
  const [city, setCity] = useState("");
  const [priceMax, setPriceMax] = useState("0");

  const cities = useMemo(
    () => Array.from(new Set(properties.map((p) => p.city))).sort(),
    [properties]
  );

  const filtered = useMemo(() => {
    const kw = keyword.trim().toLowerCase();
    const maxPrice = Number(priceMax);

    return properties.filter((p) => {
      if (type && p.type !== type) return false;
      if (city && p.city !== city) return false;
      if (maxPrice > 0 && p.price > maxPrice) return false;
      if (
        kw &&
        !`${p.name} ${p.location} ${p.city}`.toLowerCase().includes(kw)
      )
        return false;
      return true;
    });
  }, [properties, keyword, type, city, priceMax]);

  return (
    <div className="space-y-8">
      <PropertyFilter
        keyword={keyword}
        onKeywordChange={setKeyword}
        type={type}
        onTypeChange={setType}
        city={city}
        onCityChange={setCity}
        cities={cities}
        priceMax={priceMax}
        onPriceMaxChange={setPriceMax}
      />

      <p className="text-sm text-ink/50">
        Menampilkan {filtered.length} dari {properties.length} properti
      </p>

      <PropertyGrid properties={filtered} />
    </div>
  );
}
