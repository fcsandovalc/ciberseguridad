const botones = document.querySelectorAll('.boton');

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    alert(`Clic en ${boton.textContent}`);
  });
});