const primaryNav = document.querySelector('.primary-nav');
const mobileToggler = document.querySelector('.mobile-nav-toggler');
let visibility = false;

mobileToggler.addEventListener('click', function() {
    visibility = !visibility;

    primaryNav.setAttribute('data-visible', visibility);
    mobileToggler.setAttribute('aria-expanded', visibility);
});