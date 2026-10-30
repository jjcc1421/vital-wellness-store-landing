/* Single source of truth for static product pages. Keep unapproved fields null. */
window.VWS_PRODUCTS = {
  renovix: {
    id: 'renovix', name: 'Renovix', sku: 'VWS-RENOVIX-60', availability: 'https://schema.org/InStock',
    url: '/productos/renovix/', image: 'https://naturalcompany.com.co/wp-content/uploads/2026/05/Renovix-min.webp',
    whatsapp: 'https://wa.me/message/TISID3LU4Z32G1', message: 'Hola, quiero información sobre Renovix.'
  },
  bioconex: {
    id: 'bioconex', name: 'Bioconex', sku: 'VWS-BIOCONEX-60', availability: 'https://schema.org/PreOrder',
    url: '/productos/bioconex/', image: '/assets/bioconex.webp', invima: null, priceCop: null,
    whatsapp: 'https://wa.me/573132178128?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20Bioconex.', message: 'Hola, quiero información sobre Bioconex.'
  }
};
