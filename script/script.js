document.addEventListener('DOMContentLoaded', function() {
  const closeButton = document.getElementById('close-btn');
  const loadingGuide = document.querySelector('.loading-guide');

  closeButton.addEventListener('click', function() {
    loadingGuide.style.display = 'none';
  });
});