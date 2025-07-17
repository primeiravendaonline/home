// Impede clique com o botão direito
document.addEventListener('contextmenu', event => event.preventDefault());

// Impede seleção de texto
document.addEventListener('selectstart', event => event.preventDefault());
document.addEventListener('copy', event => event.preventDefault());

// Impede arrastar imagens
document.querySelectorAll('img').forEach(img => {
  img.setAttribute('draggable', 'false');
  img.addEventListener('mousedown', e => e.preventDefault());
});