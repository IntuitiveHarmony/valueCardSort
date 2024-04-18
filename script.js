import { cards } from "./cardData.js";

// ~~~~~~~~~~
// Variables
// ~~~~~~~~~~
let cardCount = cards.length; // Initially set to the array length but then incremented later
let currentIndex = 0;
let shuffledCards;
let currentCard;
let notImportantCards = [];
let somewhatImportantCards = [];
let importantCards = [];
let veryImportantCards = [];
let skippedCards = [];

// ~~~~~~~~~~~~
// DOM Elements
// ~~~~~~~~~~~~
// Card Stuff
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
  }
  updateCardsRemainingDOM();
};
const handleEveryImportantButton = () => {
  currentCard = shuffledCards[currentIndex];
  console.log("This is the every button function:", currentCard);
};
const handleImportantButton = () => {
  // console.log(importantCards);
  // console.log(shuffledCards);
  console.log("handleImportantButton!", currentCard);
};
const handleVeryImportantButton = () => {
  console.log("handleVeryImportantButton!");
};
const handleNotImportantButton = () => {
  console.log("handleNotImportantButton!");
};
const handleSomewhatImportantButton = () => {
  console.log("handleSomewhatImportantButton!");
};
const handleSkipButton = () => {
  let skippedCard = shuffledCards.shift();
  shuffledCards.push(skippedCard);
  displayCard();
  console.log("handleSkipButton!");
};
const updateCardsRemainingDOM = () => {
  cardsCountElement.text(`${shuffledCards.length}`);
};
// ~~~~~~~~~~~~~~~~~~~
// Button Click Events
// ~~~~~~~~~~~~~~~~~~~
// Listener for all the important buttons
allImportantButtonElements.each((index, button) => {
  $(button).click(handleEveryImportantButton);
});

startButtonElement.click(handleStartButton);
importantButtonElement.click(handleImportantButton);
notImportantButtonElement.click(handleNotImportantButton);
veryImportantButtonElement.click(handleVeryImportantButton);
somewhatImportantButtonElement.click(handleSomewhatImportantButton);
skipButtonElement.click(handleSkipButton);

// Do this stuff once the DOM is done loading for the first time
$(() => {
  shuffleCards();
  displayCard(); // Show initial cards remaining
});
