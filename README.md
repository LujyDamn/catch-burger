# Catch Burger / كاتش برجر

Arabic-first restaurant website with an English language option, a photographic burger animation, menu categories, ingredient details, and a persistent shopping bag.

## Interactions

- The burger separates automatically and responds to pointer movement, taps and keyboard activation.
- Menu categories transition between products. On desktop, food cards tilt toward the pointer.
- Adding an item animates its thumbnail into the bag before showing the updated order.
- Reduced-motion preferences disable decorative movement.

## Run locally

Serve this directory with any static HTTP server, then open its local URL. There is no build step and no package installation is required.

## Publish on GitHub Pages

1. Open this repository on GitHub.
2. Select **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Set **Branch** to **main** and **Folder** to **/(root)**.
5. Click **Save**.
6. Wait for the Pages deployment to complete, then click **Visit site** on the Pages settings page.

Expected project-site address after Pages is enabled:
https://lujydamn.github.io/catch-burger/

The root-level `index.html` and relative asset paths support this project URL. The `.nojekyll` file tells Pages to publish the static files directly.

Official instructions:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Project files

- `index.html`: page layout and initial Arabic content.
- `style.css`: responsive styles and page transitions.
- `app.js`: menu, Arabic/English text, ingredient details, product options, bag and preview checkout.
- `hero.js`: the opening and repeating photographic burger-layer animation.
- `assets/menu/`: individual menu pictures.
- `assets/hero/`: ingredient cutouts used by the animation.
- `assets/logo.png` and `assets/catch-exterior.png`: supplied restaurant branding and photography.

## Editing

Edit menu names, prices and bilingual text in `app.js`. Prices are in SAR. Make visual changes in `style.css`. Once Pages is enabled, pushes to `main` update the site.

## Current limits

- Checkout is a demonstration: no payments are collected and no orders are sent.
- Bag contents and the chosen language are saved in each visitor's browser.
- Main-dish ingredient notes contain only details confirmed by the supplied menu or original restaurant photograph. Complete recipes remain to be confirmed.
- Some food images are AI-generated illustrations, not verified restaurant product photos.
- Google Fonts are loaded externally; system fallback fonts are provided.
- A static GitHub Pages site needs a separate service or backend for real payments, orders and other server-side features.

See [ASSETS.md](ASSETS.md) for asset provenance.
