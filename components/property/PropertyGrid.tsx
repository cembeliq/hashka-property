import { Property } from "@/lib/types";
import { PropertyCard } from "@/components/property/PropertyCard";

export function PropertyGrid({ properties }: { properties: Property[] }) {
  if (properties.length === 0) {
    return (
      <div className="border border-dashed border-ink/20 py-20 text-center text-ink/50">
        Tidak ada properti yang cocok dengan filter Anda.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
