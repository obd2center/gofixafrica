# GoFixAfrica Platform - Development Master Plan
## Complete Module Development Roadmap

---

## 📋 Executive Summary

**Project:** GoFixAfrica - Pan-African Automotive Services Marketplace
**Scope:** 24 HTML pages + Design System + Documentation
**Estimated Effort:** 4 Development Phases
**Target Markets:** Kenya, Nigeria, South Africa, Rwanda, Uganda, Tanzania, Ghana, Ethiopia

---

## 🏗️ Project Architecture

### Directory Structure
```
gofixafrica/
├── index.html                    # Landing page
├── assets/
│   ├── css/
│   │   ├── variables.css         # Design tokens
│   │   ├── base.css              # Reset & typography
│   │   ├── components.css        # Reusable components
│   │   ├── layouts.css           # Page layouts
│   │   └── utilities.css         # Helper classes
│   ├── js/
│   │   ├── app.js                # Main application logic
│   │   ├── components/
│   │   │   ├── booking-form.js   # Booking widget
│   │   │   ├── filters.js        # Filter sidebar
│   │   │   ├── geolocation.js    # Location detection
│   │   │   ├── modals.js         # Modal dialogs
│   │   │   └── forms.js          # Form validation
│   │   └── utils/
│   │       ├── api.js            # API helpers (future)
│   │       ├── storage.js        # LocalStorage utils
│   │       └── whatsapp.js       # WhatsApp deep links
│   └── images/
│       ├── icons/                # SVG icons
│       ├── logos/                # Brand assets
│       └── photos/               # Placeholder images
├── pages/
│   ├── auth/
│   │   ├── login.html
│   │   ├── register.html
│   │   ├── forgot-password.html
│   │   └── verify-phone.html
│   ├── mechanics/
│   │   ├── listing.html          # mechanics.html
│   │   ├── profile.html          # mechanic-profile.html
│   │   └── join.html             # Mechanic registration
│   ├── vendors/
│   │   ├── listing.html          # Parts vendors list
│   │   └── profile.html          # vendor-profile.html
│   ├── parts/
│   │   ├── marketplace.html      # Parts search
│   │   └── request-quote.html    # Parts quote request
│   ├── booking/
│   │   ├── new.html              # Booking flow
│   │   ├── confirmation.html     # Success page
│   │   └── track.html            # Track service
│   ├── info/
│   │   ├── services.html
│   │   ├── about.html
│   │   ├── faq.html
│   │   ├── contact.html
│   │   └── how-it-works.html
│   ├── legal/
│   │   ├── privacy.html
│   │   ├── terms.html
│   │   └── warranty.html
│   └── marketing/
│       ├── blog/
│       │   ├── index.html
│       │   └── post.html
│       ├── success-stories.html
│       ├── careers.html
│       └── press.html
├── dashboards/                   # Phase 4
│   ├── mechanic/
│   ├── customer/
│   ├── vendor/
│   └── admin/
└── docs/
    ├── STYLEGUIDE.md
    ├── COMPONENTS.md
    └── API-SPEC.md
```

---

## 🎨 Design System Specifications

### Color Palette
```css
/* Primary Brand */
--primary-50: #FFF7ED;
--primary-100: #FFEDD5;
--primary-200: #FED7AA;
--primary-300: #FDBA74;
--primary-400: #FB923C;
--primary-500: #FF6B00;      /* Main brand orange */
--primary-600: #EA580C;
--primary-700: #C2410C;

/* Accent (Trust/Success) */
--accent-400: #2DD4BF;
--accent-500: #00D4AA;       /* Main accent teal */
--accent-600: #0D9488;

/* Neutral (Dark Theme) */
--neutral-900: #0A1628;      /* Background */
--neutral-800: #111D32;      /* Cards */
--neutral-700: #182640;      /* Elevated */
--neutral-600: #1E3A5F;
--neutral-400: #64748B;      /* Muted text */
--neutral-300: #94A3B8;      /* Secondary text */
--neutral-100: #F1F5F9;      /* Primary text */

/* Semantic */
--success: #00C851;
--warning: #FFB800;
--error: #EF4444;
--info: #0077B6;

/* Reputation Tiers */
--rep-legendary: linear-gradient(135deg, #FFD700, #FFA500);
--rep-excellent: #00C851;
--rep-good: #70E000;
--rep-building: #FFB800;
```

### Typography
```css
/* Font Families */
--font-display: 'Space Grotesk', sans-serif;  /* Headings */
--font-body: 'Outfit', sans-serif;            /* Body text */

/* Font Sizes (Mobile First) */
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 2rem;       /* 32px */
--text-4xl: 2.5rem;     /* 40px */
--text-5xl: 3rem;       /* 48px */

/* Line Heights */
--leading-tight: 1.1;
--leading-snug: 1.3;
--leading-normal: 1.6;
--leading-relaxed: 1.7;

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

### Spacing Scale
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### Border Radius
```css
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-2xl: 20px;
--radius-3xl: 24px;
--radius-full: 9999px;
```

### Shadows
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.15);
--shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.2);
--shadow-xl: 0 25px 50px rgba(0, 0, 0, 0.25);
--shadow-glow: 0 0 60px rgba(255, 107, 0, 0.3);
--shadow-glow-accent: 0 0 40px rgba(0, 212, 170, 0.3);
```

### Breakpoints
```css
--bp-sm: 640px;    /* Mobile landscape */
--bp-md: 768px;    /* Tablet */
--bp-lg: 1024px;   /* Desktop */
--bp-xl: 1280px;   /* Large desktop */
--bp-2xl: 1536px;  /* Extra large */
```

---

## 📦 Reusable Components Library

### 1. Buttons
```
- btn-primary (gradient orange)
- btn-secondary (dark with border)
- btn-whatsapp (green)
- btn-accent (teal gradient)
- btn-outline (transparent with border)
- btn-ghost (no background)
- Sizes: btn-sm, btn-md, btn-lg
- States: hover, active, disabled, loading
```

### 2. Cards
```
- card-base (standard container)
- card-mechanic (mechanic listing)
- card-vendor (vendor listing)
- card-service (service type)
- card-testimonial (review)
- card-stat (statistics)
- card-step (how it works)
```

### 3. Forms
```
- input-text
- input-select
- input-textarea
- input-checkbox
- input-radio
- input-phone (with country code)
- input-location (with detect button)
- form-group (label + input + error)
- form-row (multi-column)
```

### 4. Badges & Tags
```
- badge-verified (green checkmark)
- badge-reputation (legendary/excellent/good)
- badge-status (online/offline/busy)
- tag-specialty (mechanic skills)
- tag-category (parts category)
- tag-location (area/city)
```

### 5. Navigation
```
- header (sticky with blur)
- nav-link (with hover underline)
- nav-cta (action buttons)
- mobile-menu (hamburger)
- breadcrumb
- pagination
- tabs
```

### 6. Feedback
```
- alert (success/error/warning/info)
- toast (notification popup)
- modal (dialog overlay)
- tooltip
- skeleton (loading placeholder)
- empty-state (no results)
```

### 7. Layout
```
- container (max-width wrapper)
- section (page section with padding)
- grid-2/3/4 (column grids)
- sidebar-layout (main + aside)
- hero (full-width banner)
```

---

## 📅 Development Phases

### Phase 1: Foundation & Core Pages (Week 1-2)
**Goal:** Complete design system and essential user flows

| Day | Tasks | Deliverables |
|-----|-------|--------------|
| 1-2 | Design System Setup | `variables.css`, `base.css`, `components.css` |
| 3 | Shared Components | Header, Footer, Buttons, Cards |
| 4 | `join.html` | Mechanic registration form |
| 5 | `login.html` | Auth page (login/register tabs) |
| 6 | `parts.html` | Parts marketplace |
| 7 | `booking-confirmation.html` | Success/confirmation page |
| 8 | Testing & Polish | Cross-browser, responsive testing |

**Phase 1 Deliverables:**
- [ ] Design system CSS files
- [ ] Reusable component library
- [ ] `join.html` - Mechanic registration
- [ ] `login.html` - Authentication
- [ ] `parts.html` - Parts marketplace
- [ ] `booking-confirmation.html` - Booking success

---

### Phase 2: Information Architecture (Week 3)
**Goal:** Complete all informational pages

| Day | Tasks | Deliverables |
|-----|-------|--------------|
| 9 | `services.html` | Detailed services grid |
| 10 | `about.html` | Company story, team, mission |
| 11 | `faq.html` | Accordion FAQ sections |
| 12 | `contact.html` | Contact form + map |
| 13 | `how-it-works-mechanics.html` | Guide for mechanics |
| 14 | `vendor-network.html` | Vendors listing page |

**Phase 2 Deliverables:**
- [ ] `services.html` - All services detailed
- [ ] `about.html` - Company information
- [ ] `faq.html` - Customer & mechanic FAQs
- [ ] `contact.html` - Contact form
- [ ] `how-it-works-mechanics.html` - Mechanic guide
- [ ] `vendor-network.html` - Vendors directory

---

### Phase 3: Legal & Marketing (Week 4)
**Goal:** Complete legal compliance and marketing pages

| Day | Tasks | Deliverables |
|-----|-------|--------------|
| 15 | `privacy.html` | Privacy policy |
| 16 | `terms.html` | Terms of service |
| 17 | `warranty.html` | Warranty policy |
| 18 | `blog/index.html` | Blog listing |
| 19 | `blog/post.html` | Single blog post template |
| 20 | `success-stories.html` | Case studies |
| 21 | `careers.html` | Job listings |
| 22 | `press.html` | Media kit & press |

**Phase 3 Deliverables:**
- [ ] `privacy.html` - Privacy policy
- [ ] `terms.html` - Terms of service
- [ ] `warranty.html` - Warranty policy
- [ ] `blog/index.html` - Blog listing
- [ ] `blog/post.html` - Blog post template
- [ ] `success-stories.html` - Testimonials
- [ ] `careers.html` - Job listings
- [ ] `press.html` - Press/media kit

---

### Phase 4: Dashboards (Week 5-6)
**Goal:** User dashboards for all user types

#### Mechanic Dashboard
```
/dashboard/mechanic/
├── index.html          # Overview, stats, pending jobs
├── jobs.html           # Job management
├── earnings.html       # Earnings & payouts
├── reviews.html        # Customer reviews
├── profile.html        # Edit profile
├── vendors.html        # Linked vendors
└── settings.html       # Account settings
```

#### Customer Dashboard
```
/dashboard/customer/
├── index.html          # Overview, recent bookings
├── bookings.html       # Booking history
├── vehicles.html       # My vehicles (garage)
├── favorites.html      # Saved mechanics
└── settings.html       # Account settings
```

#### Vendor Dashboard
```
/dashboard/vendor/
├── index.html          # Overview, stats
├── orders.html         # Parts orders
├── inventory.html      # Stock management
├── mechanics.html      # Linked mechanics
└── settings.html       # Account settings
```

---

## 📝 Page Specifications

### 1. join.html (Mechanic Registration)
**Purpose:** Onboard new mechanics to the platform

**Sections:**
1. Hero with value proposition
2. Benefits grid (earn more, flexibility, grow reputation)
3. Multi-step registration form:
   - Step 1: Personal Info (name, phone, email, location)
   - Step 2: Experience (years, specializations, certifications)
   - Step 3: Documents (ID upload, certificates)
   - Step 4: Verification (OTP phone verification)
4. Success state with next steps
5. FAQ for mechanics

**Form Fields:**
```
Personal:
- Full name (required)
- Phone number (required, OTP verified)
- Email (optional)
- ID/Passport number (required)
- Location/Area (required, with map picker)

Experience:
- Years of experience (dropdown)
- Specializations (multi-select checkboxes)
- Vehicle makes (multi-select)
- Certifications (file uploads)
- Workshop address (optional)

Documents:
- ID/Passport scan (required)
- Certificate uploads (optional)
- Profile photo (required)
```

**Validation:**
- Phone: Kenyan format (+254...)
- Real-time field validation
- Progress indicator
- Save draft functionality

---

### 2. login.html (Authentication)
**Purpose:** User authentication for all user types

**Features:**
- Tabbed interface: Login / Register
- Phone number + OTP authentication
- Social login options (Google, Facebook)
- "Remember me" option
- Password reset flow
- User type selection (Customer/Mechanic/Vendor)

**Security:**
- Rate limiting indicators
- CAPTCHA after failed attempts
- Session management info

---

### 3. parts.html (Parts Marketplace)
**Purpose:** Search and request quotes for auto parts

**Sections:**
1. Search hero with vehicle selector
2. Filter sidebar:
   - Vehicle make/model
   - Part category
   - Condition (new/used/refurbished)
   - Price range
   - Vendor rating
   - Location/delivery
3. Results grid with part cards
4. Quick quote request modal
5. Featured vendors section

**Part Card Contains:**
- Part image placeholder
- Part name & number
- Compatible vehicles
- Price range
- Vendor info
- Availability status
- "Request Quote" CTA

---

### 4. services.html (Services Directory)
**Purpose:** Detailed breakdown of all services offered

**Service Categories:**
1. General Service & Maintenance
2. Engine Repair & Rebuild
3. Transmission & Gearbox
4. Brakes & Safety
5. Electrical & Electronics
6. ECU Programming & Diagnostics
7. AC & Cooling System
8. Suspension & Steering
9. Bodywork & Paint
10. Emergency Roadside

**Per Service:**
- Description
- What's included
- Average duration
- Price range
- Common issues solved
- CTA to book

---

### 5. faq.html (FAQs)
**Purpose:** Answer common questions

**Sections:**
1. Customer FAQs
   - How booking works
   - Payment & pricing
   - Warranty & guarantees
   - Safety & trust
2. Mechanic FAQs
   - How to join
   - Earnings & payments
   - Tools & requirements
   - Reputation system
3. Vendor FAQs
   - Partnership process
   - Order management
   - Delivery requirements

**UI Pattern:**
- Accordion style
- Search/filter
- "Still have questions?" CTA

---

### 6. about.html (About Us)
**Purpose:** Build trust and tell brand story

**Sections:**
1. Hero with mission statement
2. Our Story (founding story)
3. Problem we solve
4. How we're different
5. Stats & achievements
6. Leadership team
7. Partners & backers
8. Press mentions
9. Join us CTA

---

### 7. contact.html (Contact)
**Purpose:** Provide multiple contact channels

**Features:**
- Contact form (name, email, subject, message)
- WhatsApp direct link
- Phone number
- Email addresses (support, partnerships, careers)
- Office locations (if any)
- Social media links
- Response time expectations

---

## ✅ Quality Standards & Best Practices

### Code Standards
```
1. Semantic HTML5 elements
2. BEM naming convention for CSS classes
3. Mobile-first responsive design
4. Accessibility (WCAG 2.1 AA compliance)
   - ARIA labels
   - Keyboard navigation
   - Screen reader support
   - Color contrast ratios
5. Performance optimization
   - Lazy loading images
   - Minified CSS/JS
   - Critical CSS inline
6. Cross-browser support (Chrome, Safari, Firefox, Edge)
7. Progressive enhancement
```

### SEO Requirements
```
Per Page:
- Unique title tag (50-60 chars)
- Meta description (150-160 chars)
- Open Graph tags
- Twitter Card tags
- Canonical URL
- Structured data (JSON-LD)
- H1-H6 hierarchy
- Alt text for images
- Internal linking
```

### Performance Targets
```
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Total page size: < 500KB
- Lighthouse score: > 90
```

### Testing Checklist
```
Per Page:
[ ] Mobile responsive (320px - 1920px)
[ ] Touch-friendly (48px tap targets)
[ ] Forms validate correctly
[ ] Links work (no 404s)
[ ] Images load
[ ] WhatsApp links open correctly
[ ] Cross-browser tested
[ ] Accessibility audit passed
[ ] Console error-free
```

---

## 🌍 Localization Considerations

### Currency Display
```javascript
const currencies = {
  kenya: { code: 'KES', symbol: 'KSh', locale: 'en-KE' },
  nigeria: { code: 'NGN', symbol: '₦', locale: 'en-NG' },
  southafrica: { code: 'ZAR', symbol: 'R', locale: 'en-ZA' },
  rwanda: { code: 'RWF', symbol: 'FRw', locale: 'rw-RW' },
  uganda: { code: 'UGX', symbol: 'USh', locale: 'en-UG' },
  tanzania: { code: 'TZS', symbol: 'TSh', locale: 'sw-TZ' },
  ghana: { code: 'GHS', symbol: 'GH₵', locale: 'en-GH' },
  ethiopia: { code: 'ETB', symbol: 'Br', locale: 'am-ET' }
};
```

### Phone Number Formats
```javascript
const phoneFormats = {
  kenya: { code: '+254', format: '+254 7XX XXX XXX', regex: /^\+254[17]\d{8}$/ },
  nigeria: { code: '+234', format: '+234 XXX XXX XXXX', regex: /^\+234[789]\d{9}$/ },
  southafrica: { code: '+27', format: '+27 XX XXX XXXX', regex: /^\+27[6-8]\d{8}$/ },
  // ... etc
};
```

### Language Support (Future)
```
- English (default)
- Swahili (Kenya, Tanzania)
- French (Rwanda)
- Amharic (Ethiopia)
```

---

## 📊 Analytics & Tracking Plan

### Events to Track
```
Page Views:
- All pages with UTM parameters

User Actions:
- booking_started
- booking_completed
- quote_requested
- mechanic_profile_viewed
- vendor_profile_viewed
- whatsapp_clicked
- phone_clicked
- filter_applied
- search_performed
- registration_started
- registration_completed
- login_success
- login_failed
```

### Conversion Funnels
```
1. Landing → Booking Started → Booking Completed
2. Mechanic Listing → Profile View → WhatsApp Click
3. Parts Search → Quote Request → Quote Received
4. Join Page → Registration Started → Registration Complete
```

---

## 🚀 Deployment Strategy

### Staging Environment
- Test all pages before production
- QA checklist per page
- Performance testing

### Production Checklist
```
[ ] All pages tested on staging
[ ] SEO meta tags verified
[ ] Analytics tracking verified
[ ] Forms submit correctly
[ ] WhatsApp links tested
[ ] Mobile responsive verified
[ ] SSL certificate active
[ ] 404 page configured
[ ] Sitemap.xml generated
[ ] robots.txt configured
```

---

## 📞 Support & Handoff

### Documentation to Provide
1. This Master Plan document
2. Component Style Guide (with examples)
3. Page-by-page specifications
4. Asset files (logos, icons, images)
5. Copy document (all text content)

### Future Considerations
1. Backend API integration
2. Database schema design
3. Payment gateway (M-Pesa, Flutterwave)
4. SMS/WhatsApp Business API
5. Push notifications
6. Mobile app (React Native)

---

## ⏱️ Timeline Summary

| Phase | Duration | Pages | Status |
|-------|----------|-------|--------|
| Phase 0 | Completed | 4 pages | ✅ Done |
| Phase 1 | Week 1-2 | 6 pages + Design System | 🔄 Next |
| Phase 2 | Week 3 | 6 pages | ⏳ Pending |
| Phase 3 | Week 4 | 8 pages | ⏳ Pending |
| Phase 4 | Week 5-6 | 15+ dashboard pages | ⏳ Pending |

**Total: ~35 pages + Design System**

---

## ✍️ Next Steps

1. **Approve this plan** - Review and confirm scope
2. **Start Phase 1** - Begin with design system CSS
3. **Build components** - Create reusable component library
4. **Develop pages** - Build pages in priority order
5. **Test & iterate** - QA each page before moving on
6. **Deploy incrementally** - Ship completed phases

---

*Document Version: 1.0*
*Last Updated: December 2024*
*Project: GoFixAfrica Platform*
