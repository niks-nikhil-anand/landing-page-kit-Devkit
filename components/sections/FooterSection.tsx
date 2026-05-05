import Link from "next/link";

const kits = [
  { label: "Landing Page", free: true },
  { label: "SaaS Starter" },
  { label: "Auth Boilerplate" },
  { label: "Admin Dashboard" },
  { label: "Browse all →" },
];

const resources = ["Documentation", "Component library", "Changelog", "GitHub"];
const company = ["About", "Blog", "Hire us", "Affiliates"];
const legal = ["Privacy", "Terms", "License (MIT)", "Cookies"];

export function FooterSection() {
  return (
    <footer style={{ background: "var(--dk-bg)", paddingTop: "60px" }}>
      <div className="max-w-[1240px] mx-auto px-5 md:px-7">
        {/* Top grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-8 md:gap-10 lg:gap-12 pb-12 md:pb-16"
          style={{ borderBottom: "1px solid var(--dk-line)" }}
        >
          {/* Brand block — spans 2 cols on mobile/tablet, 1 col on desktop */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link
              href="#"
              className="flex items-center gap-2.5 font-bold no-underline mb-3"
              style={{ fontSize: "17px", letterSpacing: "-0.01em", color: "var(--dk-ink)" }}
            >
              <span
                className="dk-mono font-bold text-sm flex items-center justify-center flex-none"
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "7px",
                  background: "var(--dk-ink)",
                  color: "var(--dk-accent)",
                }}
              >
                ◐
              </span>
              <span>
                devkit<span style={{ color: "var(--dk-muted)" }}>/</span>market
              </span>
            </Link>
            <p
              className="text-sm max-w-[32ch] mt-3 mb-6"
              style={{ color: "var(--dk-muted)" }}
            >
              Production-grade kits and boilerplates for indie devs and small
              teams. Free where it makes sense, paid where the depth earns it.
            </p>
            {/* Social icons */}
            <div className="flex gap-2">
              {[
                {
                  label: "GitHub",
                  svg: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.7-1.4-1.7-1.1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3" />
                    </svg>
                  ),
                },
                {
                  label: "Twitter",
                  svg: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.9 1.2h3.7l-8 9.1L24 22.8h-7.4l-5.8-7.6-6.6 7.6H.5l8.5-9.7L0 1.2h7.6l5.2 6.9zm-1.3 19.4h2L6.5 3.3H4.4z" />
                    </svg>
                  ),
                },
                {
                  label: "Discord",
                  svg: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.3 4.4A19 19 0 0015.7 3a13 13 0 00-.6 1.2 17.6 17.6 0 00-5.2 0A13 13 0 009.3 3 19 19 0 004.7 4.4 20 20 0 001.2 16a19 19 0 005.7 2.9 14 14 0 001.2-2 12 12 0 01-1.9-.9l.5-.4a13.4 13.4 0 0011.6 0l.5.4a12 12 0 01-1.9.9 14 14 0 001.2 2 19 19 0 005.7-2.9 20 20 0 00-3.5-11.6zM8.5 13.7c-1.1 0-2-1-2-2.3 0-1.2.9-2.2 2-2.2s2 1 2 2.3c0 1.2-.9 2.2-2 2.2zm7 0c-1.1 0-2-1-2-2.3 0-1.2.9-2.2 2-2.2s2 1 2 2.3c0 1.2-.9 2.2-2 2.2z" />
                    </svg>
                  ),
                },
                {
                  label: "RSS",
                  svg: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 11a9 9 0 019 9M4 4a16 16 0 0116 16" />
                      <circle cx="5" cy="19" r="1.5" fill="currentColor" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="social-icon flex items-center justify-center rounded-lg"
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1px solid var(--dk-line)",
                    color: "var(--dk-ink)",
                    textDecoration: "none",
                  }}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Kits */}
          <div>
            <h4
              className="dk-mono text-xs uppercase tracking-widest m-0 mb-5 font-medium"
              style={{ color: "var(--dk-muted)" }}
            >
              Kits
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {kits.map((kit) => (
                <li key={kit.label}>
                  <a
                    href="#"
                    className="text-sm no-underline hover:underline"
                    style={{ color: "var(--dk-ink)" }}
                  >
                    {kit.label}
                    {kit.free && (
                      <span
                        className="dk-mono text-[10px] px-1.5 py-px rounded ml-1"
                        style={{
                          background: "var(--dk-accent)",
                          color: "var(--dk-accent-ink)",
                        }}
                      >
                        FREE
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4
              className="dk-mono text-xs uppercase tracking-widest m-0 mb-5 font-medium"
              style={{ color: "var(--dk-muted)" }}
            >
              Resources
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {resources.map((r) => (
                <li key={r}>
                  <a href="#" className="text-sm no-underline hover:underline" style={{ color: "var(--dk-ink)" }}>
                    {r}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="dk-mono text-xs uppercase tracking-widest m-0 mb-5 font-medium"
              style={{ color: "var(--dk-muted)" }}
            >
              Company
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {company.map((c) => (
                <li key={c}>
                  <a href="#" className="text-sm no-underline hover:underline" style={{ color: "var(--dk-ink)" }}>
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              className="dk-mono text-xs uppercase tracking-widest m-0 mb-5 font-medium"
              style={{ color: "var(--dk-muted)" }}
            >
              Legal
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {legal.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm no-underline hover:underline" style={{ color: "var(--dk-ink)" }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="dk-mono text-xs flex flex-col gap-2 items-center text-center sm:flex-row sm:justify-between sm:text-left py-6 md:py-7"
          style={{ color: "var(--dk-muted)" }}
        >
          <span>© 2026 devkitmarket inc.</span>
          <span>
            Made on a Tuesday{" "}
            <span className="dk-serif" style={{ letterSpacing: 0 }}>·</span>{" "}
            v1.0.0
          </span>
          <span>devkitmarket.com</span>
        </div>
      </div>

      {/* Mega text */}
      <div
        className="overflow-hidden footer-mega"
        style={{
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontWeight: 600,
          lineHeight: 0.85,
          letterSpacing: "-0.05em",
          color: "var(--dk-ink)",
          padding: "40px 20px 0",
          borderTop: "1px solid var(--dk-line)",
        }}
      >
        devkit<span className="dk-serif">market</span>
        <span
          className="inline-block align-middle rounded-full mx-[0.15em]"
          style={{
            width: "0.6em",
            height: "0.6em",
            background: "var(--dk-accent)",
          }}
        />
      </div>
    </footer>
  );
}
