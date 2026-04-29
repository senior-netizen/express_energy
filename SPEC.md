# Express Energy Service Station — Website Build Specification
> **For use with Codex / AI coding agents.** Follow each section in order. Do not skip sections.
> Items marked `[TBC]` require confirmation from the client before that section can be finalised.

---

## 1. Company Overview

| Field | Value |
|---|---|
| **Company name** | Express Energy Service Station |
| **Tagline** | *"We Promise You Simply Miles Ahead after your Fueling"* |
| **Head office** | 15 Hofmeyer Street, Masvingo CBD (next to Tatenda Building, Opposite Channel 1) |
| **Phone** | 0773 910 693 / 0776 161 732 |
| **Directors** | Tawanda Mabande (50%) · Tafadzwa Mabande (50%) |
| **Operating hours** | 24 hours, 7 days a week |
| **Brand colors** | Orange `#F5821F` · Navy/Blue `#1B2A6B` · White `#FFFFFF` |
| **Brand mascot/logo** | Lion head + speed lines + "EXPRESS ENERGY" wordmark |

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

## 3. Brand Design Tokens

```ts
// tailwind.config.ts — extend theme.colors
colors: {
  brand: {
    orange:  '#F5821F',   // Primary — from logo and company profile
    navy:    '#1B2A6B',   // Secondary — deep blue from company profile
    white:   '#FFFFFF',
    offwhite:'#F9F9F9',   // Light backgrounds
    dark:    '#111827',   // Body text
  },
  fuel: {
    petrol:  '#22C55E',   // Green
    diesel:  '#3B82F6',   // Blue
    lpgas:   '#F59E0B',   // Amber
  }
}
```

### Typography
- **Primary font:** Inter (via `next/font/google`)
- **Display / hero:** Can use a bold weight of Inter or a strong condensed font to match the bold brand personality
- **Prices:** `font-variant-numeric: tabular-nums` so ZWG/USD columns align cleanly
- **Tagline font:** The cursive tagline *"We Promise You Simply Miles Ahead after your Fueling"* should render in a script/cursive font — use `Dancing Script` (Google Fonts) to match the company profile aesthetic

---

## 4. Repository Structure

```
/
├── app/
│   ├── layout.tsx                  # Root layout — nav + footer
│   ├── page.tsx                    # Homepage
│   ├── fuel-prices/
│   │   └── page.tsx                # Full fuel prices page
│   ├── find-a-station/
│   │   └── page.tsx                # Station locator with map
│   ├── send-fuel/
│   │   └── page.tsx                # Diaspora gifting explainer
│   ├── services/
│   │   └── page.tsx                # Services & products
│   ├── partners/
│   │   └── page.tsx                # TFN + Petrotrade partnerships
│   ├── about/
│   │   └── page.tsx                # About, mission, vision, values, team
│   ├── clients/
│   │   └── page.tsx                # Corporate clients
│   └── contact/
│       └── page.tsx                # Contact + locations
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
│   │   ├── DiasporaBanner.tsx
│   │   ├── PaymentMethodsStrip.tsx
│   │   └── CorporateClientsTeaser.tsx
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
│   ├── sanity.ts
│   ├── queries.ts
│   └── types.ts
├── public/
│   ├── logo.svg                    # Express Energy lion logo
│   ├── partners/
│   │   ├── tfn-logo.svg
│   │   └── petrotrade-logo.svg
│   └── payment-logos/
│       ├── ecocash.svg
│       ├── innbucks.svg
│       └── omari.svg
├── sanity/
│   ├── schema/
│   │   ├── fuelPrice.ts
│   │   ├── station.ts
│   │   ├── siteSettings.ts
│   │   └── index.ts
│   └── sanity.config.ts
├── .env.local
├── tailwind.config.ts
└── next.config.ts
```

---

## 5. Pages — Detailed Specification

### 5.1 Homepage (`/`)

Sections in order:

#### a) Navbar
- Logo: Express Energy lion + wordmark (left)
- Nav links: **Fuel Prices · Find a Station · Send Fuel · Services · Partners · About · Contact**
- Highlight **"Send Fuel"** in `brand.orange` — it is a key commercial differentiator
- Mobile: hamburger menu, full-width drawer
- Sticky on scroll with slight background blur

#### b) Hero Banner
- Full-width, brand photography background (use forecourt photos from company profile)
- Overlay gradient: navy-to-transparent from left
- Headline: **"Express Energy Service Station"**
- Subheadline in cursive/script font: *"We Promise You Simply Miles Ahead after your Fueling"*
- Two CTA buttons:
  - Primary (orange): `View Fuel Prices` → `/fuel-prices`
  - Secondary (white outline): `Find a Station` → `/find-a-station`
- Small trust badge strip below CTAs: `24hr Service · ZERA Licensed · Masvingo Based`

#### c) Live Fuel Prices Strip
- Dark navy background (`brand.navy`)
- Title: `Today's Fuel Prices` + `Last updated: [timestamp from Sanity]`
- Four price cards side by side:
  1. **Unleaded Petrol** — ZWG xx.xx / USD x.xx
  2. **Diesel 50** — ZWG xx.xx / USD x.xx
  3. **LP Gas** — ZWG xx.xx / USD x.xx (per kg)
  4. **Lubricants & Oils** — label: "Ask in-store"
- `View full prices →` link to `/fuel-prices`
- On mobile: horizontally scrollable cards

#### d) Station Locator CTA
- Clean white/off-white section
- Headline: `Find Your Nearest Express Energy Station`
- Body: `We have stations across Masvingo — at the CBD, Mucheke, Rhodene, and industrial areas in Masvingo and Chiredzi.`
- Button: `View All Stations →` → `/find-a-station`

#### e) Diaspora Banner
- Bold orange background (`brand.orange`), white text
- Headline: `Family abroad? They can send you fuel.`
- Body: `Someone in the diaspora can purchase fuel for you using EcoCash or InnBucks — you simply collect at the station. No need for them to be in Zimbabwe.`
- CTA button (navy): `How it works →` → `/send-fuel`

#### f) Payment Methods Strip
- Heading: `We Accept`
- Logo badges in a row: **EcoCash · InnBucks · Omari · USD Cash · ZWG Cash**
- Subtle light grey background
- Each badge links to `/send-fuel` (for mobile payment methods)

#### g) Services Grid
- Heading: `At Our Forecourts`
- 2×2 mobile, 4-column desktop grid:
  1. **Fuel Products** — Unleaded Petrol, Diesel 50, LP Gas, Lubricants & Oils
  2. **Convenience & Ice** — Cold drinks, snacks, ice blocks, daily essentials
  3. **Vehicle Services** — Windscreen cleaning, tyre air
  4. **Bulk Fuel** — Exportation & transportation, contracted deliveries
- Each card: icon (Lucide), title, short description, link to `/services`

#### h) Partners Strip
- Heading: `In Partnership With`
- Two partner entries side by side:
  - **Petrotrade** — National Fuel Purchase Facility · Petrotrade coupons accepted
  - **TFN (Truck Fuel Network)** — International purchase via www.tfn.co.za
- Light background, logo or name badge, one-line description each
- `Learn more →` → `/partners`

#### i) Corporate Clients Teaser
- Heading: `Trusted by Leading Organisations`
- Logos or name tags for a selection of clients (see Section 5.8)
- Subtext: `Express Energy is proud to serve corporate, government and institutional clients across the Masvingo region.`

#### j) Footer
- Logo + tagline (cursive)
- Nav links (same as navbar)
- Contact:
  - Phone: 0773 910 693 / 0776 161 732
  - Head office: 15 Hofmeyer Street, Masvingo CBD
- Social icons: Facebook, WhatsApp `[TBC — add URLs when available]`
- Partner logos: TFN + Petrotrade (small)
- `© 2025 Express Energy Service Station. All rights reserved.`
- ZERA note: `Licensed to supply petroleum and gas products in Zimbabwe.`

---

### 5.2 Fuel Prices Page (`/fuel-prices`)

**Purpose:** Authoritative, up-to-date display of all product prices.

**Layout:**
- Page heading: `Current Fuel Prices`
- Last updated timestamp — from Sanity, displayed prominently in orange
- ZERA note: `Prices are set in accordance with ZERA regulations.`
- Competitive advantage note: `Our prices are competitive — we order directly from Feruka and deliver using our own trucks.`

**Price display — responsive table (desktop) / card stack (mobile):**

| Product | ZWG per litre/unit | USD per litre/unit |
|---|---|---|
| Unleaded Petrol | ZWG xx.xx | USD x.xx |
| Diesel 50 | ZWG xx.xx | USD x.xx |
| LP Gas | ZWG xx.xx per kg | USD x.xx per kg |
| Lubricants & Oils | In-store pricing | In-store pricing |

- WhatsApp Share button: pre-fills `"Express Energy current fuel prices — [URL]. Petrol: ZWG xx.xx / USD x.xx. Diesel: ZWG xx.xx / USD x.xx"`
- Note: `Prices updated when ZERA releases new rates. Last updated: [date].`

**Sanity schema (`fuelPrice.ts`):**
```ts
export default {
  name: 'fuelPrice',
  type: 'document',
  title: 'Fuel Prices',
  fields: [
    { name: 'fuelType', type: 'string', title: 'Fuel Type',
      options: { list: ['Unleaded Petrol', 'Diesel 50', 'LP Gas', 'Lubricants & Oils'] }},
    { name: 'priceZWG', type: 'number', title: 'Price in ZWG' },
    { name: 'priceUSD', type: 'number', title: 'Price in USD' },
    { name: 'unit', type: 'string', title: 'Unit', initialValue: 'per litre' },
    { name: 'updatedAt', type: 'datetime', title: 'Last Updated' },
    { name: 'isActive', type: 'boolean', title: 'Show on site', initialValue: true },
  ]
}
```

---

### 5.3 Find a Station (`/find-a-station`)

**Purpose:** Help customers and truck operators find the right Express Energy location.

**Known stations from company profile:**

| Station | Location | Notes |
|---|---|---|
| Main Service Station | 15 Hofmeyer Street, Masvingo CBD | Next to Tatenda Building, Opposite Channel 1 |
| Mucheke LP Gas Station | Mucheke, Masvingo | Opposite Mamutse Stadium |
| Rhodene LP Gas Station | Mazambane Shopping Centre, Rhodene | Low density suburb |
| Masvingo Truck Garage | Masvingo Industrial Area | Truck fuel & servicing |
| Chiredzi Truck Garage | Chiredzi Industrial Area | Truck fuel & servicing |

**Layout:**
- Page heading: `Find an Express Energy Station`
- Filter buttons: `All · CBD · Mucheke · Rhodene · Truck Garages`
- Google Maps embed — full width, ~400px tall, with pins for each station
- Station cards below map — one card per location:
  - Station name + type badge (Service Station / LP Gas / Truck Garage)
  - Address
  - Opening hours (Main station: 24hrs; others: `[TBC]`)
  - Products available (tags)
  - `Get Directions` button → Google Maps directions link

**Sanity schema (`station.ts`):**
```ts
export default {
  name: 'station',
  type: 'document',
  title: 'Station',
  fields: [
    { name: 'name', type: 'string', title: 'Station Name' },
    { name: 'type', type: 'string', title: 'Station Type',
      options: { list: ['Service Station', 'LP Gas Station', 'Truck Garage'] }},
    { name: 'area', type: 'string', title: 'Area / Suburb' },
    { name: 'address', type: 'string', title: 'Full Address' },
    { name: 'landmark', type: 'string', title: 'Landmark / Directions hint' },
    { name: 'phone', type: 'string', title: 'Phone' },
    { name: 'openingHours', type: 'string', title: 'Opening Hours' },
    { name: 'lat', type: 'number', title: 'Latitude' },
    { name: 'lng', type: 'number', title: 'Longitude' },
    { name: 'products', type: 'array', of: [{ type: 'string' }],
      options: { list: ['Unleaded Petrol', 'Diesel 50', 'LP Gas', 'Lubricants', 'Ice Blocks'] }},
    { name: 'payments', type: 'array', of: [{ type: 'string' }],
      options: { list: ['EcoCash', 'InnBucks', 'Omari', 'USD Cash', 'ZWG Cash'] }},
    { name: 'isActive', type: 'boolean', title: 'Show on site', initialValue: true },
  ]
}
```

---

### 5.4 Send Fuel Page (`/send-fuel`)

**Purpose:** Explain how diaspora customers can purchase fuel for relatives in Zimbabwe.

**This is a high-priority, high-impact page.** Write copy plainly and clearly.

**Layout:**
- Page heading: `Send Fuel to Zimbabwe`
- Subheading: `You don't have to be in Zimbabwe to fill someone's tank.`
- Intro: `Express Energy makes it easy for family and friends in the diaspora to buy fuel for loved ones back home. Using EcoCash or InnBucks, you can transfer funds to our station — your recipient simply shows up and fuels.`

**How it works — 4 visual numbered steps:**

1. **Choose a station** — Decide which Express Energy station your recipient will visit. Note the station's merchant code below.
2. **Send via EcoCash or InnBucks** — Transfer the fuel amount to the station's EcoCash or InnBucks merchant code from wherever you are.
3. **Share the reference** — Send your recipient the transaction reference number you received.
4. **They fill up** — Your recipient visits the station, shows the reference number at the pump, and fuels up.

**Merchant codes section:**
- Heading: `Station Merchant Codes`
- Table: Station Name | EcoCash Code | InnBucks Code
- `[TBC — populate with actual codes per station]`

**Payment method notes:**

*EcoCash* — Zimbabwe's leading mobile money platform. Send from any EcoCash-enabled phone or app worldwide where EcoCash international transfers are available.

*InnBucks* — Digital wallet. Transfer to the station's InnBucks number. `[TBC — confirm InnBucks international transfer capability]`

*Omari* — Currently available for in-person payments at the forecourt only.

**FAQ accordion:**
1. `What countries can I send from?` — `[TBC — confirm with EcoCash/InnBucks on supported countries]`
2. `How much fuel does my money buy?` — Link to `/fuel-prices` for current rates.
3. `How long does the transfer take?` — `[TBC]`
4. `Can I send LP Gas instead of petrol?` — Yes, LP Gas is available at our Mucheke and Rhodene stations.
5. `What if something goes wrong?` — Call us on 0773 910 693 / 0776 161 732, available 24 hours.

**WhatsApp share button:**
- Label: `Share these instructions`
- Pre-fills: `"Here's how to send me fuel from abroad using Express Energy: [URL]"`

---

### 5.5 Services Page (`/services`)

**Purpose:** Full overview of everything Express Energy offers.

**Sections:**

#### Fuel Products
- **Unleaded Petrol** — High-quality unleaded fuel for all petrol vehicles.
- **Diesel 50** — Low-sulphur diesel for trucks, buses, and diesel passenger vehicles.
- **LP Gas (Liquified Petroleum Gas)** — Available at Mucheke and Rhodene LP Gas stations for household and commercial use.
- **Lubricants & Oils** — A range of engine oils and lubricants available in-store.

#### Convenience & Ice
- Ice blocks available at all stations — ideal for households, events, fishing, catering, and hospitality.
- Cold drinks, snacks, and daily essentials available at the main CBD service station.

#### Vehicle Services
- **Windscreen cleaning** — Complimentary for fueling customers.
- **Tyre inflation** — Air available at the forecourt.

#### Bulk Fuel Services
- **Bulk fuel exportation** — We supply bulk fuel quantities to commercial and corporate clients.
- **Bulk fuel transportation** — Own fleet of trucks and tankers delivers fuel from Feruka directly to clients.
- Note the competitive advantage: *"Because we order directly from Feruka and use our own trucks, we can offer highly competitive pricing."*

#### Corporate Services
- Skills Development
- Employment Equity
- Corporate Social Investment
- Management Control

#### Real Estate (optional — include if client approves)
- 6 rental stores at the main service station (100% occupancy)
- Residential property in Rhodene

---

### 5.6 Partners Page (`/partners`)

**Purpose:** Explain the TFN and Petrotrade partnerships in full.

**Section 1 — Petrotrade (National)**
- Heading: `National Fuel Purchase — Petrotrade Coupons`
- Body: Express Energy is in partnership with Petrotrade, enabling clients to use Petrotrade coupons for fueling across Zimbabwe. This is ideal for businesses with fleets that travel nationally.
- CTA: `Contact us to set up a Petrotrade coupon account →` → `/contact`

**Section 2 — TFN (International)**
- Heading: `International Fuel Purchase — TFN Partnership`
- Body: Express Energy is in partnership with TFN (Truck Fuel Network), a South African registered company. Clients — particularly truck operators and fleet managers — can purchase fuel online at [www.tfn.co.za](https://www.tfn.co.za) and use it for fueling anywhere in Zimbabwe, including at Express Energy stations.
- This is particularly valuable for cross-border trucking companies.
- CTA button: `Purchase fuel at TFN →` (external link to https://www.tfn.co.za, opens in new tab)
- Note: display TFN logo if/when brand assets are supplied

---

### 5.7 About Page (`/about`)

**Purpose:** Build trust and tell the Express Energy story.

**Sections:**

#### About Express Energy
Use the following copy from the company profile (lightly edited for web readability):

> Express Energy is a leading player in the Zimbabwean fuel and energy market, proudly supplying the nation with Unleaded Petrol, Diesel 50, and Liquified Petroleum Gas (LP Gas). We are committed to 24-hour service delivery — because we know how much consistency matters to you.
>
> Express Energy is licensed to supply petroleum and gas products in the region. Founded by a young, dedicated individual with vast experience in Strategic Business, Marketing, Transport and Logistics, our objective is to create unique, reliable, and cost-effective services that take advantage of opportunities presented by Zimbabwe's growing petroleum and fuel industry.

#### Key Stats strip (visually prominent numbers):
- `24hrs` — Round the clock service
- `5` — Station locations
- `7` — Contracted trucks
- `10+` — Corporate clients

#### Mission
> Express Energy is heading towards a destination of excellence in fuel solutions, aiming to become the greatest and most reliable provider in the region.
> - To make a measurable difference to business and lives.
> - To fuel a service and product of excellence.
> - To be reliable, professional, driven and highly competitive.

#### Vision
> We intend to maintain a leading position in the market by providing customers with innovative technologies while offering one-stop-shop solutions to optimise all aspects of the cost cycle, cost leadership, and supply chain. The cornerstone of our vision is the establishment of reciprocal trust as the framework for collaboration and success.

#### Core Values (5 cards)
| Value | Description |
|---|---|
| **Integrity** | We do what we say we will do, on time, every time. |
| **Consistent** | We are reliable, direct, approachable. |
| **Brilliant** | We strive for excellence, providing cost-effective, market-focused energy solutions. |
| **Expertise** | We are passionately committed to utmost proficiency. |
| **Assertive** | Our business remains viable and on the pulse. |

#### Our Commitment
> We respect our clients and their trust in us. We value deadlines, expectations, and honesty. Express Energy is committed to providing world-class petroleum product solutions within the shortest possible time at reasonable cost.

#### Leadership
- **Tawanda Mabande** — Director (50%)
- **Tafadzwa Mabande** — Director (50%)
- `[TBC — add photos and brief bios if available]`

#### Our Team
> Our team of accountants, human resource managers, and pump attendants are highly experienced and talented. All team members meet stringent criteria and are trained to provide full-time attention to clients whenever needed.

---

### 5.8 Corporate Clients Page (`/clients`)

**Purpose:** Showcase the calibre of Express Energy's existing client base to attract new corporate accounts.

**Intro:** `Express Energy is trusted by some of the most respected organisations in the Masvingo region and beyond. We offer tailored fuel supply agreements, bulk delivery, and Petrotrade coupon arrangements for corporate clients.`

**Client list — display as a clean grid of name badges:**
- Makney Transport
- Masvingo Rural District Council
- OK Mart Masvingo
- Junior Holdings
- Kyle Preparation College
- Sunbreeze Mine
- Vantos Holdings
- Edrovale College
- Minister Chadzamira
- Drive-in customers

**CTA section:** `Interested in a corporate fuel account?`
Button: `Contact us →` → `/contact`

---

### 5.9 Contact Page (`/contact`)

**Layout — two columns (stacked on mobile):**

**Left: Contact details**
- Phone: 0773 910 693 / 0776 161 732
- Email: `[TBC]`
- Head office: 15 Hofmeyer Street, Masvingo CBD (next to Tatenda Building, Opposite Channel 1)
- Hours: 24 hours, 7 days a week

**Station locations list:**
- Main Service Station — 15 Hofmeyer Street, Masvingo CBD
- Mucheke LP Gas — Opposite Mamutse Stadium, Mucheke
- Rhodene LP Gas — Mazambane Shopping Centre, Rhodene
- Masvingo Truck Garage — Masvingo Industrial Area
- Chiredzi Truck Garage — Chiredzi Industrial Area

**Right: Contact form**
- Fields: Name · Email · Phone · Subject (dropdown: General Enquiry / Corporate Account / Bulk Fuel / Partnership / Feedback / Other) · Message
- Submit button (orange)
- Success/error state shown inline
- Form handler: Formspree (free tier) or Resend API
- On submit, email goes to `[TBC — client email address]`

---

## 6. Sanity CMS — siteSettings Schema

```ts
// siteSettings.ts — singleton document
export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  fields: [
    { name: 'stationCount', type: 'number', title: 'Total Stations', initialValue: 5 },
    { name: 'pricesLastUpdated', type: 'datetime', title: 'Prices Last Updated' },
    { name: 'ecocashGlobalCode', type: 'string', title: 'EcoCash Gifting Merchant Code' },
    { name: 'innbucksGlobalCode', type: 'string', title: 'InnBucks Gifting Merchant Code' },
    { name: 'mainPhone', type: 'string', initialValue: '0773 910 693' },
    { name: 'altPhone', type: 'string', initialValue: '0776 161 732' },
    { name: 'headOfficeAddress', type: 'string',
      initialValue: '15 Hofmeyer Street, Masvingo CBD' },
  ]
}
```

---

## 7. Environment Variables

```env
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=[TBC]
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=[TBC]

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=[TBC]

# Contact form
RESEND_API_KEY=[TBC]
CONTACT_EMAIL=[TBC — Express Energy email address]
```

---

## 8. SEO Metadata

| Page | Title | Meta Description |
|---|---|---|
| Homepage | `Express Energy Service Station — Masvingo, Zimbabwe` | `Express Energy offers Unleaded Petrol, Diesel 50, LP Gas and ice blocks in Masvingo. Open 24hrs. EcoCash, InnBucks and Omari accepted.` |
| Fuel Prices | `Current Fuel Prices — Express Energy Masvingo` | `Today's petrol, diesel and LP Gas prices at Express Energy Service Station, Masvingo. ZWG and USD. Updated regularly in line with ZERA.` |
| Find a Station | `Find an Express Energy Station — Masvingo & Chiredzi` | `Locate Express Energy service stations and LP Gas outlets in Masvingo CBD, Mucheke, Rhodene, and truck garages in Masvingo and Chiredzi.` |
| Send Fuel | `Send Fuel to Zimbabwe — Express Energy Diaspora Service` | `Family abroad can buy fuel for you at Express Energy using EcoCash or InnBucks. Here's how it works.` |
| About | `About Express Energy — Masvingo's Leading Fuel Supplier` | `Learn about Express Energy Service Station — our mission, values, team, and story.` |
| Partners | `TFN & Petrotrade Partners — Express Energy` | `Express Energy partners with TFN for international fuel purchase and Petrotrade for national coupon-based fueling.` |

- Add `robots.txt` and auto-generated `sitemap.xml` (use `next-sitemap` package)
- Add Open Graph + Twitter Card tags on every page
- Add `LocalBusiness` structured data (JSON-LD) for the main Masvingo CBD station

---

## 9. Zimbabwe-Specific Considerations

| Consideration | Implementation |
|---|---|
| Dual currency | Always show ZWG and USD side by side on all price displays |
| ZERA compliance | Display "Prices in accordance with ZERA regulations" on all price pages |
| EcoCash first | EcoCash is the dominant mobile money platform — list it first in all payment references |
| Low bandwidth | WebP images, lazy loading, no autoplay video, < 200KB initial JS |
| Mobile-first | Design for 375px viewport upward; majority of users are on mobile |
| WhatsApp sharing | Share buttons on fuel prices page and send-fuel page |
| 24hr branding | Emphasise 24-hour availability prominently — it is a key differentiator |
| Masvingo identity | Express Energy is a Masvingo institution — lean into local pride in copy |
| `.co.zw` domain | Register `expressenergy.co.zw` for local trust and SEO |

---

## 10. Build Phases

### Phase 1 — MVP (launch-ready)
- [ ] Next.js + Tailwind scaffold with brand tokens (orange + navy)
- [ ] Sanity setup (fuelPrice + station + siteSettings schemas)
- [ ] Homepage (all sections)
- [ ] Fuel Prices page
- [ ] Find a Station page with map (5 known locations pre-seeded)
- [ ] Send Fuel page
- [ ] Navbar + Footer
- [ ] SEO metadata on all pages
- [ ] Deploy to Vercel

### Phase 2 — Full site
- [ ] Services page
- [ ] Partners page (TFN + Petrotrade)
- [ ] About page (mission, vision, values, team)
- [ ] Corporate Clients page
- [ ] Contact page with working form
- [ ] WhatsApp share buttons
- [ ] Open Graph images

### Phase 3 — Growth
- [ ] Corporate fuel account enquiry flow
- [ ] News / promotions blog (add `post` Sanity schema)
- [ ] Bulk fuel request form
- [ ] Shona language toggle
- [ ] PWA with offline fuel prices caching

---

## 11. Assets Required from Client

| Asset | Status | Notes |
|---|---|---|
| Express Energy logo (SVG) | From PDF (rasterised) — request vector file | Lion + wordmark |
| Brand colors | ✅ Confirmed | Orange `#F5821F` · Navy `#1B2A6B` |
| Tagline | ✅ Confirmed | *"We Promise You Simply Miles Ahead after your Fueling"* |
| Forecourt photography | Available in PDF — request original high-res JPEGs | Hero + services sections |
| Station GPS coordinates | [TBC] | All 5 locations |
| Station opening hours | 24hrs confirmed for main; others [TBC] | |
| EcoCash merchant codes | [TBC] | Per station, for Send Fuel page |
| InnBucks merchant codes | [TBC] | Per station, for Send Fuel page |
| Omari details | [TBC] | Confirm if diaspora gifting supported |
| TFN logo | [TBC] | Request from TFN or Express Energy |
| Petrotrade logo | [TBC] | Request from Petrotrade or Express Energy |
| EcoCash logo | [TBC] | Request from Econet |
| InnBucks logo | [TBC] | Request from InnBucks |
| Omari logo | [TBC] | |
| Company email address | [TBC] | For contact form and footer |
| Social media URLs | [TBC] | Facebook, WhatsApp Business |
| Director photos | [TBC] | For About page (optional) |
| Current fuel prices | [TBC] | ZWG + USD per litre for Petrol, Diesel, LP Gas |

---

## 12. Known Company Facts (Pre-populate in CMS)

### Stations to seed in Sanity:

```json
[
  {
    "name": "Express Energy Main Service Station",
    "type": "Service Station",
    "area": "Masvingo CBD",
    "address": "15 Hofmeyer Street, Masvingo",
    "landmark": "Next to Tatenda Building, Opposite Channel 1",
    "phone": "0773 910 693",
    "openingHours": "Open 24 hours, 7 days a week",
    "products": ["Unleaded Petrol", "Diesel 50", "LP Gas", "Lubricants", "Ice Blocks"],
    "payments": ["EcoCash", "InnBucks", "Omari", "USD Cash", "ZWG Cash"]
  },
  {
    "name": "Express Energy Mucheke LP Gas",
    "type": "LP Gas Station",
    "area": "Mucheke, Masvingo",
    "address": "Mucheke, Masvingo",
    "landmark": "Opposite Mamutse Stadium",
    "openingHours": "[TBC]",
    "products": ["LP Gas"]
  },
  {
    "name": "Express Energy Rhodene LP Gas",
    "type": "LP Gas Station",
    "area": "Rhodene, Masvingo",
    "address": "Mazambane Shopping Centre, Rhodene",
    "landmark": "Mazambane Shopping Centre",
    "openingHours": "[TBC]",
    "products": ["LP Gas"]
  },
  {
    "name": "Express Energy Truck Garage — Masvingo",
    "type": "Truck Garage",
    "area": "Masvingo Industrial",
    "address": "Masvingo Industrial Area",
    "openingHours": "[TBC]",
    "products": ["Unleaded Petrol", "Diesel 50"]
  },
  {
    "name": "Express Energy Truck Garage — Chiredzi",
    "type": "Truck Garage",
    "area": "Chiredzi Industrial",
    "address": "Chiredzi Industrial Area",
    "openingHours": "[TBC]",
    "products": ["Unleaded Petrol", "Diesel 50"]
  }
]
```

---

*End of specification. All `[TBC]` items must be resolved with the client before the relevant page can launch.*
*Company: Express Energy Service Station · Masvingo, Zimbabwe · 0773 910 693 / 0776 161 732*
