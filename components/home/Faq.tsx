"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems } from "@/lib/data/faq";

export function Faq() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  return (
    <section className="bg-cream-2 py-24">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="Pertanyaan yang Sering Diajukan"
          description="Masih ada pertanyaan lain? Tim kami siap membantu melalui WhatsApp atau halaman kontak."
        />

        <div className="divide-y divide-ink/10 border-t border-ink/10">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id}>
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-serif-display text-base text-ink sm:text-lg">
                    {item.question}
                  </span>
                  {isOpen ? (
                    <Minus className="h-4 w-4 shrink-0 text-gold-dark" />
                  ) : (
                    <Plus className="h-4 w-4 shrink-0 text-gold-dark" />
                  )}
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm leading-relaxed text-ink/60">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
