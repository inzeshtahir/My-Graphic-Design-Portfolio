document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navbar-links');
  
    toggle.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
    });
  });
  