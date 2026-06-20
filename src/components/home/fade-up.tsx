"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

const STAGGER_DELAYS = new Set([100, 200, 300, 400, 500, 600, 700]);

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function useReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
}

type FadeUpProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  delay?: number;
  [key: string]: unknown;
};

export function FadeUp({
  as,
  children,
  className,
  delay = 0,
  ...rest
}: FadeUpProps) {
  const Component = as || "div";
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(reduced);

  useEffect(() => {
    if (reduced) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [reduced]);

  const staggerClass =
    delay && STAGGER_DELAYS.has(delay) ? `stagger-${delay}` : undefined;

  return (
    <Component
      ref={ref}
      className={cn(
        visible ? "animate-fade-up opacity-100" : "opacity-0",
        staggerClass,
        className
      )}
      style={{ animationFillMode: "both" }}
      {...rest}
    >
      {children}
    </Component>
  );
}
