window.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const menuItems = document.querySelectorAll('.nav-menu__item');
  const body = document.querySelector('body');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--active');
    navMenu.classList.toggle('nav-menu--active');
    body.classList.toggle('hidden');
  });

  //  или так с навешиванием обработчика на каждый пункт меню
  // menuItems.forEach(el => {
  //   el.addEventListener('click', () => {
  //     hamburger.classList.toggle('hamburger--active');
  //     navMenu.classList.toggle('nav-menu--active');
  //     body.classList.toggle('hidden');
  //   });
  // });

  // или так с делегированием событий и методом closest()
  navMenu.addEventListener('click', (e) => {
    let item = e.target.closest('.nav-menu__item');
    if (item) {
      hamburger.classList.toggle('hamburger--active');
      navMenu.classList.toggle('nav-menu--active');
      body.classList.toggle('hidden');
    }
  });
});
