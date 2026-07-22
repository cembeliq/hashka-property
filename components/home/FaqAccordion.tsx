"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FaqItem } from "@/lib/types";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-ink/10 border-t border-ink/10">
      {items.map((item) => {
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
  );
}
