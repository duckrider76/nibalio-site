
/* script.js - gestisce la transizione della texture in base allo scroll */

(function(){
  const overlay = document.getElementById('bgOverlay');
  if(!overlay) return;

  // fattore = quanto "lento" sarà il comparire: più alto => più lento
  // scelta ragionevole per effetto morbido:
  const SLOWNESS_FACTOR = 1.6; // puoi aumentare a 2.0 per renderlo ancora più lento

  function updateOverlayOpacity(){
    // progress calcolato in funzione della distanza scorsa rispetto ad 1 viewport
    const scrolled = window.scrollY || window.pageYOffset;
    const vh = Math.max(window.innerHeight, 720); // base per i calcoli (evita valori troppo bassi)
    // vogliamo che l'opacità arrivi a 1 dopo ~ (vh * SLOWNESS_FACTOR) pixel
    const progress = scrolled / (vh * SLOWNESS_FACTOR);
    const clamped = Math.min(Math.max(progress, 0), 1);
    overlay.style.opacity = clamped.toFixed(3);
  }

  // Aggiorna al caricamento e su scroll/resize
  window.addEventListener('scroll', updateOverlayOpacity, {passive:true});
  window.addEventListener('resize', updateOverlayOpacity);
  window.addEventListener('load', updateOverlayOpacity);

  // piccolo miglioramento: animazione fluida usando requestAnimationFrame
  let ticking = false;
  window.addEventListener('scroll', function(){
    if(!ticking){
      window.requestAnimationFrame(function(){
        updateOverlayOpacity();
        ticking = false;
      });
      ticking = true;
    }
  }, {passive:true});
})();
