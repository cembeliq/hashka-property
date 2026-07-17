import Image from "next/image";
import Link from "next/link";
import { BedDouble, Bath, Ruler, MapPin } from "lucide-react";
import { Property } from "@/lib/types";
import { formatRupiah } from "@/lib/format";
import { statusLabel, typeLabel } from "@/lib/property-helpers";
import { Badge } from "@/components/ui/Badge";

export function PropertyCard({ property }: { property: Property }) {
  const isSold = property.status === "terjual";

  return (
    <Link
      href={`/listing/${property.slug}`}
      className="group block overflow-hidden border border-ink/10 bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/10"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-2">
        <Image
          src={property.images[0]}
          alt={property.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
            isSold ? "grayscale" : ""
          }`}
        />
        <div className="absolute left-4 top-4 flex gap-2">
          <Badge tone={property.status === "promo" ? "gold" : "ink"}>
            {statusLabel[property.status]}
          </Badge>
        </div>
        <div className="absolute right-4 top-4">
          <Badge tone="outline" className="border-white/60 bg-black/30 text-white backdrop-blur-sm">
            {typeLabel[property.type]}
          </Badge>
        </div>
      </div>

      <div className="p-5">
        <div className="mb-1 flex items-center gap-1.5 text-xs uppercase tracking-wide text-ink/50">
          <MapPin className="h-3.5 w-3.5" />
          {property.location}, {property.city}
        </div>
        <h3 className="font-serif-display text-xl text-ink group-hover:text-gold-dark transition-colors">
          {property.name}
        </h3>
        <p className="mt-2 text-lg font-semibold text-gold-dark">
          {formatRupiah(property.price)}
        </p>

        <div className="mt-4 flex items-center gap-4 border-t border-ink/10 pt-4 text-sm text-ink/60">
          {property.bedrooms > 0 && (
            <span className="flex items-center gap-1.5">
              <BedDouble className="h-4 w-4" /> {property.bedrooms}
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Bath className="h-4 w-4" /> {property.bathrooms}
          </span>
          <span className="flex items-center gap-1.5">
            <Ruler className="h-4 w-4" /> {property.buildingArea} m²
          </span>
        </div>
      </div>
    </Link>
  );
}
