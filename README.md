# PositivityReign Consult

A responsive Next.js marketing site for PositivityReign Consult, styled with
Tailwind CSS and the client's blue (`#1580AC`) and olive green (`#9CC55F`).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Site pages

- `/` — Home
- `/about` — About PositivityReign Consult
- `/services` — Consulting, mental health therapy, training, EAP, and project
  management
- `/contact` — Direct phone and email links

The shared contact details and service descriptions are in
[`lib/site-data.ts`](./lib/site-data.ts). The supplied logo is
[`public/positivityreign-logo.jpg`](./public/positivityreign-logo.jpg).

The contact experience intentionally uses direct phone and email links; no
message form or backend is configured.

## Validate

```bash
npm run lint
npm run build
```
