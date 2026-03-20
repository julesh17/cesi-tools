/* Chemin : assets/main.js */

/**
 * Rend les tool-cards cliquables via data-href
 * (permet une meilleure accessibilité qu'une <div> cliquable)
 */
document.querySelectorAll('.tool-card[data-href]').forEach(card => {
  card.addEventListener('click', () => {
    window.open(card.dataset.href, '_blank', 'noopener,noreferrer');
  });

  /* Accessibilité clavier */
  card.setAttribute('role', 'link');
  card.setAttribute('tabindex', '0');
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.open(card.dataset.href, '_blank', 'noopener,noreferrer');
    }
  });
});
