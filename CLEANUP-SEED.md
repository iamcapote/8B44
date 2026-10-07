# Seed cleanup

When applying this package to the existing `iamcapote/8B44` seed, remove:

- `_site/`
- `research/`
- `_layouts/research.html`
- `_includes/sidebar.html`
- `_includes/toc.html`
- `_includes/visualization.html`
- `assets/css/additional-styles.css`
- `assets/css/style.scss`
- `assets/css/visualization.css`
- `assets/js/bitcore-visualization.js`
- `assets/js/interactive-home.js`
- `assets/js/main.js`

Keep the existing `Gemfile`, `Gemfile.lock`, and Pages workflow initially. After the first successful Pages build, the deployment workflow can be simplified separately if desired.
