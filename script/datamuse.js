document.addEventListener('DOMContentLoaded', function() {
  const bottomBar = document.querySelector('.bottom-bar .word-container');

  // List of all words
  const allWords = [
    'cry', 'weird', 'nincompoop', 'laugh', 'a duck', 'pineapple', 'grape',
    'carrot', 'broccoli', 'cucumber', 'tomato', 'potato', 'spinach', 'lettuce'
  ];

  // Shuffle the array of words
  shuffle(allWords);

  // Select the first 6 words from the shuffled array
  const selectedWords = allWords.slice(0, 6);

  // Create draggable elements for each selected word
  selectedWords.forEach(word => {
    const wordElement = document.createElement('div');
    wordElement.textContent = word;
    bottomBar.appendChild(wordElement);

    // Make the word elements draggable
    Draggable.create(wordElement, {
      type: 'x,y',
      edgeResistance: 0.65,
      bounds: 'body', // Set bounds to the entire body
    });
  });
});

// Function to shuffle an array (Fisher-Yates algorithm)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
