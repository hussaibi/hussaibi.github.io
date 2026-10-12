# hussaibi.github.io

Personal homepage, portfolio/projects showcase, and blog. Built with [Vite](https://vite.dev),
[Preact](https://preactjs.com), and TypeScript, deployed to GitHub Pages, and developed with
spec-driven development using [GitHub Spec Kit](https://github.com/github/spec-kit).

> The site is currently a placeholder. Features are added through the Spec Kit workflow below.

## Local development

Requires Node `^20.19.0 || >=22.12.0` (`.nvmrc` pins 22).

```bash
npm install
npm run dev      # dev server with HMR
npm run build    # type-check (tsc -b) + production bundle in dist/
npm run preview  # serve the production build locally
```

## Deployment

`.github/workflows/deploy.yml` builds on every push and pull request to `main`, and deploys to
GitHub Pages only from `main` (or a manual run).

**One-time setup:** in the repository go to *Settings → Pages → Build and deployment → Source* and
choose **GitHub Actions**. The workflow cannot enable this itself, and the deploy job fails until
it is set. This replaces any branch-based Pages source.

This is a user site (`hussaibi.github.io`), so it is served from `/` and Vite's `base` is `/`.
GitHub Pages has no SPA fallback, so future routes such as `/blog/<slug>/` must be prerendered to
real HTML files (see the constitution).

## Spec-driven development (Spec Kit)

Spec Kit 1.1.3 is set up for Claude Code. Its skills live in `.claude/skills/`, and its templates
and scripts in `.specify/`, all committed. The project's principles are in
[`.specify/memory/constitution.md`](.specify/memory/constitution.md).

Run these in a Claude Code session in this repo, one at a time, reviewing each result:

| Step | Skill | Output |
|---|---|---|
| 1 | `/speckit-specify <what and why>` | `specs/NNN-name/spec.md` |
| 2 | `/speckit-clarify` (optional) | resolves ambiguities in the spec |
| 3 | `/speckit-plan <tech choices>` | `plan.md`, `research.md`, … |
| 4 | `/speckit-tasks` | `tasks.md` |
| 5 | `/speckit-analyze` (optional) | cross-artifact consistency report |
| 6 | `/speckit-implement` | code, following the tasks |

Suggested first specs, in order:

1. **Homepage and layout shell**: navigation, theme, about section.
2. **Projects showcase**: projects as data files, list and detail pages.
3. **Blog**: Markdown posts with front matter, prerendered per-post pages, index.

To change the constitution, use `/speckit-constitution`.

### Notes

- **The active feature is not tied to the git branch.** `/speckit-specify` writes the feature
  directory to `.specify/feature.json`, which is gitignored (per-checkout state). In a fresh
  checkout or cloud session, point the later skills at your feature first:
  `export SPECIFY_FEATURE_DIRECTORY=specs/001-your-feature`. Working on a `claude/...` or any
  other branch name is fine.
- **The `specify` CLI is only needed to initialize or upgrade Spec Kit**
  (`uv tool install specify-cli`). Day-to-day, the skills run the committed `.specify/scripts`.
- Git branch creation per feature is not part of core Spec Kit; it comes only from the optional
  git extension, which is not installed.
