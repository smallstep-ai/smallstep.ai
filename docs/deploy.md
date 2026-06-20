# Deploy smallstep.ai

This site is a static Next.js export deployed to GitHub Pages and served from a custom domain.

## Stack

- Next.js 16 with static export (`output: 'export'`)
- Build output directory: `dist/`
- GitHub Actions workflow: `.github/workflows/deploy.yml`
- Custom domain: `smallstep.ai`

## GitHub Pages setup

1. Repo → Settings → Pages
2. Source: **GitHub Actions**
3. Custom domain: `smallstep.ai`
4. Wait for DNS check → green checkmark
5. Enable **Enforce HTTPS**

## DNS records (GoDaddy)

Add the following records for `smallstep.ai`:

### A records for apex domain

| Type | Name | Value |
|------|------|-------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

These are GitHub Pages server IPs.

### CNAME record for www

| Type | Name | Value |
|------|------|-------|
| CNAME | `www` | `smallstep-ai.github.io` |

Remove any old Framer/GoDaddy A records (e.g. `35.71.142.77`, `52.223.52.2`) from the apex domain or the domain will keep resolving to the wrong servers.

## CNAME file

`public/CNAME` must contain the apex domain:

```text
smallstep.ai
```

This file is copied into the `dist/` folder during build so GitHub Pages recognizes the custom domain on every deploy.

## next.config.ts

Do **not** set `basePath` or `assetPrefix` when using a custom domain. The config should look like:

```ts
const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};
```

If you ever deploy back to a project path like `https://smallstep-ai.github.io/smallstep.ai/`, re-add:

```ts
basePath: "/smallstep.ai",
assetPrefix: "/smallstep.ai/",
```

## GitHub Actions workflow

The workflow in `.github/workflows/deploy.yml` builds the site and uploads the `dist/` folder as a Pages artifact.

Do **not** set `NEXT_PUBLIC_BASE_PATH` in the build step when using a custom domain. The build step should be:

```yaml
- name: Build
  run: npm run build
```

## Troubleshooting

### 404 "There isn't a GitHub Pages site here"

- DNS apex A records still point to old servers. Run `dig smallstep.ai A +short` and confirm only the four GitHub IPs are returned.
- GitHub Pages custom domain check has not completed yet.

### HTTPS / certificate error

- DNS is not fully propagated or still points to wrong servers.
- Wait for DNS TTL to expire (GoDaddy default is 30 minutes; apex A records may be 10 minutes).
- Re-save the custom domain in GitHub Pages settings to force certificate re-issue.

### Styling or assets broken

- Check that `basePath` and `assetPrefix` are removed from `next.config.ts`.
- Check that `NEXT_PUBLIC_BASE_PATH` is not set in the GitHub Actions build step.
