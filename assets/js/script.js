// Effet d'apparition progressif
gsap.from(".hero-content h1", {
  duration: 1.2,
  y: 50,
  opacity: 0,
  ease: "power3.out"
});

// Effet sur le bouton CTA
document.querySelector('.cta-button').addEventListener('mousemove', (e) => {
  const x = e.layerX;
  const y = e.layerY;
  e.target.style.setProperty('--x', `${x}px`);
  e.target.style.setProperty('--y', `${y}px`);
});
