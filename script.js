document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  const btnClose = document.querySelector('.btnClose');
  const caretdowns = document.querySelectorAll('.fa-caret-down');
  const dropdowns = document.querySelectorAll('.dropdown-menu');
  const navbardropdowns = document.querySelectorAll('.navbar--dropdown');

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

  caretdowns.forEach((caretdown, index) => {
    caretdown.addEventListener('click', () => {
      const dropdown = dropdowns[index];
      const navbar = navbardropdowns[index];
      caretdown.classList.toggle('rotate-180');
      if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
        navbar.classList.remove('active');
      } else {
        dropdown.style.display = 'block';
        navbar.classList.add('active');
      }
    });
  });
});