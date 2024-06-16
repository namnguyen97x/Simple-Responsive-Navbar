document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  const btnClose = document.querySelector('.btnClose');

  burger.addEventListener('click', () => {
  burger.classList.toggle('hiden');
      navLinks.classList.toggle('active');
      btnClose.classList.toggle('active');
  });

  btnClose.addEventListener('click', () => {
      navLinks.classList.remove('active');
      btnClose.classList.remove('active');
      burger.classList.remove('hiden');
  });
});