"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks: [string, string][] = [
  ["Features", "#features"],
  ["Pricing", "#pricing"],
  ["Voices", "#voices"],
  ["FAQ", "#faq"],
  ["Changelog", "#waitlist"],
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-30"
      style={{
        borderBottom: "1px solid var(--dk-line)",
        background: "rgba(243,241,234,0.92)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="px-5 md:px-7 max-w-[1240px] mx-auto">
        {/* Main bar */}
        <div className="flex items-center justify-between py-[18px] lg:grid lg:gap-8 lg:grid-cols-[auto_1fr_auto]">
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

          {/* Nav links (desktop only) */}
          <ul className="hidden lg:flex gap-7 list-none p-0 m-0 justify-center">
            {navLinks.map(([label, href]) => (
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

          {/* Right side: CTAs (desktop) + hamburger (mobile) */}
          <div className="flex gap-2.5 items-center">
            <Link
              href="#"
              className="hidden lg:inline-flex items-center gap-2 text-sm font-semibold no-underline rounded-[10px] border bg-transparent hover:-translate-y-px transition-transform"
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
              className="hidden lg:inline-flex items-center gap-2 text-sm font-semibold no-underline rounded-[10px] border hover:-translate-y-px transition-transform"
              style={{
                padding: "11px 18px",
                background: "var(--dk-ink)",
                color: "var(--dk-bg)",
                borderColor: "var(--dk-ink)",
              }}
            >
              Get the kit <span>↗</span>
            </Link>

            {/* Hamburger button (mobile only) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col justify-center gap-[5px] w-9 h-9 rounded-lg cursor-pointer border-none bg-transparent p-2"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span
                className="block w-full h-[1.5px] transition-all duration-200 origin-center"
                style={{
                  background: "var(--dk-ink)",
                  transform: menuOpen ? "rotate(45deg) translateY(6.5px)" : undefined,
                }}
              />
              <span
                className="block w-full h-[1.5px] transition-all duration-200"
                style={{
                  background: "var(--dk-ink)",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-full h-[1.5px] transition-all duration-200 origin-center"
                style={{
                  background: "var(--dk-ink)",
                  transform: menuOpen ? "rotate(-45deg) translateY(-6.5px)" : undefined,
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div
            className="lg:hidden pb-5"
            style={{ borderTop: "1px solid var(--dk-line)" }}
          >
            <ul className="list-none p-0 m-0 pt-4 flex flex-col">
              {navLinks.map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 text-sm font-medium no-underline"
                    style={{ color: "var(--dk-ink2)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div
              className="flex flex-col gap-2.5 mt-4 pt-4"
              style={{ borderTop: "1px solid var(--dk-line-soft)" }}
            >
              <Link
                href="#"
                className="inline-flex justify-center items-center gap-2 text-sm font-semibold no-underline rounded-[10px] border"
                style={{
                  padding: "12px 18px",
                  borderColor: "var(--dk-line)",
                  color: "var(--dk-ink)",
                }}
              >
                Sign in
              </Link>
              <Link
                href="#waitlist"
                onClick={() => setMenuOpen(false)}
                className="inline-flex justify-center items-center gap-2 text-sm font-semibold no-underline rounded-[10px] border"
                style={{
                  padding: "12px 18px",
                  background: "var(--dk-ink)",
                  color: "var(--dk-bg)",
                  borderColor: "var(--dk-ink)",
                }}
              >
                Get the kit ↗
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
