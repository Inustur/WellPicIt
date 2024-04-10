//Datamuse API for random word-generation
document.addEventListener('DOMContentLoaded', async function() {
  const bottomBar = document.querySelector('.bottom-bar .word-container');

  // Fetch random words from the Datamuse API
  const response = await fetch('https://api.datamuse.com/words?random=true&max=6');
  const words = await response.json();

  // Extract words from the API response
  const wordList = words.map(word => word.word);

  // Create draggable elements for each word
  wordList.forEach(word => {
    const wordElement = document.createElement('div');
    wordElement.textContent = word;
    bottomBar.appendChild(wordElement);

    // Make the word elements draggable
    Draggable.create(wordElement, {
      type: 'x,y',
      edgeResistance: 0.65,
      bounds: '.bottom-bar',
    });
  });
});
