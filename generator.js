// Code that generates the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();

// Constructor function that creates an object with the sentences property
function GenerateNewText() {
  // Add property to the object
  this.sentences =
    [
      "It does not do to leave a live dragon out of your calculations, if you live near him.",
      "May the wind under your wings bear you where the sun sails and the moon walks.",
      "Where there's life there's hope.",
      "So comes snow after fire, and even dragons have their endings.",
      '“Good Morning!" said Bilbo, and he meant it. ',
      '"What do you mean?" he said.',
      '"You have nice manners for a thief and a liar," said the dragon."',
      '"May the hair on your toes never fall out!"',
      'A box without hinges, key, or lid, Yet golden treasure inside is hid.',
      'A safe fairyland is untrue to all worlds.',
      'There is nothing like looking, if you want to find something.',
      'Trolls simply detest the very sight of dwarves (uncooked).',
      '"Escaping goblins to be caught by wolves!" he said.',
      'Is it nice, my preciousss?',
      'Is it juicy?',
      'Is it scrumptiously crunchable?',
   ];
}

// Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
	return randomSentence;
}

// Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function() {
  let paragraph = "";
  // Set the minimum number of words
  let minimumCharacterLength = 250;
  let firstSentence = true;
  while (paragraph.length < minimumCharacterLength) {
    if (firstSentence) {
      paragraph = paragraph.concat(this.getRandomSentence());
      firstSentence = false;
    } else {
      paragraph = paragraph.concat(" " + this.getRandomSentence());
    }
  }
  return paragraph;
}

// Method to the GenerateNewText constructor function that gerates multiple paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];
  // Generate the number of paragraphs as specified by the user
  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph());
  }
  // Convert array into HTML string
  let paragraphHTML = "";
  allParagraphs.forEach(function (paragraph) {
    paragraphHTML += "<p>" + paragraph + "</p>";
  });
  return paragraphHTML;
}

module.exports = loremIpsum;