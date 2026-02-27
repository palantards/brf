# BRF Manager - Product Planning

## Vision
Become the operating system for Swedish BRF management, replacing fragmented tools and expensive förvaltare with a simple, affordable platform.

---

## MVP Roadmap

### MVP 1 - "Board Survival Kit" (Months 1-3)
**Goal**: Get first 10-20 paying customers. Solve the sharpest pains.

#### Core Features
- [ ] **Authentication**
  - [ ] Email/password login
  - [ ] BankID integration (critical for Sweden)
  - [ ] Role-based access (board members vs residents)

- [ ] **Digital Anslagstavla (Notice Board)**
  - [ ] Create announcements
  - [ ] Email notifications to residents
  - [ ] Archive of past announcements
  - [ ] Rich text editor support

- [ ] **Felanmälan (Issue Reporting)**
  - [ ] Residents can report issues
  - [ ] Upload photos of problems
  - [ ] Board can assign issues to members/contractors
  - [ ] Status tracking (new, in progress, resolved)
  - [ ] Comment thread on each issue

- [ ] **Document Archive**
  - [ ] Upload documents (stadgar, årsredovisning, protokoll, försäkring)
  - [ ] Folder structure/categories
  - [ ] Search functionality
  - [ ] Version history
  - [ ] Access control (public to all residents vs board-only)

- [ ] **Resident Registry**
  - [ ] List of all apartments/units
  - [ ] Contact info per resident
  - [ ] Move-in/move-out tracking
  - [ ] Export to CSV/Excel

#### Technical Stack (Proposed)
- **Frontend**: Next.js 16, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Next.js API routes OR separate backend (Node.js/Go)
- **Database**: PostgreSQL (Supabase or Railway)
- **Auth**: BankID integration + traditional auth
- **File Storage**: S3-compatible (Supabase Storage, Cloudflare R2)
- **Email**: Resend or SendGrid
- **Hosting**: Vercel or Railway

#### Pricing
- Free for 3 months (early adopters)
- Then 400 SEK/month per BRF
- Or tiered: Free up to 20 units, 300 SEK for 21-50, 500 SEK for 51+

---

### MVP 2 - "Communication + Compliance" (Months 4-8)
**Goal**: Reduce churn, increase value, justify 600-800 SEK/month pricing.

#### Features
- [ ] **Digital Stämma (AGM)**
  - [ ] Create agenda
  - [ ] Motion submission by residents
  - [ ] Digital voting (röstning)
  - [ ] Proxy voting (fullmakt)
  - [ ] Auto-generate protokoll
  - [ ] Can be sold as separate seasonal add-on (2,000 SEK one-time)

- [ ] **Tvättstuga Booking (Laundry Room)**
  - [ ] Calendar view
  - [ ] Residents book time slots
  - [ ] Email reminders
  - [ ] Conflict resolution

- [ ] **Compliance Calendar**
  - [ ] Track deadlines: OVK, energideklaration, brandskyddskontroll, hissbesiktning, radonmätning
  - [ ] Automatic reminders 30/60/90 days before
  - [ ] Upload completion certificates
  - [ ] Board dashboard showing upcoming obligations

- [ ] **Contractor Directory**
  - [ ] Save contact info for plumbers, electricians, städfirma
  - [ ] Track work history (what they did, when, cost)
  - [ ] Resident ratings/reviews

- [ ] **Mobile App**
  - [ ] React Native wrapper
  - [ ] Push notifications for announcements
  - [ ] Quick issue reporting with camera
  - [ ] Laundry booking

#### Pricing Update
- 600-800 SEK/month base
- Stämma module: +200 SEK/month or 2,000 SEK one-time

---

### MVP 3 - "Financial Backbone" (Months 9-15)
**Goal**: Become indispensable. Lock-in through financial integration.

#### Features
- [ ] **Avgiftsavisering (Monthly Fee Billing)**
  - [ ] Generate monthly invoices for bostadsrättsavgift
  - [ ] Autogiro/Bankgiro integration
  - [ ] Track payment status
  - [ ] Automated reminders for late payments
  - [ ] Payment history per unit

- [ ] **Budget & Forecast**
  - [ ] Simple budget creation tool
  - [ ] Budget vs actual comparison
  - [ ] Flag deviations
  - [ ] Monthly/yearly views
  - [ ] Category breakdown

- [ ] **Underhållsplan (Maintenance Plan)**
  - [ ] 30-year timeline (tak, stamrör, fasad, fönster)
  - [ ] Visual Gantt-style timeline
  - [ ] Connect maintenance costs to budget
  - [ ] Upload documentation

- [ ] **Accounting Integration**
  - [ ] SIE file export (Swedish standard)
  - [ ] Fortnox integration
  - [ ] Visma integration

- [ ] **Pantsättningsförfrågan Handling**
  - [ ] Automate responses to bank inquiries
  - [ ] Template generation
  - [ ] Track which units have active mortgages

- [ ] **Board Portal**
  - [ ] Task management (Kanban board)
  - [ ] Meeting agenda builder
  - [ ] Protokoll templates
  - [ ] Decision log

#### Pricing Update
- 800-1,500 SEK/month depending on BRF size
- Avgiftsavisering justifies the price alone

---

## Long-term Vision (Years 2-5)

### Replace the Förvaltare
- Offer "ekonomisk förvaltning" package at 3,000-5,000 SEK/month
- Target small BRFs (20-50 units) paying 10,000-20,000 SEK to SBC/Riksbyggen
- Include full accounting, compliance, and administrative support

### Marketplace
- Vetted contractor marketplace
- BRFs can request quotes, compare, and hire
- Platform takes 5-10% commission
- Rating/review system

### Data Products
- Aggregated data on Swedish housing stock
- Sell to insurers, banks, construction companies
- Renovation cycles, energy usage, maintenance patterns

### Geographic Expansion
- Norway (borettslag)
- Finland (asunto-osakeyhtiö)
- Denmark (andelsboligforening)

---

## Go-to-Market Strategy

### Phase 1: Early Validation (Month 1)
- [x] Build landing page
- [ ] Post in 10 BRF Facebook groups
- [ ] Interview 5-10 board members (15 min each)
- [ ] Goal: 20+ email signups, 5+ interview confirmations

### Phase 2: Beta Launch (Months 2-3)
- [ ] Build MVP 1
- [ ] Recruit 5-10 beta BRFs (free for 3 months)
- [ ] Weekly feedback sessions
- [ ] Iterate based on feedback
- [ ] Create case studies/testimonials

### Phase 3: Paid Launch (Months 4-6)
- [ ] Convert beta users to paid
- [ ] Referral program (1 month free for each referral)
- [ ] Attend local BRF events in Stockholm/Gothenburg
- [ ] Partner with BRF consultants
- [ ] Content marketing (blog on BRF administration tips)

### Phase 4: Scale (Months 7-12)
- [ ] Target 50-100 paying BRFs
- [ ] Hire support/sales person
- [ ] Expand to multiple cities
- [ ] Build integrations with existing tools

---

## Key Risks & Mitigations

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Slow sales cycle (boards meet monthly) | High | High | Start outreach early, target ahead of stämma season (spring) |
| Existing players (SBC, HSB) build competing tools | High | Medium | Be faster, cheaper, independent. Focus on UX. |
| Board turnover (champions leave) | Medium | High | Make tool valuable for residents too, not just board |
| Support burden (non-technical users) | Medium | High | Extreme simplicity, Swedish support, video tutorials |
| BankID integration complexity | Medium | Medium | Use established provider (Criipto, FrejaID), budget extra time |
| GDPR compliance | High | High | Built-in from day 1, audit before launch |

---

## Success Metrics

### Year 1
- 50 paying BRFs
- 20,000 SEK MRR
- <5% monthly churn
- NPS >40

### Year 2
- 200 paying BRFs
- 120,000 SEK MRR
- Team of 2-3
- Self-sustaining revenue

### Year 3
- 500 paying BRFs
- 500,000 SEK MRR
- Team of 5-6
- Exploring Series A or staying bootstrapped

---

## Current Status

**Phase**: Validation
**Priority**: Land 5-10 board member interviews ASAP

### Immediate Next Steps (This Week)
1. [ ] Share landing page in BRF Facebook groups
2. [ ] Draft interview script
3. [ ] Reach out to personal network for board member intros
4. [ ] Set up email capture backend (Google Sheets or Mailchimp)
5. [ ] Schedule first 3 interviews

### Technical Todos (After Validation)
1. [ ] Set up PostgreSQL database (Supabase recommended)
2. [ ] Design database schema
3. [ ] Implement BankID authentication
4. [ ] Build core MVP 1 features
5. [ ] Deploy to production (Vercel)
6. [ ] Set up monitoring (Sentry, PostHog)

---

## Resources Needed

### Development
- 1-2 full-stack developers (2-3 months for MVP 1)
- Designer (contract, 2-3 days for polish)

### Budget
- Hosting: ~200 SEK/month (Vercel Hobby)
- Database: ~100 SEK/month (Supabase Free → Pro)
- Email: ~0-500 SEK/month (Resend has generous free tier)
- BankID: ~1,000-2,000 SEK/month (depends on provider)
- Domain: ~100 SEK/year
- **Total**: ~2,000-3,000 SEK/month

### Time Investment
- MVP 1: 2-3 months (if full-time)
- MVP 2: 1-2 months additional
- MVP 3: 2-3 months additional

---

## Questions to Answer (Through Interviews)

1. What's your biggest pain point as a board member?
2. How do you currently handle felanmälan/documents/communication?
3. What happens when board members change?
4. How much time do you spend on board work per week?
5. What would you pay for a tool that solved [their top pain]?
6. Who makes the buying decision? (board vote? stämma?)
7. What tools do you currently pay for?
8. Would you switch from your current förvaltare if you had better tools?

---

**Last Updated**: 2026-02-27
**Next Review**: After first 5 interviews
