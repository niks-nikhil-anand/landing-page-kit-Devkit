import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ borderBottom: "1px solid var(--dk-line)" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--dk-line-soft) 1px, transparent 1px), linear-gradient(90deg, var(--dk-line-soft) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          backgroundPosition: "-1px -1px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 80%)",
        }}
      />

      <div className="relative px-7 pt-20 pb-24 max-w-[1240px] mx-auto hero-animate">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2.5 dk-mono text-xs rounded-full border mb-7"
          style={{
            padding: "6px 12px 6px 8px",
            borderColor: "var(--dk-line)",
            background: "var(--dk-bg)",
          }}
        >
          <span
            className="dk-mono font-bold text-[11px] rounded-full px-2 py-0.5"
            style={{
              background: "var(--dk-accent)",
              color: "var(--dk-accent-ink)",
            }}
          >
            FREE
          </span>
          <span>Worth $100 · Open source · MIT</span>
        </div>

        {/* Headline */}
        <h1
          className="font-semibold m-0 mb-7 max-w-[14ch]"
          style={{
            fontSize: "clamp(48px, 7.4vw, 104px)",
            lineHeight: 0.95,
            letterSpacing: "-0.035em",
          }}
        >
          Landing pages
          <br />
          that actually{" "}
          <span className="dk-serif" style={{ letterSpacing: "-0.02em" }}>
            convert
          </span>{" "}
          —
          <br />
          <span
            style={{
              background: "var(--dk-accent)",
              padding: "0 0.12em",
              borderRadius: "4px",
            }}
          >
            free forever.
          </span>
        </h1>

        {/* Lede */}
        <p
          className="m-0 mb-9 max-w-[56ch]"
          style={{
            fontSize: "clamp(17px, 1.4vw, 20px)",
            color: "var(--dk-ink2)",
          }}
        >
          The complete kit. Hero, social proof, features, pricing, testimonials,
          FAQ, waitlist, dark mode, analytics. No upsell. No "Lite" tier. No
          locked sections. Built on Next.js 14, Tailwind, and shadcn/ui.
        </p>

        {/* CTA row */}
        <div className="flex gap-3 flex-wrap items-center">
          <Link
            href="#waitlist"
            className="inline-flex items-center gap-2 font-semibold no-underline rounded-[12px] border hover:-translate-y-px transition-transform"
            style={{
              padding: "15px 22px",
              fontSize: "15px",
              background: "var(--dk-ink)",
              color: "var(--dk-bg)",
              borderColor: "var(--dk-ink)",
            }}
          >
            Download the kit <span>↗</span>
          </Link>
          <Link
            href="#"
            className="inline-flex items-center gap-2 font-semibold no-underline rounded-[12px] border hover:-translate-y-px transition-transform"
            style={{
              padding: "15px 22px",
              fontSize: "15px",
              background: "var(--dk-bg)",
              color: "var(--dk-ink)",
              borderColor: "var(--dk-line)",
            }}
          >
            View on GitHub <span>↗</span>
          </Link>
          <span
            className="dk-mono text-[13px] inline-flex items-center gap-2 ml-2"
            style={{ color: "var(--dk-muted)" }}
          >
            <span style={{ color: "var(--dk-ink)", letterSpacing: "1px" }}>
              ★★★★★
            </span>{" "}
            4.9 · 2,148 devs shipped this week
          </span>
        </div>

        {/* Preview Mosaic */}
        <div
          className="mt-16 overflow-hidden"
          style={{
            border: "1px solid var(--dk-line)",
            borderRadius: "18px",
            background: "var(--dk-card)",
            boxShadow: "var(--dk-shadow)",
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
          }}
        >
          {/* Left side */}
          <div
            className="p-7 pb-0"
            style={{ borderRight: "1px solid var(--dk-line)" }}
          >
            <div
              className="dk-mono text-[11px] uppercase tracking-widest mb-3.5 flex items-center justify-between"
              style={{ color: "var(--dk-muted)" }}
            >
              <span>preview.tsx</span>
              <span className="flex gap-1.5">
                <span
                  className="w-2.5 h-2.5 rounded-full inline-block"
                  style={{ background: "#e8635c" }}
                />
                <span
                  className="w-2.5 h-2.5 rounded-full inline-block"
                  style={{ background: "#e8c45c" }}
                />
                <span
                  className="w-2.5 h-2.5 rounded-full inline-block"
                  style={{ background: "#5cc25c" }}
                />
              </span>
            </div>
            <h3
              className="font-semibold m-0 mb-2.5"
              style={{
                fontSize: "36px",
                lineHeight: 1,
                letterSpacing: "-0.025em",
              }}
            >
              Build pages, not boilerplate.
            </h3>
            <p
              className="m-0 mb-5 text-sm max-w-[38ch]"
              style={{ color: "var(--dk-muted)" }}
            >
              One config file. Eight production sections. Edit copy, swap
              colors, ship.
            </p>
            <div className="flex gap-2 mb-6">
              <span
                className="px-3.5 py-2 rounded-lg text-xs font-semibold border"
                style={{
                  background: "var(--dk-ink)",
                  color: "var(--dk-bg)",
                  borderColor: "var(--dk-line)",
                }}
              >
                Get started
              </span>
              <span
                className="px-3.5 py-2 rounded-lg text-xs font-semibold border"
                style={{
                  borderColor: "var(--dk-line)",
                  color: "var(--dk-ink)",
                }}
              >
                Docs
              </span>
            </div>
            <div
              className="flex gap-5 py-3.5 items-center opacity-70"
              style={{ borderTop: "1px solid var(--dk-line-soft)" }}
            >
              <span
                className="dk-mono text-[11px] uppercase"
                style={{ color: "var(--dk-muted)" }}
              >
                USED BY
              </span>
              {["acme▸co", "stack/lab", "north—star", "moonbase"].map((name) => (
                <span
                  key={name}
                  className="font-bold text-[13px]"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div
            className="p-6 flex flex-col gap-2.5"
            style={{ background: "var(--dk-bg2)" }}
          >
            {[
              {
                num: "01",
                title: "Hero with bg pattern",
                desc: "Animated gradient mesh + dot grid + entrance stagger.",
                featured: true,
              },
              {
                num: "02",
                title: "Pricing · 3 tiers",
                desc: "Monthly / annual toggle, popular badge, feature checklists.",
              },
              {
                num: "03",
                title: "FAQ · schema.org",
                desc: "Accessible accordion with FAQPage JSON-LD baked in.",
              },
              {
                num: "04",
                title: "Waitlist + API route",
                desc: "Zod-validated email capture · swap backend in 5 minutes.",
              },
            ].map((card) => (
              <div
                key={card.num}
                className="rounded-[10px] p-3 text-xs flex gap-2.5 items-start"
                style={{
                  border: card.featured
                    ? `1px solid var(--dk-line)`
                    : `1px solid var(--dk-line)`,
                  borderLeft: card.featured
                    ? `3px solid var(--dk-accent)`
                    : `1px solid var(--dk-line)`,
                  background: "var(--dk-card)",
                }}
              >
                <span
                  className="dk-mono font-bold text-xs flex items-center justify-center flex-none"
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "6px",
                    background: "var(--dk-ink)",
                    color: "var(--dk-accent)",
                  }}
                >
                  {card.num}
                </span>
                <div>
                  <b className="block text-[13px] mb-0.5">{card.title}</b>
                  <span style={{ color: "var(--dk-muted)" }}>{card.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
