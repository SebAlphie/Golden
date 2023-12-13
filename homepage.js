document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.getElementById('menu');
    var navMenu = document.querySelector('header .nav-menu');
  
    menuButton.addEventListener('click', function () {
      navMenu.classList.toggle('responsive');
    });
  
    // Close the responsive menu when a menu item is clicked
    var navLinks = document.querySelectorAll('header .nav-menu a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('responsive');
      });
    });
  });
  