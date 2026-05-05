const features = [
  {
    num: "01",
    tag: "HERO",
    title: "Hero with motion",
    desc: "Animated dot-grid background, staggered fade-in, dual CTAs, and a context badge. Tasteful, not flashy.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[22px] h-[22px]">
        <path d="M3 12h18M3 6h18M3 18h12" />
      </svg>
    ),
  },
  {
    num: "02",
    tag: "PROOF",
    title: "Social proof bar",
    desc: "Logo cloud with grayscale-to-color hover. Drop in your customer marks; the layout flexes for any count.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[22px] h-[22px]">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12l2.5 2.5L16 9" />
      </svg>
    ),
  },
  {
    num: "03",
    tag: "FEATURES",
    title: "Features grid",
    desc: "3×2 grid, Lucide icons, scroll-triggered staggered reveal via Intersection Observer. Configurable from one file.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[22px] h-[22px]">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
    highlight: true,
  },
  {
    num: "04",
    tag: "PRICING",
    title: "Pricing tiers",
    desc: "Two or three columns, popular badge, feature checklist, and an optional monthly/annual toggle.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[22px] h-[22px]">
        <path d="M4 7h16v10H4z" />
        <path d="M4 11h16" />
        <circle cx="8" cy="14" r="1" />
      </svg>
    ),
  },
  {
    num: "05",
    tag: "QUOTES",
    title: "Testimonials",
    desc: "Three-card grid with avatar, role, star rating, and a featured quote variant for your strongest endorser.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[22px] h-[22px]">
        <path d="M7 7h4v6c0 2-1 3-3 3M14 7h4v6c0 2-1 3-3 3" />
      </svg>
    ),
  },
  {
    num: "06",
    tag: "FAQ",
    title: "FAQ accordion",
    desc: "shadcn Accordion, keyboard-accessible, with schema.org FAQPage JSON-LD for free SEO juice.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[22px] h-[22px]">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 9c0-2 6-2 6 0 0 2-3 2-3 4M12 17h.01" />
      </svg>
    ),
  },
  {
    num: "07",
    tag: "FORM",
    title: "Waitlist + API",
    desc: "Email capture with Zod validation, idle/loading/success/error states, JSON storage, and docs to swap in any backend.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[22px] h-[22px]">
        <path d="M3 7l9 6 9-6" />
        <rect x="3" y="5" width="18" height="14" />
      </svg>
    ),
  },
  {
    num: "08",
    tag: "THEME",
    title: "Dark mode + a11y",
    desc: "System preference detection, manual toggle, and every section audited at Lighthouse 95+ accessibility.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[22px] h-[22px]">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" />
      </svg>
    ),
  },
  {
    num: "09",
    tag: "SEO",
    title: "SEO & analytics",
    desc: "Metadata API set up, OG image template, Twitter card, plus Plausible & GA4 event helpers wired to every CTA.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[22px] h-[22px]">
        <circle cx="11" cy="11" r="6" />
        <path d="M16 16l4 4" />
      </svg>
    ),
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-24"
      style={{ borderBottom: "1px solid var(--dk-line)" }}
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
            <span
              className="block w-6 h-px"
              style={{ background: "var(--dk-ink)" }}
            />
            02 / Features
          </div>
          <h2
            className="font-semibold m-0 max-w-[16ch]"
            style={{
              fontSize: "clamp(36px, 4.4vw, 60px)",
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            Everything in the box.{" "}
            <span className="dk-serif">Nothing</span> behind a paywall.
          </h2>
          <p
            className="text-base max-w-[38ch] m-0"
            style={{ color: "var(--dk-muted)" }}
          >
            Eight production-ready sections, two themes, and one config file.
            Drop your copy in{" "}
            <code
              className="dk-mono text-[13px] px-1.5 py-0.5 rounded"
              style={{ background: "var(--dk-bg2)" }}
            >
              site.ts
            </code>{" "}
            and ship by lunch.
          </p>
        </div>
      </div>

      {/* Features grid */}
      <div className="max-w-[1240px] mx-auto px-7">
        <div
          className="features-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderTop: "1px solid var(--dk-line)",
            borderLeft: "1px solid var(--dk-line)",
          }}
        >
          {features.map((feat) => (
            <article
              key={feat.num}
              className={`feat-card p-7 pb-9${feat.highlight ? " feat-card--hl" : ""}`}
              style={{
                borderRight: "1px solid var(--dk-line)",
                borderBottom: "1px solid var(--dk-line)",
                background: feat.highlight ? "var(--dk-ink)" : "var(--dk-bg)",
                color: feat.highlight ? "var(--dk-bg)" : "var(--dk-ink)",
              }}
            >
              <div
                className="dk-mono text-[11px] uppercase tracking-[0.08em] flex justify-between mb-7"
                style={{
                  color: feat.highlight
                    ? "rgba(243,241,234,0.5)"
                    : "var(--dk-muted)",
                }}
              >
                <span>{feat.num}</span>
                <span>{feat.tag}</span>
              </div>
              <div
                className="w-11 h-11 rounded-[10px] flex items-center justify-center mb-6"
                style={{
                  border: feat.highlight
                    ? "1px solid rgba(255,255,255,0.18)"
                    : "1px solid var(--dk-line)",
                  background: feat.highlight
                    ? "rgba(255,255,255,0.06)"
                    : "var(--dk-card)",
                  color: feat.highlight ? "var(--dk-accent)" : "var(--dk-ink)",
                }}
              >
                {feat.icon}
              </div>
              <h3
                className="text-xl font-semibold m-0 mb-2"
                style={{
                  letterSpacing: "-0.015em",
                  color: feat.highlight ? "inherit" : "var(--dk-ink)",
                }}
              >
                {feat.title}
              </h3>
              <p
                className="text-sm m-0 max-w-[32ch]"
                style={{
                  color: feat.highlight
                    ? "rgba(243,241,234,0.65)"
                    : "var(--dk-muted)",
                }}
              >
                {feat.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
