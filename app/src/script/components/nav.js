let btn = document.querySelector('.header__burger'),
    btnMenu = document.querySelector('.header__nav-list');

btn.addEventListener('click', () => {
    btnMenu.classList.toggle('active');
    btn.classList.toggle('active');
})