import type React from "react";

export function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-primary-500/50 disabled:opacity-60";
  const styles =
    variant === "primary"
      ? "bg-primary-500 text-zinc-950 hover:bg-primary-400"
      : variant === "secondary"
        ? "bg-zinc-800 text-zinc-100 hover:bg-zinc-700"
        : "bg-transparent text-zinc-200 hover:bg-zinc-900";

  return (
    <button type={type} className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}

