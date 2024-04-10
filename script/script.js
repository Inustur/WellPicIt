//Closing function for loading
document.addEventListener('DOMContentLoaded', function() {
  const closeButton = document.getElementById('close-btn');
  const loadingGuide = document.querySelector('.loading-guide');

  closeButton.addEventListener('click', function() {
    loadingGuide.style.display = 'none';
  });
});

//GSAP animation for loading page
document.addEventListener('DOMContentLoaded', function() {
  const loadingGuide = document.querySelector('.loading-guide');

  gsap.fromTo(loadingGuide, {
    opacity: 0.5,
    y: '-50%'
  }, {
    opacity: 1,
    y: '0%',
    duration: 1.5,
    ease: 'power4.out'
  });
});