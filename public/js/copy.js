// Bouton « Copier » : amélioration facultative, le lien email fonctionne sans JavaScript.
(() => {
  document.querySelectorAll('[data-copy]').forEach((button) => {
    if (!navigator.clipboard) return;
    button.hidden = false;
    const label = button.querySelector('[data-copy-label]');
    const initial = label.textContent;
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(button.dataset.copy);
        label.textContent = 'Copié';
      } catch {
        label.textContent = 'Échec';
      }
      setTimeout(() => { label.textContent = initial; }, 1800);
    });
  });
})();
