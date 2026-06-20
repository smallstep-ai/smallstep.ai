# smallstep.ai

Marketing site for Smallstep AI, built with Next.js, React, Tailwind CSS, and MDX.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- HeroUI
- MDX for content

## Project Structure

```
src/
  app/              # Next.js app routes and layouts
  components/       # React components
    home/           # Homepage sections
    misal/          # Misal page sections
  lib/              # Data, config, utilities
  types/            # TypeScript types
content/            # MDX blog/content files
public/             # Static assets
  images/           # Site images
  fonts/            # Custom fonts
```

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
npm run typecheck# Run TypeScript checks
```

## Dev Server

```bash
./dev.sh
```

Runs the Next.js dev server in a tmux session and attaches to it.
