"use client";

import { useState } from "react";
import { misalTrySection } from "@/lib/misal-data";

export function MisalTrySection() {
  const [form, setForm] = useState({ name: "", email: "", organization: "" });

  return (
    <section className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          className="w-full rounded-xl border border-hairline bg-white/80 px-4 py-3 text-base text-offblack placeholder:text-caption focus:border-orange focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className="w-full rounded-xl border border-hairline bg-white/80 px-4 py-3 text-base text-offblack placeholder:text-caption focus:border-orange focus:outline-none"
        />
        <input
          type="text"
          placeholder="Organization"
          value={form.organization}
          onChange={(e) => setForm((f) => ({ ...f, organization: e.target.value }))}
          className="w-full rounded-xl border border-hairline bg-white/80 px-4 py-3 text-base text-offblack placeholder:text-caption focus:border-orange focus:outline-none"
        />
      </form>

      <div className="space-y-5">
        <h2 className="font-display text-4xl font-bold tracking-[-0.04em] text-navy sm:text-5xl">
          {misalTrySection.title}
        </h2>
        <ul className="space-y-4 text-lg leading-8 text-muted">
          {misalTrySection.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-orange" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
