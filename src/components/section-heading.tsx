import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({ className, ...props }: ComponentProps<"h2">) {
  return <h2 className={cn("font-display text-4xl font-bold tracking-[-0.04em] text-navy sm:text-5xl lg:text-6xl", className)} {...props} />;
}
