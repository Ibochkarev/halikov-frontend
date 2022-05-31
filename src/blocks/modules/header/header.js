const
  header = document.querySelector('.header'),
  menuWrapper = document.querySelector('.header__info'),
  btnMenu = document.querySelector('.header__toggle');

btnMenu.addEventListener('click', evt => {
  // header.classList.toggle('_active');
  btnMenu.classList.toggle('_active');
  menuWrapper.classList.toggle('_active');
})