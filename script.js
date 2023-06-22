const denunciaButtons = document.querySelectorAll('.denuncia-button');
denunciaButtons.forEach(button => {
  button.addEventListener('click', () => {    
    denunciaButtons.forEach(btn => btn.classList.remove('selected'));    
    button.classList.add('selected');
  });
});
