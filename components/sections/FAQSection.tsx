const faqs = [
  {
    num: "01",
    q: "Is this really free? What's the catch?",
    a: 'Yes, MIT licensed, no gating, no email-wall, no "Pro tier". It\'s a marketing play: the kit drives traffic to devkitmarket.com, where we sell the bigger boilerplates (SaaS Starter, Auth, Admin Dashboard). Use it for client work, ship it on commercial projects, fork it, sell what you build with it.',
  },
  {
    num: "02",
    q: "What's actually included?",
    a: "Eight production sections: Hero, Social Proof, Features (3×2), Pricing, Testimonials, FAQ, Waitlist, Footer. Plus a sticky navbar with mobile drawer, dark/light mode, scroll-triggered animations, SEO metadata, OG image template, analytics helpers, and a Zod-validated waitlist API route.",
  },
  {
    num: "03",
    q: "How do I customize the colors and copy?",
    a: "All content lives in config/site.ts — nav, hero, features, pricing tiers, testimonials, FAQ, footer columns. Colors live as CSS variables in globals.css. Edit one file and the whole page updates.",
  },
  {
    num: "04",
    q: "Do I need a backend for the waitlist?",
    a: "No. Out of the box, signups write to a local JSON file. The README has a five-minute swap guide for Supabase, Resend, ConvertKit, Mailchimp, or any custom endpoint.",
  },
  {
    num: "05",
    q: "What stack? Can I use Vue or Svelte?",
    a: "Next.js 14 (App Router) + TypeScript + Tailwind + shadcn/ui. Not Vue or Svelte today — but the design tokens and Tailwind patterns port cleanly if you want to translate.",
  },
  {
    num: "06",
    q: "How do I deploy this?",
    a: "One click to Vercel. Netlify and Cloudflare Pages also work — there's nothing Vercel-specific. The README walks through environment variables for each.",
  },
  {
    num: "07",
    q: "Lighthouse scores?",
    a: "Performance 98, Accessibility 100, Best Practices 100, SEO 100 on the default config. Your numbers will vary based on the assets you swap in.",
  },
];

function PlusIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1.6">
      <path d="M6 1v10M1 6h10" />
    </svg>
  );
}

export function FAQSection() {
  return (
    <section
      id="faq"
      className="py-16 md:py-24"
      style={{
        borderBottom: "1px solid var(--dk-line)",
        background: "var(--dk-bg2)",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-5 md:px-7">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 md:gap-20">
          {/* Sidebar */}
          <div>
            <div
              className="dk-mono text-xs uppercase tracking-widest flex items-center gap-2.5 mb-6 md:mb-7"
              style={{ color: "var(--dk-ink2)" }}
            >
              <span className="block w-6 h-px" style={{ background: "var(--dk-ink)" }} />
              05 / Questions
            </div>
            <h2
              className="font-semibold m-0"
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              Things people{" "}
              <span className="dk-serif">actually</span> ask.
            </h2>
            <p
              className="text-base mt-4 md:mt-5 max-w-[38ch]"
              style={{ color: "var(--dk-muted)" }}
            >
              Still stuck? Open an issue on GitHub or hop in the Discord —
              there&apos;s a #landing-page channel.
            </p>
          </div>

          {/* FAQ list */}
          <div style={{ borderTop: "1px solid var(--dk-line)" }}>
            {faqs.map((faq, i) => (
              <details
                key={faq.num}
                className="group"
                style={{
                  borderBottom: "1px solid var(--dk-line)",
                  padding: "20px 4px",
                }}
                open={i === 0}
              >
                <summary
                  className="list-none cursor-pointer flex justify-between gap-4 md:gap-6 items-center font-medium text-base md:text-[18px]"
                  style={{
                    letterSpacing: "-0.01em",
                    listStyle: "none",
                  }}
                >
                  <span>
                    <span
                      className="dk-mono text-xs mr-3 md:mr-4"
                      style={{ color: "var(--dk-muted)" }}
                    >
                      {faq.num}
                    </span>
                    {faq.q}
                  </span>
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-none transition-all group-open:rotate-45"
                    style={{
                      border: "1px solid var(--dk-line)",
                    }}
                  >
                    <PlusIcon />
                  </span>
                </summary>
                <div
                  className="mt-3.5 text-[15px] max-w-[72ch]"
                  style={{
                    color: "var(--dk-muted)",
                    paddingLeft: "28px",
                  }}
                >
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
