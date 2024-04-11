document.addEventListener('DOMContentLoaded', function () {
  const images = [
    '../img/tub.png',
    '../img/tub2.png',
    '../img/duck.png',
    '../img/paper.png',
    '../img/shampoo.png',
    '../img/soap.png',
    '../img/sponge.png',
    '../img/toilet.png',
    '../img/towel.png',
    '../img/toothbrush.png',
    '../img/sparkle1.png',
    '../img/sparkle2.png',
    '../img/squares.png',
    '../img/leaf1.png',
    '../img/leaf2.png',
  ];

  function getRandomImages(imgArray, num) {
    const shuffled = imgArray.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  function displayImages() {
    const container = document.querySelector('.image-container');
    const selectedImages = getRandomImages(images, 4);
    selectedImages.forEach(imgSrc => {
      const imgElement = document.createElement('img');
      imgElement.src = imgSrc;
      imgElement.className = 'draggable';
      container.appendChild(imgElement);
    });

    // Initiate draggable functionality after images are appended
    Draggable.create('.draggable', {
      type: "x,y",
      bounds: "body",
      inertia: true
    });
  }

  displayImages();
});
