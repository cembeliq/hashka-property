import { cn } from "@/lib/utils";

type BadgeTone = "gold" | "ink" | "outline";

const toneClasses: Record<BadgeTone, string> = {
  gold: "bg-gold text-ink",
  ink: "bg-ink text-cream",
  outline: "border border-current bg-transparent",
};

export function Badge({
  children,
  tone = "gold",
  className,
}: {
  children: React.ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wider",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
