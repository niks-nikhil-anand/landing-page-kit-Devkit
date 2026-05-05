const logos = [
  { name: "acme", dot: "●", suffix: "co" },
  { name: "stack/lab" },
  { name: "moonbase" },
  { name: "north—star" },
  { name: "paperplane" },
  { name: "vector∘" },
];

export function LogosSection() {
  return (
    <section style={{ borderBottom: "1px solid var(--dk-line)", background: "var(--dk-bg2)" }}>
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] items-center px-5 md:px-7 py-7 max-w-[1240px] mx-auto gap-6 md:gap-10">
        {/* Label */}
        <div
          className="dk-mono text-xs uppercase tracking-widest leading-relaxed"
          style={{ color: "var(--dk-ink2)" }}
        >
          <b className="block" style={{ color: "var(--dk-ink)" }}>
            Trusted by makers
          </b>
          shipping at indie studios &nbsp;and&nbsp; YC-backed startups
        </div>

        {/* Logo list */}
        <div
          className="grid grid-cols-3 md:grid-cols-6 items-center md:border-l"
          style={{ borderColor: "var(--dk-line-soft)" }}
        >
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="logo-item text-center font-bold text-[15px] md:text-[17px] py-3 md:py-3.5 px-3 md:px-[18px] cursor-default border-r"
              style={{
                letterSpacing: "-0.02em",
                color: "var(--dk-muted)",
                borderColor: "var(--dk-line-soft)",
                fontFamily: "var(--font-space-grotesk), sans-serif",
              }}
            >
              {logo.dot ? (
                <>
                  {logo.name}
                  <span style={{ color: "var(--dk-accent)" }}>{logo.dot}</span>
                  {logo.suffix}
                </>
              ) : (
                logo.name
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
