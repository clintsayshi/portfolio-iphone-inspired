const navMenu = document.querySelector ('.nav-menu');
const mainMenu = document.querySelector ('.main-menu');
const section = document.querySelectorAll ('section');
const body = document.querySelector ('body');
const links = document.querySelectorAll ('.nav-menu ul li a');

let a = body.webkitMatchesSelector;

mainMenu.addEventListener ('click', () => {
  section.forEach (element => {
    element.classList.toggle ('hide-sections');
  });
  navMenu.classList.toggle ('active');
  body.classList.toggle ('hide-overflow');
});

navMenu.addEventListener ('click', event => {
  links.forEach (link => {
    //console.log(link)
    if (event.target === link) {
      navMenu.getElementsByClassName.animation =
        'pushOutNavMenu 500ms ease-in-out forwards';
      navMenu.classList.toggle ('active');
      section.forEach (element => {
        element.classList.toggle ('hide-sections');
      });
      body.classList.toggle ('hide-overflow');
    }
  });
});
