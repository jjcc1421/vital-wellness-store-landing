(function () {
  var products = window.VWS_PRODUCTS || {}, target = document.querySelector('[data-product-catalog]');
  if (!target) return;
  function whatsappUrl(source) { var link = new URL(source); new URLSearchParams(location.search).forEach(function(value, key) { if (key.indexOf('utm_') === 0) link.searchParams.set(key, value); }); return link.toString(); }
  target.innerHTML = Object.keys(products).map(function(id) { var p = products[id], bio = id === 'bioconex'; return '<article class="card"><img src="'+p.image+'" alt="Frasco de '+p.name+'" loading="'+(bio?'lazy':'eager')+'"><span class="badge">'+(bio?'Bajo pedido':'Disponible')+'</span><h2>'+p.name+'</h2><p>'+ (bio ? 'Melena de león, magnesio, zinc y vitaminas en 2 comprimidos al día.' : 'Suplemento alimentario con resveratrol, quinua y vitaminas esenciales.') +'</p><a class="button" href="'+p.url+'">Ver producto</a><a class="button green" data-whatsapp-product="'+p.id+'" href="'+whatsappUrl(p.whatsapp)+'" target="_blank" rel="noopener">Pedir por WhatsApp</a></article>'; }).join('');
}());
