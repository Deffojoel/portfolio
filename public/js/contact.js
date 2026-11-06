// Envoi du formulaire sans rechargement. Sans JavaScript, le formulaire fonctionne quand même.
(() => {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form || !status) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    status.textContent = 'Envoi en cours';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      status.textContent = 'Message envoyé. Je vous réponds dès que possible.';
    } catch {
      status.textContent = 'L’envoi a échoué. Écrivez-moi directement à l’adresse indiquée sur cette page.';
    } finally {
      button.disabled = false;
    }
  });
})();
