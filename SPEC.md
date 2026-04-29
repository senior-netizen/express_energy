# Fuel Retail Website — Full Build Specification
> **For use with Codex / AI coding agents.** Follow each section in order. Do not skip sections. Where values are marked `[REPLACE]`, substitute the actual brand values before running.

---

## 1. Project Overview

Build a **public-facing marketing and information website** for a Zimbabwean fuel retail company. The site is informational — there is no e-commerce checkout. Its primary jobs are:

1. Display live fuel prices (ZWG and USD)
2. Help customers find the nearest station
3. Explain payment methods (EcoCash, InnBucks, Omari, Cash)
4. Explain the diaspora fuel gifting feature ("Send Fuel")
5. Showcase services at the forecourt
6. Display partner logos (TFN — Truck Fuel Network, Petrotrade)

---

## 2. Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | **Next.js 14 (App Router)** | SSR for SEO, fast page loads, easy deployment |
| Styling | **Tailwind CSS** | Rapid development, consistent design tokens |
| CMS | **Sanity.io** (free tier) | Non-technical staff can update fuel prices and station data |
| Maps | **Google Maps Embed API** | Station locator map |
| Hosting | **Vercel** | Free tier, global CDN, automatic deployments from GitHub |
| Language | **TypeScript** | Type safety across the codebase |
| Icons | **Lucide React** | Lightweight, consistent icon set |

---

## 3. Repository Structure

```
/
├── app/
│   ├── layout.tsx               # Root layout — nav + footer
│   ├── page.tsx                 # Homepage
│   ├── fuel-prices/
│   │   └── page.tsx             # Fuel prices full page
│   ├── find-a-station/
│   │   └── page.tsx             # Station locator
│   ├── send-fuel/
│   │   └── page.tsx             # Diaspora gifting explainer
│   ├── services/
│   │   └── page.tsx             # Services overview
│   ├── about/
│   │   └── page.tsx             # About the company
│   ├── contact/
│   │   └── page.tsx             # Contact form + details
│   └── payments/
│       └── page.tsx             # Payment methods guide
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── HeroBanner.tsx
│   │   ├── FuelPricesStrip.tsx
│   │   ├── StationLocatorCTA.tsx
│   │   ├── PartnersStrip.tsx
│   │   ├── ServicesGrid.tsx
│   │   └── DiasporaBanner.tsx
│   ├── fuel-prices/
│   │   └── PriceCard.tsx
│   ├── find-a-station/
│   │   ├── StationMap.tsx
│   │   └── StationCard.tsx
│   ├── send-fuel/
│   │   └── GiftingSteps.tsx
│   └── shared/
│       ├── PaymentBadges.tsx
│       └── WhatsAppShareButton.tsx
├── lib/
│   ├── sanity.ts                # Sanity client config
│   ├── queries.ts               # GROQ queries for prices + stations
│   └── types.ts                 # Shared TypeScript types
├── public/
│   ├── logo.[svg|png]           # [REPLACE] Company logo
│   ├── partners/
│   │   ├── tfn-logo.[svg|png]   # [REPLACE] TFN logo
│   │   └── petrotrade-logo.[svg|png] # [REPLACE] Petrotrade logo
│   └── payment-logos/
│       ├── ecocash.svg          # [REPLACE] EcoCash logo
│       ├── innbucks.svg         # [REPLACE] InnBucks logo
│       └── omari.svg            # [REPLACE] Omari logo
├── sanity/
│   ├── schema/
│   │   ├── fuelPrice.ts
│   │   ├── station.ts
│   │   └── index.ts
│   └── sanity.config.ts
├── .env.local                   # Environment variables (see Section 6)
├── tailwind.config.ts
└── next.config.ts
```

---

## 4. Design System

### 4.1 Brand Tokens
Replace these values with actual brand values from the client's brand guide:

```ts
// tailwind.config.ts — extend theme.colors
colors: {
  brand: {
    primary:   '[REPLACE]',   // e.g. '#E63A2E' (red) or '#F5A623' (orange)
    secondary: '[REPLACE]',   // supporting brand color
    dark:      '[REPLACE]',   // dark text / backgrounds
    light:     '[REPLACE]',   // light backgrounds
  },
  fuel: {
    petrol:  '#22C55E',       // green
    diesel:  '#3B82F6',       // blue
    blend:   '#F59E0B',       // amber
  }
}
```

### 4.2 Typography
- **Headings:** Inter or the brand's preferred font (load via `next/font/google`)
- **Body:** Inter, 16px base, 1.6 line height
- **Prices:** Monospace or tabular numbers (`font-variant-numeric: tabular-nums`) so ZWG/USD columns align

### 4.3 Mobile-first
- All layouts start mobile (single column) and expand at `md:` (768px) and `lg:` (1024px)
- Minimum tap target: 44×44px
- No horizontal scroll on any viewport
- Images: use `next/image` with `loading="lazy"` and explicit `width`/`height`

### 4.4 Performance (Zimbabwe network conditions)
- Target: < 200KB total JS on first load
- Compress all images to WebP, max 80KB per image
- Embed the map only on the `/find-a-station` page, not homepage
- Avoid autoplay video
- Add a `<link rel="preconnect">` for Google Fonts and Maps

---

## 5. Pages — Detailed Specification

### 5.1 Homepage (`/`)

**Sections in order:**

#### a) Navbar
- Logo (left), navigation links (center/right), mobile hamburger menu
- Sticky on scroll
- Links: Fuel Prices · Find a Station · Send Fuel · Services · About · Contact
- Highlight "Send Fuel" link in brand primary color — it is a key feature

#### b) Hero Banner
- Full-width, brand photography background (fuel station forecourt)
- Headline: `[REPLACE — company tagline]`
- Subheadline: one short sentence about the company
- Two CTA buttons:
  - Primary: "View Fuel Prices" → `/fuel-prices`
  - Secondary: "Find a Station" → `/find-a-station`
- On mobile: stack buttons vertically, full width

#### c) Live Fuel Prices Strip
- Background: brand primary color or dark
- Title: "Today's Fuel Prices" + last updated timestamp (pulled from Sanity)
- Three price cards side by side: **Petrol**, **Diesel**, **Blend**
- Each card shows: fuel type label, ZWG price, USD price
- "View full price breakdown →" link to `/fuel-prices`
- On mobile: horizontally scrollable cards

#### d) Station Locator CTA
- Clean section with a search input (city/town) and a "Find Station" button
- Below the input: "XX stations across Zimbabwe" (number from Sanity)
- Button routes to `/find-a-station?q=[input value]`
- Background: light grey or white

#### e) Diaspora Banner
- Visually distinct section (accent background color)
- Headline: "Family abroad? They can send you fuel."
- 2–3 sentence explanation of the EcoCash/InnBucks gifting feature
- CTA button: "How it works →" → `/send-fuel`
- This section must be prominent — it is a key differentiator

#### f) Payment Methods Strip
- Heading: "We accept"
- Display logos/badges in a horizontal row: **EcoCash**, **InnBucks**, **Omari**, **Cash (USD & ZWG)**
- Subtle background, no border clutter
- Each logo links to `/payments` for more detail

#### g) Services Grid
- Heading: "At our forecourts"
- 4 cards in a 2×2 (mobile) or 4-column (desktop) grid:
  1. **Fuel** — Petrol, Diesel, Blend
  2. **Convenience Shop** — Snacks, cold drinks, ice, essentials
  3. **Vehicle Services** — Car wash, tyre air, oil check
  4. **Send Fuel** — Gift fuel to loved ones via EcoCash / InnBucks
- Each card: icon, title, short description, optional link

#### h) Partners Strip
- Heading: "In partnership with"
- Two partner logos side by side: **TFN (Truck Fuel Network)** and **Petrotrade**
- Clean, minimal — white or light grey background
- Logos should be greyscale or light treatment so they don't compete with brand

#### i) Footer
- Company logo
- Navigation links (same as navbar)
- Contact details: phone, email, physical address `[REPLACE]`
- Social media icons (Facebook, X/Twitter, WhatsApp) `[REPLACE URLs]`
- Partner logos (TFN, Petrotrade) — small repeat
- Legal: "© [YEAR] [Company Name]. All rights reserved."
- ZERA compliance note if required

---

### 5.2 Fuel Prices Page (`/fuel-prices`)

**Purpose:** Clear, trustworthy display of current prices.

**Layout:**
- Page heading: "Current Fuel Prices"
- Last updated: `[date and time]` — pulled from Sanity, displayed prominently
- ZERA compliance note: "Prices are set in accordance with ZERA regulations."
- Price table — responsive:

| Fuel Type | ZWG per litre | USD per litre |
|-----------|--------------|---------------|
| Petrol (91) | ZWG xx.xx | USD x.xx |
| Diesel | ZWG xx.xx | USD x.xx |
| Blend (E85) | ZWG xx.xx | USD x.xx |

- On mobile: card layout instead of table (one card per fuel type)
- WhatsApp Share button: pre-fills message with current prices text and link
- "Price alert" note: "Prices update when ZERA releases new rates. Check back regularly."

**Sanity schema (`fuelPrice.ts`):**
```ts
export default {
  name: 'fuelPrice',
  type: 'document',
  title: 'Fuel Prices',
  fields: [
    { name: 'fuelType', type: 'string', title: 'Fuel Type' },
    { name: 'priceZWG', type: 'number', title: 'Price (ZWG per litre)' },
    { name: 'priceUSD', type: 'number', title: 'Price (USD per litre)' },
    { name: 'updatedAt', type: 'datetime', title: 'Last Updated' },
    { name: 'isActive', type: 'boolean', title: 'Show on site' },
  ]
}
```

---

### 5.3 Find a Station (`/find-a-station`)

**Purpose:** Help customers locate the nearest station.

**Layout:**
- Page heading: "Find a Station"
- Search bar: text input for city/town + "Search" button
- Filter chips (optional Phase 2): All · Harare · Bulawayo · Mutare · Masvingo · Other
- **Map** (Google Maps Embed): full-width, ~400px tall, pins for each station
- Station cards list below the map — one card per station:
  - Station name
  - Address
  - Opening hours
  - Fuel grades available (tags: Petrol / Diesel / Blend)
  - Amenities (tags: Car Wash / Shop / Ice / Air & Water)
  - Payment methods accepted at this station
  - "Get Directions" button → opens Google Maps directions in new tab

**Google Maps integration:**
- Use Google Maps Embed API (free tier) for the map
- Each station has `lat` and `lng` stored in Sanity
- On page load, pass all station coordinates to the map as markers

**Sanity schema (`station.ts`):**
```ts
export default {
  name: 'station',
  type: 'document',
  title: 'Station',
  fields: [
    { name: 'name', type: 'string', title: 'Station Name' },
    { name: 'city', type: 'string', title: 'City / Town' },
    { name: 'address', type: 'string', title: 'Full Address' },
    { name: 'phone', type: 'string', title: 'Phone Number' },
    { name: 'lat', type: 'number', title: 'Latitude' },
    { name: 'lng', type: 'number', title: 'Longitude' },
    { name: 'openingHours', type: 'string', title: 'Opening Hours' },
    { name: 'fuels', type: 'array', of: [{ type: 'string' }], title: 'Fuel Types Available',
      options: { list: ['Petrol', 'Diesel', 'Blend'] }},
    { name: 'amenities', type: 'array', of: [{ type: 'string' }], title: 'Amenities',
      options: { list: ['Car Wash', 'Convenience Shop', 'Ice', 'Air & Water', 'ATM'] }},
    { name: 'payments', type: 'array', of: [{ type: 'string' }], title: 'Payment Methods',
      options: { list: ['EcoCash', 'InnBucks', 'Omari', 'USD Cash', 'ZWG Cash'] }},
    { name: 'isActive', type: 'boolean', title: 'Show on site' },
  ]
}
```

---

### 5.4 Send Fuel Page (`/send-fuel`)

**Purpose:** Explain how someone abroad (diaspora) can buy fuel for a relative in Zimbabwe using EcoCash or InnBucks.

**This is a high-priority page.** Write copy clearly and simply. Many users of this page will be non-technical.

**Layout:**
- Page heading: "Send Fuel to Zimbabwe"
- Subheading: "You don't have to be in Zimbabwe to fill someone's tank."
- Short intro paragraph (2–3 sentences): explain the concept — someone abroad sends money via EcoCash or InnBucks to the station's merchant code, and the recipient collects the fuel.

**How it works — step-by-step (numbered visual steps):**

1. **You send** — Transfer funds via EcoCash or InnBucks to the station's merchant code
2. **Choose a station** — Pick which station your recipient will visit (link to station locator)
3. **Share the reference** — Send your recipient the EcoCash/InnBucks transaction reference number
4. **They collect** — Recipient visits the station, shows the reference, and fills up

**Merchant codes section:**
- Heading: "Merchant codes by station"
- Table: Station Name | EcoCash Merchant Code | InnBucks Merchant Code
- `[REPLACE]` — populate with real codes per station

**InnBucks section:**
- Short note on how to send via InnBucks specifically
- `[REPLACE]` — include InnBucks-specific instructions if different

**Omari section:**
- Note whether Omari supports diaspora gifting. If yes, include steps. If no: "Omari is available for in-person payments at the forecourt."

**FAQ accordion (minimum 4 questions):**
- "What countries can I send from?"
- "How much fuel does my money buy?"
- "How long does it take?"
- "What if something goes wrong?"

**WhatsApp Share button:**
- Label: "Share these instructions on WhatsApp"
- Pre-fills message: "Here's how to send me fuel from abroad: [URL]"

---

### 5.5 Services Page (`/services`)

**Purpose:** Overview of everything available at the forecourt.

**Sections:**
1. **Fuel** — Petrol (91), Diesel, Blend (E85). Brief description of each.
2. **Convenience Shop** — Range of products including cold drinks, snacks, ice, and daily essentials. Available at all stations.
3. **Ice** — Specifically call out bagged ice as a product. Useful for events, fishing, catering, households. Available at all stations.
4. **Vehicle Services** — Car wash (detail type if applicable), tyre inflation (air), oil check, windscreen wash.
5. **Fuel Gifting** — Brief repeat of the diaspora feature with link to `/send-fuel`.

Each section: icon, heading, description paragraph, optional image.

---

### 5.6 Payments Page (`/payments`)

**Purpose:** Guide customers on how to pay at the forecourt.

**Payment method cards — one section per method:**

#### EcoCash
- How to pay at the pump / till
- USSD code if applicable `[REPLACE]`
- Also usable for diaspora gifting (link to `/send-fuel`)

#### InnBucks
- How to pay using the InnBucks app or USSD
- `[REPLACE]` — step-by-step

#### Omari
- How to pay using Omari
- `[REPLACE]` — step-by-step
- Note whether diaspora gifting is supported

#### Cash
- USD and ZWG accepted
- Change given in USD or ZWG depending on availability

---

### 5.7 About Page (`/about`)

**Content to fill in — `[REPLACE]` all values:**
- Company history and founding story
- Mission statement
- Values (3–5 bullet points)
- Leadership team (optional — photos + names + titles)
- Partnership section: TFN and Petrotrade — one paragraph each explaining the relationship
- Number of stations, years in operation, cities covered (key stats in a visually prominent strip)

---

### 5.8 Contact Page (`/contact`)

**Layout:**
- Contact details (left column):
  - Phone: `[REPLACE]`
  - Email: `[REPLACE]`
  - Head office address: `[REPLACE]`
  - Social links: Facebook, X/Twitter, WhatsApp Business
- Contact form (right column):
  - Fields: Name, Email, Phone (optional), Subject (dropdown: General Enquiry / Station Feedback / Partnership / Other), Message
  - Submit button
  - On submit: send to company email via a form service (Formspree or Resend — free tiers available)
  - Success/error state feedback to user

---

## 6. Environment Variables

Create `.env.local` with the following. Never commit this file to Git.

```env
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=[REPLACE]
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=[REPLACE]

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=[REPLACE]

# Contact form (if using Resend)
RESEND_API_KEY=[REPLACE]
CONTACT_EMAIL=[REPLACE]
```

---

## 7. Sanity CMS Setup

1. Create a free Sanity project at sanity.io
2. Add schemas: `fuelPrice`, `station` (see Section 5.2 and 5.3 above)
3. Add a third schema for `siteSettings`:
```ts
// siteSettings.ts — singleton document for global config
fields: [
  { name: 'stationCount', type: 'number', title: 'Total number of stations' },
  { name: 'pricesLastUpdated', type: 'datetime', title: 'Prices last updated' },
  { name: 'ecocashGiftingCode', type: 'string', title: 'EcoCash gifting merchant code (global)' },
  { name: 'innbucksGiftingCode', type: 'string', title: 'InnBucks gifting merchant code (global)' },
]
```
4. Deploy Sanity Studio: `npx sanity deploy` (accessible at `[projectname].sanity.studio`)
5. Train the client team on how to update fuel prices via the Studio — this is their primary ongoing task

---

## 8. SEO

- Every page has a unique `<title>` and `<meta name="description">`
- Use Next.js `metadata` API in each `page.tsx`
- Homepage title: `[Company Name] — Fuel Prices & Stations in Zimbabwe`
- Fuel prices page: `Today's Fuel Prices in Zimbabwe — ZWG & USD | [Company Name]`
- Send fuel page: `Send Fuel to Zimbabwe from Abroad | [Company Name]`
- Add `robots.txt` and `sitemap.xml` (Next.js can auto-generate sitemap)
- Add Open Graph tags for WhatsApp and Facebook sharing (especially important for the fuel prices and send-fuel pages)
- Add structured data (`LocalBusiness` schema) for each station for Google Search visibility

---

## 9. Accessibility

- All images have descriptive `alt` text
- Colour contrast ratio ≥ 4.5:1 for all text
- All interactive elements are keyboard navigable
- Form inputs have associated `<label>` elements
- Map has a text fallback (station list) for screen readers
- Use semantic HTML throughout (`<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`)

---

## 10. Zimbabwe-specific Considerations

| Consideration | Implementation |
|---|---|
| Dual currency | Always show ZWG and USD side by side on all price displays |
| Low bandwidth | Use WebP images, lazy loading, minimise third-party scripts |
| Mobile-first | 80%+ of users will be on mobile. Design mobile first, always. |
| WhatsApp sharing | Add WhatsApp share buttons on fuel prices page and send-fuel page |
| ZERA compliance | Display "Prices in accordance with ZERA regulations" on fuel prices page |
| EcoCash familiarity | EcoCash is the dominant payment method — give it first billing in all payment lists |
| Diaspora remittances | The Send Fuel feature targets this audience — it is a genuine differentiator |
| `.co.zw` domain | Register a `.co.zw` domain for local trust and SEO |

---

## 11. Build Phases

### Phase 1 — MVP (launch-ready)
- [ ] Next.js project scaffold with Tailwind
- [ ] Sanity setup (fuelPrice + station schemas)
- [ ] Homepage (all sections)
- [ ] Fuel Prices page
- [ ] Find a Station page with map
- [ ] Send Fuel page
- [ ] Navbar + Footer
- [ ] Basic SEO metadata
- [ ] Deploy to Vercel

### Phase 2 — Growth
- [ ] Services page
- [ ] Payments page
- [ ] About page
- [ ] Contact page with form
- [ ] News / promotions section (add `blogPost` Sanity schema)
- [ ] Station filter by city
- [ ] WhatsApp share buttons
- [ ] Open Graph images for social sharing

### Phase 3 — Optional future features
- [ ] Loyalty / rewards programme portal
- [ ] Fleet account management
- [ ] Online fuel voucher purchase (proper e-commerce)
- [ ] Push notifications for price changes (PWA)
- [ ] Shona / Ndebele language toggle

---

## 12. Assets Required from Client

Before build can complete, the following must be provided:

| Asset | Format | Notes |
|---|---|---|
| Company logo | SVG preferred, PNG fallback | Light and dark versions if possible |
| Brand colors | Hex codes | Primary, secondary, dark, light |
| Brand font | Name or file | If custom font; else Inter will be used |
| Station list | Spreadsheet | Name, city, address, lat/lng, hours, amenities |
| Fuel prices | Current ZWG + USD per litre | Petrol, Diesel, Blend |
| EcoCash merchant codes | Per station or global | For Send Fuel page |
| InnBucks merchant codes | Per station or global | For Send Fuel page |
| TFN logo | SVG or PNG | With usage permission |
| Petrotrade logo | SVG or PNG | With usage permission |
| EcoCash logo | SVG or PNG | With usage permission |
| InnBucks logo | SVG or PNG | With usage permission |
| Omari logo | SVG or PNG | With usage permission |
| Forecourt photography | JPEG/WebP, min 1920px wide | Hero banner + services section |
| Head office address | Text | For footer and contact page |
| Company phone + email | Text | For footer and contact page |
| Social media URLs | Text | Facebook, X/Twitter, WhatsApp Business |

---

*End of specification. All `[REPLACE]` markers must be resolved before launch.*
