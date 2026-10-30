(function () {
  var products = window.VWS_PRODUCTS || {};
  function ga(name, data) { if (typeof window.gtag === 'function') window.gtag('event', name, data); }
  function meta(name, data) { if (typeof window.fbq === 'function') window.fbq('track', name, data); }
  function item(product) { return { item_id: product.sku, item_name: product.name, quantity: 1 }; }
  function pageProduct() { return document.body.dataset.product && products[document.body.dataset.product]; }
  var product = pageProduct();
  if (product) { ga('view_item', { currency: 'COP', items: [item(product)] }); meta('ViewContent', { content_ids: [product.id], content_name: product.name, content_type: 'product' }); }
  else { var items = Object.keys(products).map(function (id) { return item(products[id]); }); ga('view_item_list', { item_list_name: 'Catálogo Vital Wellness Store', items: items }); }
  document.addEventListener('click', function (event) { var link = event.target.closest('[data-whatsapp-product]'); if (!link) return; var p = products[link.dataset.whatsappProduct]; if (!p) return; ga('whatsapp_click', { event_category: 'conversion', event_label: p.id, items: [item(p)] }); meta('Lead', { content_ids: [p.id], content_name: p.name, content_type: 'product' }); });
}());
