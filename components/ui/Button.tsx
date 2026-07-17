import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-ink hover:bg-gold-light border border-gold hover:border-gold-light",
  outline:
    "bg-transparent text-cream border border-cream/40 hover:border-gold hover:text-gold",
  ghost: "bg-transparent text-ink border border-ink/20 hover:border-gold hover:text-gold-dark",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-medium tracking-wide uppercase transition-colors duration-300";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  href?: string;
  target?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  target,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (href) {
    return (
      <Link href={href} target={target} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
