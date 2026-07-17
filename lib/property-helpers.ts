import { PropertyStatus, PropertyType } from "@/lib/types";

export const statusLabel: Record<PropertyStatus, string> = {
  tersedia: "Tersedia",
  promo: "Promo",
  terjual: "Terjual",
};

export const typeLabel: Record<PropertyType, string> = {
  rumah: "Rumah",
  apartemen: "Apartemen",
  ruko: "Ruko",
};

export const whatsappNumber = "6281234567890";

export function whatsappLink(message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
