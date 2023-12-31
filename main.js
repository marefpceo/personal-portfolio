const header = document.querySelector('header');
const welcomeSection = document.getElementById('welcome-section');
const greeting = document.getElementById('greeting');
const displayName = document.getElementById('name');
const jobTitle = document.getElementById('job-title');
const mainPhoto = document.getElementById('main-photo');
const scrollDown = document.getElementById('scroll-down');

function displayHeader() {
  if (window.scrollY > 35) {
    header.style.opacity = 1;
    welcomeSection.style.height = '75vh';
    scrollDown.style.opacity = 0;
    scrollDown.style.transition = 'opacity 1s ease';
  } else {
    header.style.opacity = 0;
    welcomeSection.style.height = '100vh';
    scrollDown.style.opacity = 1;
    scrollDown.style.transition = 'opacity 1s ease';
  }
}

function welcomeTitleLoad() {
  greeting.style.transform = 'translate(0%, 0%)';
  greeting.style.opacity = 1;
  greeting.style.transition = 'opacity 4s ease-out, transform 4s ease-out';
  displayName.style.transform = 'scale(1) translate(0%, 0%)';
  displayName.style.opacity = 1;
  displayName.style.transition = 'opacity 6s ease-out, transform 6s ease-out';
  jobTitle.style.transform = 'translate(0%, 0%)';
  jobTitle.style.opacity = 1;
  jobTitle.style.transition = 'opacity 5s ease-out, transform 5s ease-out';  
  mainPhoto.style.opacity = 1;
  mainPhoto.style.transition = 'opacity 4s ease 4s';
  scrollDown.style.opacity = 1;
  scrollDown.style.transition = 'opacity 1s ease 5s';
}

window.addEventListener('load', () => {
  welcomeTitleLoad();
});

window.addEventListener('scroll', () => {
  displayHeader();
});







  
