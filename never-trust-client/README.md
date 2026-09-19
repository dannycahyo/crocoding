# Billing Demo

Minimal subscription-payment demo built to show a server-side trust
boundary bug and its fix, for a short-form video.

## Setup

```bash
npm install
npm run dev
```

Visit `http://localhost:5173/checkout`. Use `/dev/login` first if you
want to see `/account` reflect the Premium badge (dev-only login,
seeds the session for the demo user).

## The two versions

Tagged commits on `master`:

- `v1-vulnerable` — `/checkout`'s action trusts `amount`, `userId`,
  and `planName` straight from the request body.
- `v2-fixed` — the action derives the user from the session and the
  price from the stored plan; the client can only choose which plan.

Switch between them:

```bash
git checkout v1-vulnerable
git checkout v2-fixed
```

## Reset between takes

State lives in `data/db.json`, read and written per request (no
in-memory state, so HMR never drops it). Reset it back to the seeded
state with:

```bash
npm run reset
```

Run this before each take/recording.

## Out of scope

`/payment/:orderId` and `/dev/login` have no auth/ownership checks —
anyone with an order ID can view or mark it paid. This is intentional:
the demo's single lesson is `/checkout`'s trust boundary on
`amount`/`userId`/`planName`, and widening scope to other routes
would dilute that. Don't mistake the omission for an oversight.
