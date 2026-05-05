# Landing Page Kit — by DevKit

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14+-black?logo=next.js)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-latest-black)](https://ui.shadcn.com)

A high-performance, beautifully designed landing page kit that competitors charge $100+ for. Yours for free. Built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **shadcn/ui**.

**[Live Demo](https://devkit-landing-page.vercel.app)** · **[Get it on DevKit Market](https://devkitmarket.com/products/landing-page-kit)**

---

## 🚀 The Pitch

"Ship a $100-value landing page at zero cost."

This isn't a "Lite" version. Every section, every animation, and every feature is included. No locked components, no gating. This is the most complete free landing page kit available, designed to help you launch your SaaS, product, or portfolio in minutes.

## ✨ Features

- 🎭 **8+ Premium Sections**: Hero, Social Proof, Features, Pricing, Testimonials, FAQ, Waitlist, and Footer.
- 🌓 **Dark Mode**: Seamless light/dark toggle with system preference detection via `next-themes`.
- 📱 **Mobile First**: Fully responsive navigation with a smooth hamburger drawer.
- ⚡ **Animations**: Scroll-triggered reveals, staggered entrances, and micro-interactions.
- 🛠️ **Centralized Config**: Customize your entire site by editing **one file** (`config/site.ts`).
- 📧 **Waitlist Ready**: Built-in email capture with Zod validation and local JSON storage.
- 🔍 **SEO Optimized**: Full Metadata API setup, OpenGraph images, and Schema.org FAQ structured data.
- 📈 **Analytics Helpers**: Ready-to-use wrappers for Plausible and GA4 event tracking.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Components**: [shadcn/ui](https://ui.shadcn.com)
- **Icons**: [Lucide React](https://lucide.dev)
- **Validation**: [Zod](https://zod.dev)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Language**: [TypeScript](https://www.typescriptlang.org)

## 🚦 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/niks-nikhil-anand/landing-page-kit-Devkit.git
cd landing-page-kit-Devkit
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your landing page.

## 🎨 Customization

The biggest differentiator of this kit is the **Central Config**. You don't need to dive into complex components to change your content.

Open `config/site.ts` and update the `siteConfig` object:

```tsx
export const siteConfig = {
  name: "YourProduct",
  description: "One-line pitch for your product",
  // Update Hero, Features, Pricing, etc. here...
};
```

All UI components are built with **shadcn/ui**. If you want to change colors or styling, edit `app/globals.css` to update the CSS variables.

## 💾 Waitlist Backend

By default, waitlist signups are saved to `data/waitlist.json`. To use a production-ready backend, update `app/api/waitlist/route.ts`. 

The kit is designed to be easily swapped with:
- **Supabase**: Direct DB insert.
- **Resend**: Send an email notification.
- **ConvertKit / Mailchimp**: API integration.

## 📂 Project Structure

```text
├── app/                  # App Router pages & API routes
├── components/           
│   ├── sections/         # Main landing page sections
│   ├── layout/           # Navbar, Footer, Theme toggle
│   └── ui/               # shadcn/ui primitives
├── config/               # Central site configuration (Edit this!)
├── hooks/                # Custom hooks (Scroll animations, etc.)
├── lib/                  # Utilities, Validators, Analytics
└── public/               # Static assets (Logos, OG images)
```

## 🚢 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new).

1. Push your code to GitHub.
2. Import the project into Vercel.
3. Your landing page is live!

## 📄 License

This project is licensed under the [MIT License](LICENSE). You are free to use it for personal and commercial projects.

---

**Built by [DevKit Market](https://devkitmarket.com)** — High-quality kits for developers who ship.
