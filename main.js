const header = document.querySelector('header');
const welcomeSection = document.getElementById('welcome-section');

function displayHeader() {
  if (window.scrollY > 130) {
    header.style.display = 'flex';
    header.style.boxShadow = '0 1px 4px 0px var(--text-primary)';
    welcomeSection.style.height = '75vh';
    welcomeSection.style.animation = 'welcome-collapse 2s';
  } else {
    header.style.display = 'none';
    header.style.boxShadow = '';
    welcomeSection.style.animation = 'welcome-expand 3s';
    welcomeSection.style.height = '100vh';
  }
  
}

window.addEventListener('scroll', () => {
  displayHeader();
})

