import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const variantClasses = {
  primary: "bg-gradient-brand text-white hover:opacity-90",
  secondary: "border border-accent/40 text-accent hover:bg-accent/10",
  ghost: "text-text-secondary hover:text-text-primary",
};

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  onClick,
  disabled,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200";
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href && href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
