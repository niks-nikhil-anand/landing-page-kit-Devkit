"use client";

import { useState } from "react";

export function WaitlistSection() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("success");
  }

  return (
    <section
      id="waitlist"
      className="relative overflow-hidden"
      style={{
        background: "var(--dk-ink)",
        color: "var(--dk-bg)",
        borderBottom: "1px solid var(--dk-line)",
      }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(243,241,234,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(243,241,234,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative max-w-[1240px] mx-auto px-5 md:px-7 py-16 md:py-24 grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 md:gap-20 items-end">
        {/* Copy */}
        <div>
          <div
            className="dk-mono text-xs uppercase tracking-widest flex items-center gap-2.5 mb-6"
            style={{ color: "var(--dk-accent)" }}
          >
            <span className="block w-6 h-px" style={{ background: "var(--dk-accent)" }} />
            06 / Get it
          </div>
          <h2
            className="font-semibold m-0 max-w-[18ch]"
            style={{
              fontSize: "clamp(32px, 4.4vw, 60px)",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "var(--dk-bg)",
            }}
          >
            Ready when you are.{" "}
            <span
              style={{
                background: "var(--dk-accent)",
                color: "var(--dk-accent-ink)",
                padding: "0 0.1em",
                borderRadius: "4px",
              }}
            >
              Free forever.
            </span>
          </h2>
          <p
            className="mt-4 md:mt-5 text-[17px] max-w-[44ch]"
            style={{ color: "rgba(243,241,234,0.7)" }}
          >
            Drop your email and we&apos;ll send the download link, plus a
            heads-up when the next free kit drops (Auth Boilerplate is shipping
            in June).
          </p>
        </div>

        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          className="rounded-[18px] p-6 md:p-7"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(243,241,234,0.18)",
          }}
        >
          <label
            htmlFor="waitlist-email"
            className="dk-mono text-[11px] uppercase tracking-widest"
            style={{ color: "rgba(243,241,234,0.55)" }}
          >
            Your email
          </label>
          <div className="flex flex-col sm:grid sm:grid-cols-[1fr_auto] gap-2 mt-2.5 mb-4">
            <input
              id="waitlist-email"
              type="email"
              placeholder="you@studio.dev"
              required
              className="rounded-[10px] text-[15px] outline-none transition-colors"
              style={{
                border: "1px solid rgba(243,241,234,0.2)",
                background: "rgba(255,255,255,0.03)",
                color: "var(--dk-bg)",
                padding: "14px 16px",
                fontFamily: "inherit",
              }}
              onFocus={(e) =>
                ((e.target as HTMLInputElement).style.borderColor =
                  "var(--dk-accent)")
              }
              onBlur={(e) =>
                ((e.target as HTMLInputElement).style.borderColor =
                  "rgba(243,241,234,0.2)")
              }
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold rounded-[10px] border hover:-translate-y-px transition-all cursor-pointer"
              style={{
                padding: "14px 18px",
                background: status === "success" ? "var(--dk-accent)" : "var(--dk-bg)",
                color: status === "success" ? "var(--dk-accent-ink)" : "var(--dk-ink)",
                borderColor: status === "success" ? "var(--dk-accent)" : "var(--dk-bg)",
                fontFamily: "inherit",
              }}
            >
              {status === "success" ? "You're in ✓" : "Join waitlist"}
            </button>
          </div>
          <div
            className="dk-mono text-[11px] flex gap-3 md:gap-4 flex-wrap"
            style={{ color: "rgba(243,241,234,0.5)" }}
          >
            {["No spam, ever", "Unsubscribe in one click", "2,148 devs already in"].map(
              (item) => (
                <span key={item}>
                  <span style={{ color: "var(--dk-accent)" }}>▸ </span>
                  {item}
                </span>
              )
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
