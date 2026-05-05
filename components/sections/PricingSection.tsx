"use client";

import { useState } from "react";

const tiers = [
  {
    name: "HOBBY",
    price: { monthly: "$0", annual: "$0" },
    unit: "/mo",
    desc: "Everything you need to launch a side project this weekend.",
    features: [
      "Up to 1,000 visitors / mo",
      "All 8 sections",
      "Dark mode + a11y",
      "Community support",
    ],
    cta: "Get started",
    popular: false,
  },
  {
    name: "PRO",
    price: { monthly: "$19", annual: "$15" },
    unit: "/mo",
    desc: "For makers shipping to a real audience with real metrics.",
    features: [
      "Everything in Hobby",
      "Unlimited visitors",
      "Conversion analytics",
      "A/B test framework",
      "Priority Discord",
    ],
    cta: "Subscribe",
    popular: true,
  },
  {
    name: "ENTERPRISE",
    price: { monthly: "Custom", annual: "Custom" },
    unit: "",
    desc: "For teams and agencies shipping at scale, with their own legal team.",
    features: [
      "Everything in Pro",
      "SSO & audit logs",
      "Dedicated CSM",
      "99.99% SLA",
      "Custom contracts",
    ],
    cta: "Talk to sales",
    popular: false,
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" className="w-2.5 h-2.5">
      <path d="M2 5l2 2 4-5" />
    </svg>
  );
}

export function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section
      id="pricing"
      className="py-24"
      style={{
        borderBottom: "1px solid var(--dk-line)",
        background: "var(--dk-bg2)",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-7">
        {/* Section header */}
        <div
          className="grid gap-10 items-end mb-14"
          style={{ gridTemplateColumns: "220px 1fr 1fr" }}
        >
          <div
            className="dk-mono text-xs uppercase tracking-widest flex items-center gap-2.5"
            style={{ color: "var(--dk-ink2)" }}
          >
            <span className="block w-6 h-px" style={{ background: "var(--dk-ink)" }} />
            03 / Pricing
          </div>
          <h2
            className="font-semibold m-0 max-w-[16ch]"
            style={{
              fontSize: "clamp(36px, 4.4vw, 60px)",
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            One price.{" "}
            <span className="dk-serif">Zero.</span>
          </h2>
          <p className="text-base m-0 max-w-[38ch]" style={{ color: "var(--dk-muted)" }}>
            The kit is free. The tiers below are the example pricing component{" "}
            <em>inside</em> the kit — drop your numbers in{" "}
            <code
              className="dk-mono text-[13px] px-1.5 py-0.5 rounded"
              style={{ background: "var(--dk-bg)" }}
            >
              site.ts
            </code>{" "}
            and you&apos;re done.
          </p>
        </div>

        {/* Toggle */}
        <div
          className="inline-flex dk-mono text-xs rounded-full p-1 mb-9"
          style={{
            border: "1px solid var(--dk-line)",
            background: "var(--dk-card)",
          }}
        >
          <button
            onClick={() => setAnnual(false)}
            className="px-3.5 py-1.5 rounded-full cursor-pointer border-none font-[inherit] text-xs transition-colors"
            style={{
              background: !annual ? "var(--dk-ink)" : "transparent",
              color: !annual ? "var(--dk-bg)" : "var(--dk-ink2)",
            }}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            className="px-3.5 py-1.5 rounded-full cursor-pointer border-none font-[inherit] text-xs transition-colors"
            style={{
              background: annual ? "var(--dk-ink)" : "transparent",
              color: annual ? "var(--dk-bg)" : "var(--dk-ink2)",
            }}
          >
            Annual{" "}
            <span style={{ opacity: 0.5 }}>— save 20%</span>
          </button>
        </div>

        {/* Pricing cards */}
        <div
          className="overflow-hidden"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            border: "1px solid var(--dk-line)",
            borderRadius: "18px",
            background: "var(--dk-card)",
          }}
        >
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className="p-9 flex flex-col gap-6"
              style={{
                borderRight: i < 2 ? "1px solid var(--dk-line)" : "none",
                background: tier.popular ? "var(--dk-ink)" : "var(--dk-card)",
                color: tier.popular ? "var(--dk-bg)" : "var(--dk-ink)",
              }}
            >
              {/* Tier name */}
              <div
                className="dk-mono text-xs uppercase tracking-widest flex justify-between items-center"
              >
                <span>{tier.name}</span>
                {tier.popular && (
                  <span
                    className="dk-mono font-bold text-[11px] px-2.5 py-1 rounded-full"
                    style={{
                      background: "var(--dk-accent)",
                      color: "var(--dk-accent-ink)",
                    }}
                  >
                    ★ POPULAR
                  </span>
                )}
              </div>

              {/* Price */}
              <div
                className="font-semibold flex items-baseline gap-1.5"
                style={{ fontSize: "56px", lineHeight: 1, letterSpacing: "-0.04em" }}
              >
                {annual ? tier.price.annual : tier.price.monthly}
                {tier.unit && (
                  <small
                    className="text-[15px] font-medium"
                    style={{
                      letterSpacing: 0,
                      color: tier.popular ? "rgba(243,241,234,0.6)" : "var(--dk-muted)",
                    }}
                  >
                    {tier.unit}
                  </small>
                )}
              </div>

              {/* Description */}
              <p
                className="text-sm m-0"
                style={{
                  color: tier.popular ? "rgba(243,241,234,0.65)" : "var(--dk-muted)",
                }}
              >
                {tier.desc}
              </p>

              {/* Features */}
              <ul
                className="list-none p-0 m-0 flex flex-col gap-3 text-sm pt-5"
                style={{
                  borderTop: tier.popular
                    ? "1px solid rgba(243,241,234,0.16)"
                    : "1px solid var(--dk-line-soft)",
                }}
              >
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2.5 items-start">
                    <span
                      className="w-[18px] h-[18px] rounded-full flex items-center justify-center flex-none mt-px"
                      style={{
                        border: tier.popular
                          ? "1px solid rgba(243,241,234,0.3)"
                          : "1px solid var(--dk-line)",
                        background: tier.popular ? "transparent" : "var(--dk-bg)",
                        color: tier.popular ? "var(--dk-accent)" : "var(--dk-ink)",
                      }}
                    >
                      <CheckIcon />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#waitlist"
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold no-underline rounded-[10px] border hover:-translate-y-px transition-transform"
                style={{
                  padding: "11px 18px",
                  background: tier.popular
                    ? "var(--dk-accent)"
                    : "var(--dk-bg)",
                  color: tier.popular ? "var(--dk-accent-ink)" : "var(--dk-ink)",
                  borderColor: tier.popular ? "var(--dk-ink)" : "var(--dk-line)",
                }}
              >
                {tier.cta} <span>↗</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
