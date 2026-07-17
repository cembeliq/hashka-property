import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/property-helpers";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(
        "Halo, saya tertarik untuk konsultasi mengenai properti di Hashka Property."
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" fill="white" />
    </a>
  );
}
