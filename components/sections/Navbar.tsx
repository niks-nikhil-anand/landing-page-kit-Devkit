import Link from "next/link";

export function Navbar() {
  return (
    <nav
      className="sticky top-0 z-30"
      style={{
        borderBottom: "1px solid var(--dk-line)",
        background: "rgba(243,241,234,0.92)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        className="grid gap-8 items-center px-7 py-[18px] max-w-[1240px] mx-auto"
        style={{ gridTemplateColumns: "auto 1fr auto" }}
      >
        {/* Logo */}
        <Link
          href="#"
          className="flex items-center gap-2.5 font-bold no-underline"
          style={{
            letterSpacing: "-0.01em",
            fontSize: "17px",
            color: "var(--dk-ink)",
          }}
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
            devkit
            <span style={{ color: "var(--dk-muted)" }}>/</span>
            market
          </span>
        </Link>

        {/* Nav links */}
        <ul className="hidden md:flex gap-7 list-none p-0 m-0 justify-center">
          {[
            ["Features", "#features"],
            ["Pricing", "#pricing"],
            ["Voices", "#voices"],
            ["FAQ", "#faq"],
            ["Changelog", "#waitlist"],
          ].map(([label, href]) => (
            <li key={label}>
              <Link
                href={href}
                className="text-sm font-medium no-underline hover:opacity-100 transition-opacity"
                style={{ color: "var(--dk-ink2)" }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex gap-2.5 items-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold no-underline rounded-[10px] border bg-transparent hover:-translate-y-px transition-transform"
            style={{
              padding: "11px 18px",
              borderColor: "var(--dk-line)",
              color: "var(--dk-ink)",
            }}
          >
            Sign in
          </Link>
          <Link
            href="#waitlist"
            className="inline-flex items-center gap-2 text-sm font-semibold no-underline rounded-[10px] border hover:-translate-y-px transition-transform"
            style={{
              padding: "11px 18px",
              background: "var(--dk-ink)",
              color: "var(--dk-bg)",
              borderColor: "var(--dk-ink)",
            }}
          >
            Get the kit <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
