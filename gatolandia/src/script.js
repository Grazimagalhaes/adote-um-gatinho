ScrollReveal().reveal('.gato', {
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  easing: 'ease-in-out',
  reset: true
});

document.querySelectorAll(".gato button").forEach(button => {
  button.addEventListener("click", () => {
    alert("Obrigado por querer adotar! Entraremos em contato em breve 🐾");
  });
});
