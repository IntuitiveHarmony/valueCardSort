import { cards } from "./cardData.js";

// ~~~~~~~~~~
// Variables
// ~~~~~~~~~~
let cardCount = cards.length; // Initially set to the array length but then incremented later
let currentIndex = 0;
let shuffledCards;
let notImportantCards = [];
let somewhatImportantCards = [];
let importantCards = [];
let veryImportantCards = [];
let skippedCards = [];

// ~~~~~~~~~~~~
// DOM Elements
// ~~~~~~~~~~~~
// Card Stuff
const cardElement = $(".card");
const cardsCountElement = $("#cards-count");
const cardContainerElement = $(".card-container");
const cardHeaderElement = $("#card-header");
const cardDescriptionElement = $("#card-description");
// Buttons
const allImportantButtonElements = $(".important-button-class");
const startButtonElement = $("#start-button");
const importantButtonElement = $("#important-button");
const veryImportantButtonElement = $("#very-important-button");
const notImportantButtonElement = $("#not-important-button");
const somewhatImportantButtonElement = $("#somewhat-important-button");
const skipButtonElement = $("#skip-button");

// ~~~~~~~~~
// Functions
// ~~~~~~~~~
// Randomize cards array
const shuffleCards = () => {
  shuffledCards = cards.sort(() => Math.random() - 0.5);
};
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const handleStartButton = () => {
  showCardContainer();
  displayCard();
  startButtonElement.addClass("hidden");
};
const showCardContainer = () => {
  cardContainerElement.removeClass("hidden");
};
const displayCard = () => {
  if (shuffledCards.length > 0) {
    cardHeaderElement.text(shuffledCards[currentIndex].value);
    cardDescriptionElement.text(shuffledCards[currentIndex].description);
  } else {
    cardElement.empty();
    console.log("No more cards");
  }
  updateCardsRemainingDOM();
};
function handleEveryImportantButton() {
  let button = $(this).attr("id"); // get which button was pressed
  let currentCard = shuffledCards.splice(currentIndex, 1)[0]; // Remove the current card from cards deck
  // Sort the card based on which button was pressed
  if (button === "important-button") {
    importantCards.push(currentCard);
    console.log("Important button pressed");
  } else if (button === "very-important-button") {
    veryImportantCards.push(currentCard);
    console.log("Very Important button pressed");
  } else if (button === "somewhat-important-button") {
    somewhatImportantCards.push(currentCard);
    console.log("Somewhat Important button pressed");
  } else if (button === "not-important-button") {
    notImportantCards.push(currentCard);
    console.log("Not Important button pressed");
  }
  console.log("Shuffled array: ", shuffledCards);
  console.log("Important array: ", importantCards);
  console.log("Very Important array: ", veryImportantCards);
  console.log("Somewhat Important array: ", somewhatImportantCards);
  console.log("Not Important array: ", notImportantCards);
  displayCard(); // Update card in the DOM
}
const handleSkipButton = () => {
  let skippedCard = shuffledCards.shift(); // Take the card from the front of array
  shuffledCards.push(skippedCard); // Move card to the back of array
  displayCard();
};
const updateCardsRemainingDOM = () => {
  cardsCountElement.text(`${shuffledCards.length}`);
};
// ~~~~~~~~~~~~~~~~~~~
// Button Click Events
// ~~~~~~~~~~~~~~~~~~~
// Listener for all the important choice buttons
allImportantButtonElements.each((index, button) => {
  $(button).click(handleEveryImportantButton);
});

startButtonElement.click(handleStartButton);
skipButtonElement.click(handleSkipButton);

// Do this stuff once the DOM is done loading for the first time
$(() => {
  shuffleCards();
  displayCard(); // Show initial cards remaining
});
