# Contributing to Clowk

Thanks for your interest in improving **Clowk**! Contributions of all sizes are welcome — a single tweaked hex value can make a real difference to readability.

## Getting started

1. Fork and clone the repository.
2. Install dependencies (only needed for packaging/publishing):

   ```bash
   pnpm install
   ```

3. Open the folder in VS Code or Cursor and press `F5` to launch an
   **Extension Development Host** window with the theme loaded
   (configured in [`.vscode/launch.json`](.vscode/launch.json)).
4. In the dev window, open the Command Palette and run
   **Preferences: Color Theme → Clowk** to preview your changes live.

## Making changes

- All colors live in [`themes/clowk-night-color-theme.json`](themes/clowk-night-color-theme.json).
  - `colors` — workbench UI elements.
  - `tokenColors` — TextMate scopes (syntax highlighting).
  - `semanticTokenColors` — language-server-aware highlighting.
- Use the **Developer: Inspect Editor Tokens and Scopes** command to find the
  exact scope you want to target before editing.
- Keep the palette consistent — reuse the existing hex values where possible
  (see the palette table in the [README](README.md)) instead of introducing
  near-duplicate colors.
- Aim for comfortable contrast against the `#0f0e17` editor background.

## Submitting

1. Create a branch: `git checkout -b feat/short-description`.
2. Commit using clear messages (Conventional Commits style is appreciated, e.g.
   `feat: brighten markdown links`).
3. If your change is user-facing, add an entry under `## [Unreleased]` in
   [`CHANGELOG.md`](CHANGELOG.md).
4. Open a pull request with a short description and, ideally, a before/after
   screenshot.

## Reporting issues

Found a scope that looks off, or a UI element with poor contrast? Please
[open an issue](https://github.com/thadeu/clowk-theme/issues) and include:

- The language / file type.
- A screenshot.
- The output of **Developer: Inspect Editor Tokens and Scopes** for the token, if relevant.
