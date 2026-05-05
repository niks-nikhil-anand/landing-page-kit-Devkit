const quotes = [
  {
    stars: "★★★★★ · 5/5",
    quote: (
      <>
        <span className="dk-serif">&ldquo;Shipped my SaaS landing page in</span>{" "}
        <b>under three hours</b>
        <span className="dk-serif">
          . The config-driven architecture is honestly better than the $200 kits
          I&apos;ve bought before.&rdquo;
        </span>
      </>
    ),
    author: "Mira Okafor",
    role: "Founder · ledgerline.dev",
    initial: "M",
    featured: true,
  },
  {
    stars: "★★★★★",
    quote: (
      <>
        The dark mode pass alone would&apos;ve taken me a day. Every section just{" "}
        <em>works</em> in both themes — no half-baked variables, no broken
        contrast.
      </>
    ),
    author: "Jonas Reinhardt",
    role: "Eng · stack/lab",
    initial: "J",
    featured: false,
  },
  {
    stars: "★★★★★",
    quote: (
      <>
        The schema.org FAQ markup is what got me. Tiny detail, real SEO impact.
        Free? <em>Make it make sense.</em>
      </>
    ),
    author: "Priya Anand",
    role: "Indie · paperplane.studio",
    initial: "P",
    featured: false,
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="voices"
      className="py-16 md:py-24"
      style={{ borderBottom: "1px solid var(--dk-line)" }}
    >
      <div className="max-w-[1240px] mx-auto px-5 md:px-7">
        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[220px_1fr_1fr] gap-6 md:gap-10 items-end mb-10 md:mb-14">
          <div
            className="dk-mono text-xs uppercase tracking-widest flex items-center gap-2.5"
            style={{ color: "var(--dk-ink2)" }}
          >
            <span className="block w-6 h-px" style={{ background: "var(--dk-ink)" }} />
            04 / Voices
          </div>
          <h2
            className="font-semibold m-0 max-w-[16ch]"
            style={{
              fontSize: "clamp(32px, 4.4vw, 60px)",
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            Devs <span className="dk-serif">actually</span> shipping with it.
          </h2>
          <p className="text-base m-0 max-w-[38ch]" style={{ color: "var(--dk-muted)" }}>
            Pulled from GitHub issues, Twitter replies, and the devkitmarket
            Discord. Names changed for the placeholders, but the receipts are
            real.
          </p>
        </div>

        {/* Quotes grid */}
        <div
          className="overflow-hidden grid grid-cols-1 md:grid-cols-3"
          style={{
            border: "1px solid var(--dk-line)",
            borderRadius: "18px",
          }}
        >
          {quotes.map((q, i) => (
            <div
              key={q.author}
              className={`flex flex-col gap-5 p-7 md:p-9${i < 2 ? " quote-card-border" : ""}`}
              style={{
                borderBottom: i < 2 ? "1px solid var(--dk-line)" : "none",
                background: q.featured ? "var(--dk-accent)" : "var(--dk-card)",
                color: q.featured ? "var(--dk-accent-ink)" : "var(--dk-ink)",
                minHeight: "280px",
              }}
            >
              {/* Stars */}
              <div
                className="dk-mono text-xs tracking-widest"
                style={{ color: q.featured ? "var(--dk-accent-ink)" : "var(--dk-ink)" }}
              >
                {q.stars}
              </div>

              {/* Quote */}
              <blockquote
                className="m-0"
                style={{
                  fontSize: q.featured ? "clamp(18px, 2.2vw, 26px)" : "clamp(16px, 1.8vw, 19px)",
                  lineHeight: q.featured ? 1.25 : 1.4,
                  letterSpacing: q.featured ? "-0.02em" : "-0.01em",
                }}
              >
                {q.quote}
              </blockquote>

              {/* Author */}
              <div
                className="mt-auto flex gap-3 items-center pt-4"
                style={{
                  borderTop: q.featured
                    ? "1px solid rgba(13,31,4,0.2)"
                    : "1px solid var(--dk-line-soft)",
                }}
              >
                <div
                  className="w-[38px] h-[38px] rounded-full flex items-center justify-center font-bold text-sm flex-none"
                  style={{
                    background: q.featured ? "var(--dk-accent-ink)" : "var(--dk-ink)",
                    color: q.featured ? "var(--dk-accent)" : "var(--dk-bg)",
                  }}
                >
                  {q.initial}
                </div>
                <div>
                  <div className="font-semibold text-sm leading-tight">{q.author}</div>
                  <div
                    className="dk-mono text-xs mt-0.5"
                    style={{
                      color: q.featured
                        ? "rgba(13,31,4,0.7)"
                        : "var(--dk-muted)",
                    }}
                  >
                    {q.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
