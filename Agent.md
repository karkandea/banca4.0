# AGENT.md — Banca 4.0 (Golden Prototype → Next.js on Vercel, Mock Only)

## 0) Goal (READ FIRST)
Implement **end-to-end UI prototype** based on Figma:
- Figma file: “Banca 4.0” — https://www.figma.com/design/8f1jpbubTyKXVewyB4M4OR/Banca-4.0
- **No backend**. No real API calls. Everything uses **mock data** and **client-side state**.
- UI should run on Vercel (Next.js) and behave like a real app: navigation works, screens exist, basic CRUD is simulated.
- Target priority: **Happy path + main flow** first. Other branches later.
- Rendering target: **force mobile viewport** (mobile-first, lock layout to mobile width).

## 1) Non-goals
- No server DB, no auth system, no real permissions.
- No production-grade security / validation beyond UI needs.
- No analytics, payments, notifications.

## 2) Tech baseline (recommended default)
Use these defaults unless repo already dictates otherwise:
- Next.js (App Router) + TypeScript
- TailwindCSS + shadcn/ui (install if not present)
- Framer Motion for transitions/micro-interactions
- Icons: lucide-react (or match repo standard)
- State: React state + lightweight store (Zustand optional). Keep simple.

If the repo already has a chosen stack, follow it.

## 3) Mobile-locked layout requirement
This prototype must feel like a mobile app:
- Constrain app to a fixed mobile container width (e.g. 390px) centered on desktop.
- Add `min-h-dvh` so it feels like a device screen.
- Prevent “desktop stretching” of components: typography/spacing follow mobile scale.
- Scrolling: use single main scroll area (avoid nested scroll traps unless Figma shows it).

Implementation hint:
- Create `<AppShell>` that wraps pages inside a mobile frame container.

## 4) App structure (suggested)
Use App Router with route groups:
- `app/(auth)/login/page.tsx`
- `app/(app)/dashboard/page.tsx`
- `app/(app)/...` for other screens
- `app/layout.tsx` sets global styles/fonts
- `components/` for reusable UI blocks
- `lib/mock/` for mock DB + seed data
- `lib/state/` for global stores (auth/session, mock-db actions)
- `lib/ui/` for small UI helpers (formatters, constants)

## 5) Routing & flow (Happy Path v1)
Minimum “root routes”:
- `/login` (dummy form)
- `/dashboard` (landing after login)
- other menus as in Figma (follow the design exactly)

Happy-path navigation rules:
- Login submit always “succeeds” (simulate loading, then redirect to `/dashboard`).
- No auth guard required (user said prototyping only). 
  BUT still keep a “session” flag in client state so UI can react.

## 6) Mock auth & roles (3 roles)
We simulate 3 roles (as per Figma). No hard enforcement, only UI variations.
- Roles: define constants, e.g. `OWNER | ADMIN | USER` (confirm names from Figma labels).
- On login, allow choosing role in one of these ways:
  1) Hidden dev switch (top-right debug menu), OR
  2) Role dropdown on login page (only if Figma has it), OR
  3) Default to one role, provide “Switch Role” in settings screen.

Role effects:
- Only show/hide menu items or sections if Figma indicates role-based UI.
- Do not block routes (no redirect guard).

## 7) Mock data: best-practice approach (do this)
We need mock data that supports:
- list views, detail views
- CRUD simulation (create/edit/delete in-memory)
- loading/skeleton/empty states

Implement a tiny “mock DB” layer:
- `lib/mock/seed.ts`: initial datasets
- `lib/mock/db.ts`: in-memory store + CRUD functions
- `lib/mock/api.ts`: async wrappers that simulate latency and error

Rules:
- All “API-like” functions must be async and add artificial delay (e.g. 400–900ms).
- Support toggling states:
  - normal success
  - empty result
  - error (throw)
This lets us render skeleton/empty/error easily.

Example function signatures:
- `loginMock({ email, password, role }) => Promise<{ sessionId, role, user }>`
- `getDashboardMock() => Promise<DashboardData>`
- `listXMock(params)`, `createXMock(payload)`, `updateXMock(id,payload)`, `deleteXMock(id)`

IMPORTANT: Do not add real Next.js route handlers. Keep it client-only.

## 8) UI states policy (priority order)
User request: loading/skeleton/empty state needed, but prioritize happy path first.

v1 (Happy path):
- Implement loading skeleton on first load per screen.
- Implement successful data render.
- Implement basic navigation.

v1.1 (After happy path):
- Empty states (when dataset length == 0)
- Error states (show error block + retry button)
- CRUD forms (modal/sheet/page per Figma)

## 9) “Follow Figma” rule
- Layout, spacing, typography, component shapes: follow Figma.
- If there is ambiguity:
  - Prefer matching **vibe** over inventing new UI.
  - Do not introduce extra pages/flows not in Figma.
- Use Figma exports for assets/icons if provided. Otherwise use close substitutes.

## 10) Animations (Framer Motion)
Use subtle motion only:
- Page transitions: fade/slide small distance
- Modal/sheet: spring in/out
- Button tap feedback: scale down slightly
Keep it light; don’t over-animate.

## 11) Navigation & layout patterns
- If Figma uses bottom nav: implement bottom nav fixed inside mobile frame.
- If Figma uses sidebar: adapt to mobile (drawer/sheet) unless Figma shows otherwise.
- Header patterns: back button, title, actions follow Figma.

## 12) CRUD simulation guidelines
If a screen has create/edit/delete:
- Keep data in client memory (store).
- Persist only for the session (no localStorage unless needed).
- After create/update/delete: update list instantly + show toast.

## 13) Quality bar / acceptance criteria
A. Visual
- Mobile-locked layout consistent across pages.
- Core screens reasonably match Figma (1:1 preferred, otherwise vibe-match).

B. UX
- User can traverse main flow end-to-end without dead ends.
- Primary buttons work and route to the right screen.
- Loading skeleton appears when entering screens that fetch mock data.

C. Tech
- No real API calls.
- Clean component structure; reuse components for repeated patterns.
- No console errors in normal navigation.

## 14) Implementation steps (strict order)
1) Set mobile frame + global layout + typography
2) Implement routing skeleton for all main pages (placeholder)
3) Implement `/login` (dummy submit + loading + redirect)
4) Implement `/dashboard` (mock fetch + skeleton + render)
5) Implement main navigation (menu/bottom nav) matching Figma
6) Slice remaining screens one-by-one following Figma order
7) Add empty/error states after happy path is stable
8) Add CRUD simulation where required

## 15) Deliverables checklist
- [ ] App runs locally + deployable to Vercel
- [ ] `/login` works (mock) → `/dashboard`
- [ ] All Figma screens exist as routes/components
- [ ] Main navigation works for all menu items
- [ ] Skeleton states on key pages
- [ ] No backend / no API routes
- [ ] Motion implemented (Framer Motion) minimally

## 16) Notes for MCP Figma usage
- Use Figma as source of truth for spacing/typography.
- Export assets directly from Figma when needed.
- Name components and files descriptively based on Figma section names.
