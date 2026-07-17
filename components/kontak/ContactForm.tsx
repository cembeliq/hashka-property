"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/property-helpers";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Halo, saya ${name} (${phone}).\n\n${message}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-ink/60">
          Nama Lengkap
        </label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nama Anda"
          className="w-full border border-ink/15 px-4 py-3 text-sm text-ink outline-none focus:border-gold"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-ink/60">
          Nomor WhatsApp
        </label>
        <input
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="0812xxxxxxx"
          className="w-full border border-ink/15 px-4 py-3 text-sm text-ink outline-none focus:border-gold"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-ink/60">
          Pesan
        </label>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ceritakan properti seperti apa yang Anda cari..."
          rows={5}
          className="w-full resize-none border border-ink/15 px-4 py-3 text-sm text-ink outline-none focus:border-gold"
        />
      </div>

      <Button type="submit" size="lg" className="w-full justify-center">
        <Send className="h-4 w-4" />
        Kirim via WhatsApp
      </Button>
    </form>
  );
}
