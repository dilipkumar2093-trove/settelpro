import type React from "react";

export function Input({
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 ${className}`}
      {...props}
    />
  );
}

