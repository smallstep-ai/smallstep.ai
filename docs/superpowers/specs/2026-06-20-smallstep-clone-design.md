# Smallstep.ai Clone Design

## Goal
Build near-1:1 Next.js clone of current `smallstep.ai` using Tailwind CSS only, preserving color palette, typography, spacing feel, route structure, images, and content. Allowed variance: minor polish edits only. Primary routes in scope now:
- `/`
- `/misal`
- `/making-misal`
- `/blog`
- blog detail routes needed by migrated content

## Constraints
- Tailwind CSS only
- No custom CSS files
- Preserve existing color/theme/fonts
- Prefer prebuilt UI components over hand-rolled UI where practical
- Reuse blog implementation patterns from `../sagarsarkale.com/site`
- Migrate current site/article/blog content into local markdown or MDX
- Keep assets local in project, not hotlinked from Framer

## Inputs Available
### Current repo
- `design/smallstep.ai-DESIGN.md`
- `design/smallstep.ai-design.css`
- `design/smallstep.ai-design-vars.css`
- `design/smallstep.ai-design-tailwind-v4.css`
- `design/smallstep.ai-design-tokens.json`
- `design/assets/manifest.json`
- `design/assets/README.md`
- downloaded route assets under `design/assets/{shared,misal,making-misal}`

### External reference
- sibling blog source: `../sagarsarkale.com/site`
- live site content/routes: `https://smallstep.ai`, `/misal`, `/making-misal`

## Architecture
Use Next.js App Router with static-first pages and MDX-backed content. Tailwind drives all styling. Fonts loaded with `next/font`. Reusable UI should come from prebuilt component libraries, primarily HeroUI and selective shadcn/ui content helpers, then styled via Tailwind utility classes to match existing site. Avoid custom CSS by expressing all spacing, layout, color, borders, typography, shadows, and responsive behavior as utilities or theme tokens.

Content architecture should split page shell from content payload:
- marketing routes as React page components
- article/blog content as MDX files plus frontmatter
- shared data for nav/footer/social links as plain TS objects
- all images stored under `public/`

## Route Design
### `/`
Clone current homepage structure:
1. navbar
2. hero with headline/subtext/cover image
3. MISAL spotlight section
4. team card grid
5. footer

### `/misal`
Clone product page structure:
1. navbar
2. hero
3. bento/stat/feature groups
4. CTA cards and external links
5. footer

### `/making-misal`
Clone article page structure as MDX-driven longform page:
1. navbar
2. article hero/title
3. sectioned article content
4. inline figures/images
5. footer

### `/blog`
Blog index based on sibling site approach. Should list migrated posts with title, summary, date, tags, and image/cover if available.

### blog detail routes
Use catch-all slug route similar to sibling project so content stays file-driven and static-generated.

## UI Strategy
### Component libraries
Use mix strategy:
- HeroUI for navbar, buttons, cards, simple layout primitives where fit is good
- shadcn/ui for article/content-adjacent primitives if needed
- Native semantic HTML for article prose where library adds no value

### Customization rule
No custom CSS files. If a library component cannot be styled close enough through Tailwind-friendly APIs and classNames, replace that piece with another library primitive or minimal utility-only markup. Goal is fidelity without CSS drift.

### Design fidelity
Preserve:
- colors from extracted design tokens, especially orange `#fe911c`, teal `#2ca9a8`, deep navy `#001122`, black/white neutrals
- font pairing: Inter + General Sans
- rounded pill/card shapes
- soft card/nav elevation
- generous whitespace and centered layout

## Styling System
Implement Tailwind theme extensions for:
- brand colors
- font families
- border radius scale
- shadows
- spacing aliases only if needed

Avoid global CSS except minimum Tailwind-required app stylesheet entrypoint. No handwritten styling rules beyond Tailwind directives/imports needed by framework.

## Content System
### Markdown/MDX source
Use local MDX files for:
- `/making-misal`
- blog posts

Frontmatter should include at least:
- `title`
- `date`
- `summary`
- `description`
- `tags`
- `cover`
- `slug`

### Reuse from sibling blog
Port and adapt from `../sagarsarkale.com/site`:
- content loading/parsing pattern
- blog index generation
- dynamic blog route generation
- MDX rendering pipeline
- optional TOC if current article structure benefits

Do not blindly port shortcode complexity unless current content needs it.

## Asset Strategy
Move all downloaded images into project-local `public/` structure, likely:
- `public/images/shared/`
- `public/images/misal/`
- `public/images/making-misal/`
- `public/images/home/`
- `public/og/` if needed

Need one more extraction pass for homepage-specific images and any blog images not yet downloaded. Keep a source manifest for traceability.

## Data Boundaries
Keep these modules separate:
- site config: nav, footer, socials
- content loader: MDX parsing and post/article loading
- page sections: home/misal/article-specific section components
- shared UI wrappers: container, section heading, card wrapper if needed

This keeps implementation modular while preventing giant page files.

## Error Handling
- Missing content file should fail build loudly for statically generated routes
- Missing image reference should surface during build or local QA
- Invalid frontmatter should throw descriptive error in content loader

## Testing and Verification
Because site is mostly static, success criteria focus on render fidelity and content correctness:
- route pages build without runtime errors
- all local images resolve
- blog/article routes static-generate
- visual QA against live site screenshots for homepage, `/misal`, `/making-misal`
- mobile and desktop spot checks

If Playwright is added, use it for screenshot capture and route smoke tests. If not, use manual browser verification during build phase.

## Subagent Plan
Use subagents for independent prep work before implementation:
1. route/content extraction agent
   - homepage structure, assets, text copy, links
2. blog system audit agent
   - exact reusable files/patterns from sibling site
3. implementation planning agent
   - file map, task decomposition, dependency ordering

During execution, use subagents per task where tasks do not overlap heavily.

## File/Folder Shape Target
Expected new app structure:
- `package.json`
- `src/app/...`
- `src/components/...`
- `src/lib/content/...`
- `content/blog/...`
- `content/pages/making-misal.mdx` or equivalent
- `public/images/...`
- `tailwind` config as needed for Next version/tooling

Exact files to be locked in implementation plan.

## Out of Scope For First Pass
- CMS/admin editing
- search
- comments
- analytics changes
- animation beyond what is needed for close visual match
- full-site redesign

## Success Criteria
Project considered successful when:
- Next.js app exists and runs locally
- homepage visually matches current site closely
- `/misal` visually matches current site closely
- `/making-misal` content and layout match current site closely
- `/blog` and blog detail routes work with migrated local content
- assets are local, not remote Framer dependencies
- styling uses Tailwind only
- fonts/colors/theme remain faithful

## Recommended Execution Order
1. bootstrap Next.js app with Tailwind, fonts, HeroUI, shadcn
2. extract remaining homepage/blog assets and copy
3. port blog/content pipeline from sibling project
4. build shared shell: nav/footer/container primitives
5. implement homepage
6. implement `/misal`
7. implement `/making-misal`
8. implement `/blog` and detail routes
9. verify route fidelity and asset completeness

## Notes From Self-Review
- Scope is focused to clone routes already named by user plus blog path needed for migrated content.
- No placeholders remain.
- Content system intentionally limited to current article/blog needs, not full shortcode parity unless required during migration.
- Prebuilt component rule is preserved without forcing poor-fit components where semantic markup is better.