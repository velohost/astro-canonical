# astro-canonical

Strict canonical URL enforcement for Astro projects.

`astro-canonical` validates every generated HTML page at build time to ensure:

- A canonical tag exists
- Canonical URLs are absolute
- Canonical URLs match your configured `site`
- Canonical URLs respect your `trailingSlash` policy
- Builds fail immediately if violations are found

This prevents silent SEO errors and guarantees canonical consistency across large sites.

---

## Features

- Zero runtime cost (build-time only)
- Reads your existing `astro.config.mjs`
- Enforces absolute canonical URLs
- Enforces trailing slash rules
- Ignores `404.html` automatically
- Fails builds on invalid canonicals
- Works with static and hybrid output

---

## Installation

```bash
npm install astro-canonical
```

---

## Usage

Add the integration to your `astro.config.mjs`:

```ts
import { defineConfig } from "astro/config";
import astroCanonical from "astro-canonical";

export default defineConfig({
  site: "https://example.com/",
  trailingSlash: "always",
  integrations: [astroCanonical()],
});
```

---

## Trailing slash behaviour

`astro-canonical` reads your Astro configuration and enforces canonical URLs to match it exactly.

### `trailingSlash: "always"`

All canonical URLs must end with a trailing slash:

```html
<link rel="canonical" href="https://example.com/about/" />
```

If a canonical URL is missing the trailing slash, the build will fail.

---

### `trailingSlash: "never"`

All canonical URLs must **not** end with a trailing slash:

```html
<link rel="canonical" href="https://example.com/about" />
```

If a canonical URL includes a trailing slash, the build will fail.

---

### No `trailingSlash` configured

If `trailingSlash` is not set in `astro.config.mjs`, `astro-canonical` will:

- Require a canonical tag
- Require an absolute URL
- Require the URL to start with `site`
- **Not** enforce trailing slash rules

---

## Validation rules

For each generated HTML file (excluding 404 pages):

- A `<link rel="canonical">` tag must exist
- The `href` must be absolute
- The URL must start with the configured `site`
- Trailing slash rules must be respected (if configured)

If any page fails validation, the build fails.

---

## Example output

```text
[astro-canonical] summary
[astro-canonical] site: https://example.com/
[astro-canonical] trailingSlash: always
[astro-canonical] HTML files scanned: 42
[astro-canonical] pages with canonical: 41
[astro-canonical] pages with invalid canonical: 1

[astro-canonical] invalid canonicals found:

• /about/index.html
  canonical: https://example.com/about
  issues: missing trailing slash
```

---

## Why this exists

Canonical URLs are easy to get wrong at scale:

- Mixed trailing slash usage
- Relative canonicals
- Incorrect domains
- Copy-paste mistakes
- CMS overrides

These issues are often invisible until SEO damage is done.

`astro-canonical` makes canonical correctness **non-optional**.

---

## License

MIT
