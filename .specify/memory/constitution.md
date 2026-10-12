# hussaibi.github.io Constitution

## Core Principles

### I. Static-Only, GitHub Pages-Native
The site MUST be a static build (Vite) served by GitHub Pages from the domain root (`base: '/'`).
There MUST be no server, serverless function, or runtime backend. Any dynamic behaviour MUST run
in the browser against static assets or a third-party service chosen in a spec's plan.

GitHub Pages has no SPA fallback. Every public route (for example `/projects/` or
`/blog/<slug>/`) MUST be emitted as a real HTML file at build time, through prerendering/SSG
(for example the `prerender` option of `@preact/preset-vite`) or a deliberate, documented
`404.html` strategy. A deep link opened cold in a new tab MUST render its content.

### II. Preact + TypeScript, Minimal Dependencies
The UI MUST be written in Preact with TypeScript `strict` enabled; `any` and `@ts-ignore` require
a written justification at the use site. Every new runtime dependency MUST be justified in the
`plan.md` of the feature that introduces it (what it replaces, its size, its maintenance state).
Prefer the platform and existing dependencies over adding new ones.

### III. Accessible and Responsive by Default
Pages MUST use semantic HTML, meet WCAG 2.2 AA (contrast, focus visibility, labels, alt text),
and be fully operable by keyboard. Layouts MUST work from 320px wide upward without horizontal
scrolling, and MUST respect `prefers-color-scheme` and `prefers-reduced-motion`.

### IV. Content as Data
Portfolio projects and blog posts MUST live as versioned files in the repository (Markdown with
front matter, or JSON), validated by type or schema at build time. Content MUST NOT be
hard-coded inside components. Adding a post or project MUST NOT require editing component code.

### V. Performance Budget
Pages MUST be fast on a mid-range phone over a slow connection. Each feature spec MUST state the
JavaScript budget it fits within. Content pages SHOULD ship as prerendered HTML with minimal
hydration, and images MUST be sized, compressed, and lazy-loaded below the fold. A change that
materially grows the initial JS payload MUST be called out in its plan.

## Product Scope and Constraints

The site has three areas: a **personal homepage**, a **portfolio/projects showcase**, and a
**blog**. Every spec MUST fit that scope or amend it here first.

The initial scaffold (placeholder page, Vite/TypeScript/Preact setup, CI, and Pages deployment)
is baseline infrastructure and is exempt from the spec-driven workflow. Every user-facing
feature added after it MUST go through the workflow below.

Secrets, analytics keys, and personal data not intended to be public MUST NOT be committed;
everything in the repository is published.

## Development Workflow and Quality Gates

Every feature MUST follow spec-driven development: `/speckit-specify` → `/speckit-plan` →
`/speckit-tasks` → `/speckit-implement`, with `/speckit-clarify` and `/speckit-analyze` used when
a spec is ambiguous or artifacts may disagree. Code MUST trace back to a task, and tasks to a
spec requirement.

`npm run build` (which includes the TypeScript type-check) MUST pass in CI on every pull request
and before every deployment. Deployment to GitHub Pages MUST happen only from `main` via the
GitHub Actions workflow. A test runner and linter MUST be selected in the plan of the first
feature that adds logic worth testing; once adopted, they join the CI gate.

## Governance

This constitution supersedes other project practices. Amendments MUST be made through
`/speckit-constitution`, include a rationale, and bump the version: MAJOR for removed or
redefined principles, MINOR for added principles or materially expanded guidance, PATCH for
clarifications. Every plan MUST include a check against these principles, and any deviation MUST
be recorded with its justification in the plan's complexity/deviation section. Reviews of pull
requests MUST verify compliance.

**Version**: 1.0.0 | **Ratified**: 2026-10-12 | **Last Amended**: 2026-10-12
