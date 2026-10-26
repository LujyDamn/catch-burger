# Catch Burger / كاتش برجر

Arabic-first restaurant menu with an English option. Visitors browse dishes, sizes, prices and confirmed ingredient details, then contact the restaurant through WhatsApp.

## Run locally

Serve this directory with a static HTTP server. No build step or package installation is required.

## Live website

https://lujydamn.github.io/catch-burger/

GitHub Pages publishes the root of the `main` branch. Pushes to `main` update the site; `.nojekyll` keeps the static files intact.

## Features

- Original Catch cheeseburger and storefront photographs, displayed without image animation.
- Four menu categories with readable prices and labelled small/large sizes.
- Read-only dish details with confirmed ingredients.
- Arabic by default, with a saved English language preference.
- Category transitions, text reveals and detail-panel animation that respect reduced motion.
- WhatsApp contact link to +966 50 886 8265, with a localized greeting. The customer sends the message in WhatsApp.

There is no bag, checkout, quantity selection, payment form or on-site order submission.

## Editing

- `index.html`: page structure and initial Arabic content.
- `style.css`: responsive layout and restrained motion.
- `app.js`: bilingual copy, menu prices, details and WhatsApp link.
- Prices are in SAR. Main dishes have two sizes, not meal/burger-only prices.
- Confirm full recipes with the restaurant before extending ingredient lists.
- Fonts load from Google Fonts, with system fallbacks.

See [ASSETS.md](ASSETS.md) for image provenance.
