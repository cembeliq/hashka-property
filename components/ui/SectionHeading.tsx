import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-serif-display text-3xl leading-tight sm:text-4xl",
          dark ? "text-cream" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            dark ? "text-cream/70" : "text-ink/60"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
