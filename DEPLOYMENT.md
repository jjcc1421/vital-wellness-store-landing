# VIT-83 upload manifest and rollback

## Upload as a unit

- `index.html`
- `productos/renovix/index.html`
- `productos/bioconex/index.html`
- `assets/products.js`
- `assets/catalog-render.js`
- `assets/tracking.js`
- `assets/store.css`
- `assets/bioconex.webp`
- `assets/renovix.webp`
- `sitemap.xml`

`robots.txt` is unchanged and retains its sitemap directive.

## Rollback

Before upload, copy the currently deployed `/index.html` and `/sitemap.xml` from the host to a dated rollback folder. If the release must be reverted, restore those two files and remove the new `/productos/` and `/assets/` files listed above. This is a two-way-door static release: no data migration or service configuration changes are involved.

## Post-upload verification (board)

1. Open `/`, `/productos/renovix/`, and `/productos/bioconex/` on `https://vitalwstore.com`.
2. Confirm each WhatsApp button opens its product-specific prefilled message.
3. Confirm no Bioconex page shows an INVIMA number, `{INVIMA}`, `{PRECIO}`, or an Offer price.
4. Use GA4 DebugView/Meta Test Events for `view_item_list`, `view_item`, `ViewContent`, and WhatsApp `Lead`; then run the public product URLs through Rich Results Test.

No deployment has been made by the CTO; the board owns the host upload and validation.
