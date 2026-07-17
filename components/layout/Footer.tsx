import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M15 3h-2a5 5 0 0 0-5 5v2H6v4h2v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const columns = [
  {
    title: "Navigasi",
    links: [
      { href: "/", label: "Beranda" },
      { href: "/listing", label: "Listing Properti" },
      { href: "/tentang-kami", label: "Tentang Kami" },
      { href: "/kontak", label: "Kontak" },
    ],
  },
  {
    title: "Tipe Properti",
    links: [
      { href: "/listing?type=rumah", label: "Rumah" },
      { href: "/listing?type=apartemen", label: "Apartemen" },
      { href: "/listing?type=ruko", label: "Ruko" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-cream/10 bg-ink text-cream">
      <Container className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-khairunnas.jpeg"
              alt="Khoirunass Property"
              width={618}
              height={695}
              className="h-24 w-auto rounded-md"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
            Mitra terpercaya untuk properti hunian dan komersial premium di
            kota-kota utama Indonesia.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center border border-cream/20 text-cream/70 transition-colors hover:border-gold hover:text-gold"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center border border-cream/20 text-cream/70 transition-colors hover:border-gold hover:text-gold"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              {col.title}
            </h4>
            <ul className="mt-5 space-y-3">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            Hubungi Kami
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-cream/70">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              Jl. Sudirman Kav. 52-53, Jakarta Selatan
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              +62 812-3456-7890
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              hello@khoirunassproperty.com
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-cream/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-cream/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Khoirunass Property. All rights reserved.</p>
          <p>Berizin & terdaftar resmi.</p>
        </Container>
      </div>
    </footer>
  );
}
