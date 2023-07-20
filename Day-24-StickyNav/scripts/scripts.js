const body = document.querySelector('body');
const nav = document.querySelector('#main');
const navTopOffset = nav.offsetTop;
const navHeight = nav.offsetHeight;

function fixedNav() {
  if (window.scrollY >= navTopOffset) {
    body.style.paddingTop = `${navHeight}px`;
    body.classList.add('fixed-nav');
  } else {
    body.style.paddingTop = '0px';
    body.classList.remove('fixed-nav');
  }
}


window.addEventListener('scroll', fixedNav);