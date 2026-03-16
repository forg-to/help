# help.forg.to

Help center for [forg.to](https://forg.to) — live at [help.forg.to](https://help.forg.to).

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript

## Structure

```
app/               # Next.js app router pages
  page.tsx         # Home — category grid + FAQ
  [category]/      # Dynamic category + article routes
components/        # Shared UI components
data/
  content.ts       # All help articles and FAQs — edit this to update content
```

## Adding or editing content

All help content lives in `data/content.ts`. It exports:

- `HELP_CONTENT` — array of categories, each with a list of articles (title, slug, markdown-style content)
- `FAQS` — array of FAQ items shown on the home page

To add an article: add an entry to the relevant category's `articles` array.
To add a category: add a new object to `HELP_CONTENT` with a unique `slug` and a Lucide icon name.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying

Deployed via Vercel. Push to `main` to trigger a deploy.
