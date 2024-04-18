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
let notImportantCardsInDOM = 0;
let importantCardsInDOM = 0;
let somewhatImportantCardsInDOM = 0;
let veryImportantCardsInDOM = 0;

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
// List Stuff
const notImportantListContainerElement = $(".not-important-card-container");
const veryImportantListContainerElement = $(".very-important-card-container");
const somewhatImportantListContainerElement = $(
  ".somewhat-important-card-container"
);
const importantListContainerElement = $(".important-card-container");
const veryImportantListElement = $(".very-important-card-list");
const notImportantListElement = $(".not-important-card-list");
const somewhatImportantListElement = $(".somewhat-important-card-list");
const importantListElement = $(".important-card-list");

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
const sortCard = (card) => {
  console.log(card);
  let newLi = $(
    `<li>${card.value} <i class="fa-regular fa-pen-to-square hidden"></i></li>`
  );
  // Hover Will show the Edit icon
  newLi.hover(
    // Function to execute when mouse enters the newLi element
    function () {
      // Show the <i> element when hovered over
      $(this).addClass("highlight-text");
      $(this).find("i").removeClass("hidden");
    },
    // Function to execute when mouse leaves the newLi element
    function () {
      // Hide the <i> element when mouse leaves
      $(this).removeClass("highlight-text");
      $(this).find("i").addClass("hidden");
    }
  );
  // Check to see if the amount of cards in the array is has changed and update that list in DOM if so
  if (importantCards.length != importantCardsInDOM) {
    // Show list if above 0
    if (importantCards.length > 0) {
      importantListContainerElement.removeClass("hidden");
    }
    importantListElement.append(newLi); // Add new list item
    importantCardsInDOM = importantCards.length; // update the flag
  }
  if (veryImportantCards.length != veryImportantCardsInDOM) {
    if (veryImportantCards.length > 0) {
      veryImportantListContainerElement.removeClass("hidden");
    }
    veryImportantListElement.append(newLi); // Add new list item
    veryImportantCardsInDOM = veryImportantCards.length; // update the flag
  }
  if (somewhatImportantCards.length != somewhatImportantCardsInDOM) {
    if (somewhatImportantCards.length > 0) {
      somewhatImportantListContainerElement.removeClass("hidden");
    }
    somewhatImportantListElement.append(newLi); // Add new list item
    somewhatImportantCardsInDOM = somewhatImportantCards.length; // update the flag
  }
  if (notImportantCards.length != notImportantCardsInDOM) {
    if (notImportantCards.length > 0) {
      notImportantListContainerElement.removeClass("hidden");
    }
    notImportantListElement.append(newLi); // Add new list item
    notImportantCardsInDOM = notImportantCards.length; // update the flag
  }
};
function handleEveryImportantButton() {
  let button = $(this).attr("id"); // get which button was pressed
  let currentCard = shuffledCards.splice(currentIndex, 1)[0]; // Remove the current card from cards deck
  // Sort the card based on which button was pressed
  if (button === "important-button") {
    importantCards.push(currentCard);
  } else if (button === "very-important-button") {
    veryImportantCards.push(currentCard);
  } else if (button === "somewhat-important-button") {
    somewhatImportantCards.push(currentCard);
  } else if (button === "not-important-button") {
    notImportantCards.push(currentCard);
  }
  // console.log("Shuffled array: ", shuffledCards);
  // console.log("Important array: ", importantCards);
  // console.log("Very Important array: ", veryImportantCards);
  // console.log("Somewhat Important array: ", somewhatImportantCards);
  // console.log("Not Important array: ", notImportantCards);
  displayCard(); // Update card to evaluate in the DOM
  sortCard(currentCard); // Put the Checked card in the right DOM container
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
