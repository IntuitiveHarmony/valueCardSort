import { cards } from "./cardData.js";

// ~~~~~~~~~~
// Variables
// ~~~~~~~~~~
let cardCount = cards.length; // Initially set to the array length but then incremented later
let currentIndex = 0;
// let shuffledCards;
let notImportantCards = [];
let somewhatImportantCards = [];
let importantCards = [];
let veryImportantCards = [];
let sortedCardArrays = [
  notImportantCards,
  somewhatImportantCards,
  importantCards,
  veryImportantCards,
];
let notImportantCardsInDOM = 0;
let importantCardsInDOM = 0;
let somewhatImportantCardsInDOM = 0;
let veryImportantCardsInDOM = 0;
let editCard = false;

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
const resetButtonElement = $("#reset-button");
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
// Put shuffled cards and initialize the empty arrays in local storage
const initLocalStorage = () => {
  shuffleCards();
  store.set("veryImportantCards", []);
  store.set("notImportantCards", []);
  store.set("somewhatImportantCards", []);
  store.set("importantCards", []);
};
// Randomize cards array and put in local storage
const shuffleCards = () => {
  let shuffledCards = cards.sort(() => Math.random() - 0.5);
  store.set("shuffledCards", shuffledCards);
};

const handleStartButton = () => {
  // Takes care of "reset" condition
  if (!store.get("?shuffledCards")) {
    initLocalStorage();
  }
  showCardContainer();
  displayCard();
  startButtonElement.addClass("hidden");
  resetButtonElement.removeClass("hidden");
};
const handleResetButton = () => {
  store.clear(); // Delete local storage
  hideCardContainer();
  startButtonElement.removeClass("hidden");
  resetButtonElement.addClass("hidden");
};
const showCardContainer = () => {
  cardContainerElement.removeClass("hidden");
};
const hideCardContainer = () => {
  cardContainerElement.addClass("hidden");
};
const displayCard = () => {
  let shuffledCards = store.get("shuffledCards");
  if (shuffledCards.length > 0) {
    cardHeaderElement.text(shuffledCards[currentIndex].value);
    cardDescriptionElement.text(shuffledCards[currentIndex].description);
  } else {
    hideCardContainer();
  }
  // console.log("DisplayCard() - shuff length: ", shuffledCards.length);
  // if (shuffledCards.length > 0) {
  // } else {
  //   cardElement.addClass("hidden");
  //   console.log("No more cards");
  // }
  // updateCardsRemainingDOM();
};
// const removeCardFromArray = (card, arrays) => {
//   for (let i = 0; i < arrays.length; i++) {
//     let array = arrays[i];
//     // Skip empty arrays
//     if (array.length === 0) continue;

//     let filteredArray = [];
//     for (let j = 0; j < array.length; j++) {
//       if (array[j] !== card) {
//         filteredArray.push(array[j]);
//       }
//     }

//     if (filteredArray.length < array.length) {
//       // Card was found and removed from this array
//       console.log(`${card.value} removed from array:`, array);
//       arrays[i] = filteredArray; // Update the original array
//     } else {
//       console.log(`${card.value} not found in any array`);
//     }
//   }
// };

// const sortCard = (newCard) => {
//   // console.log(newCard);
//   let newLi = $(
//     `<li>${newCard.value} <i class="fa-regular fa-pen-to-square hidden"></i></li>`
//   );
//   // Hover Will show the Edit icon
//   newLi.hover(
//     // Function to execute when mouse enters the newLi element
//     function () {
//       // Show the <i> element when hovered over
//       $(this).addClass("highlight-text");
//       $(this).find("i").removeClass("hidden");
//     },
//     // Function to execute when mouse leaves the newLi element
//     function () {
//       // Hide the <i> element when mouse leaves
//       $(this).removeClass("highlight-text");
//       $(this).find("i").addClass("hidden");
//     }
//   );
//   // Click Event to edit
//   newLi.click(function () {
//     // Put card in beginning of deck to be sorted
//     shuffledCards.unshift(newCard);
//     console.log("Shuff lenght: ", shuffledCards.length);
//     displayCard();
//     cardElement.removeClass("hidden");
//     // Remove card from list that it is in
//     removeCardFromArray(newCard, sortedCardArrays);
//     $(this).remove();
//     logAllArrays();
//   });
//   // Check to see if the amount of cards in the array is has changed and update that list in DOM if so
//   if (importantCards.length != importantCardsInDOM) {
//     // Show list if above 0
//     if (importantCards.length > 0) {
//       importantListContainerElement.removeClass("hidden");
//     } else {
//       importantListContainerElement.addClass("hidden");
//     }
//     importantListElement.append(newLi); // Add new list item
//     importantCardsInDOM = importantCards.length; // update the flag
//   }
//   if (veryImportantCards.length != veryImportantCardsInDOM) {
//     if (veryImportantCards.length > 0) {
//       veryImportantListContainerElement.removeClass("hidden");
//     } else {
//       veryImportantListContainerElement.addClass("hidden");
//     }
//     veryImportantListElement.append(newLi); // Add new list item
//     veryImportantCardsInDOM = veryImportantCards.length; // update the flag
//   }
//   if (somewhatImportantCards.length != somewhatImportantCardsInDOM) {
//     if (somewhatImportantCards.length > 0) {
//       somewhatImportantListContainerElement.removeClass("hidden");
//     } else {
//       somewhatImportantListContainerElement.addClass("hidden");
//     }
//     somewhatImportantListElement.append(newLi); // Add new list item
//     somewhatImportantCardsInDOM = somewhatImportantCards.length; // update the flag
//   }
//   if (notImportantCards.length != notImportantCardsInDOM) {
//     if (notImportantCards.length > 0) {
//       notImportantListContainerElement.removeClass("hidden");
//     } else {
//       notImportantListContainerElement.addClass("hidden");
//     }
//     notImportantListElement.append(newLi); // Add new list item
//     notImportantCardsInDOM = notImportantCards.length; // update the flag
//   }
// };
function handleEveryImportantButton() {
  // Get the cards from local storage
  let shuffledCards = store.get("shuffledCards");
  let button = $(this).attr("id"); // get which button was pressed
  let currentCard = shuffledCards.splice(currentIndex, 1)[0]; // Remove the current card from cards deck
  // Sort the card based on which button was pressed
  if (button === "important-button") {
    const importantCards = store.get("importantCards"); // Grab from storage
    importantCards.push(currentCard); // Update
    store.set("importantCards", importantCards); // Back in storage
  } else if (button === "very-important-button") {
    const veryImportantCards = store.get("veryImportantCards"); // Grab from storage
    veryImportantCards.push(currentCard); // Update
    store.set("veryImportantCards", veryImportantCards); // Back in storage
  } else if (button === "somewhat-important-button") {
    const somewhatImportantCards = store.get("somewhatImportantCards"); // Grab from storage
    somewhatImportantCards.push(currentCard); // Update
    store.set("somewhatImportantCards", somewhatImportantCards); // Back in storage
  } else if (button === "not-important-button") {
    const notImportantCards = store.get("notImportantCards"); // Grab from storage
    notImportantCards.push(currentCard); // Update
    store.set("notImportantCards", notImportantCards); // Back in storage
  }
  // Put cards back in storage
  store.set("shuffledCards", shuffledCards);
  // logAllArrays();
  displayCard(); // Update card to evaluate in the DOM
  sortCard(currentCard); // Put the Checked card in the right DOM container
}
// const handleSkipButton = () => {
//   let skippedCard = shuffledCards.shift(); // Take the card from the front of array
//   shuffledCards.push(skippedCard); // Move card to the back of array
//   displayCard();
// };
// const updateCardsRemainingDOM = () => {
//   cardsCountElement.text(`${shuffledCards.length}`);
// };

// const logAllArrays = () => {
//   console.log("Shuffled array: ", shuffledCards);
//   console.log("Important array: ", importantCards);
//   console.log("Very Important array: ", veryImportantCards);
//   console.log("Somewhat Important array: ", somewhatImportantCards);
//   console.log("Not Important array: ", notImportantCards);
// };
// ~~~~~~~~~~~~~~~~~~~
// Button Click Events
// ~~~~~~~~~~~~~~~~~~~
// Listener for all the important choice buttons
allImportantButtonElements.each((index, button) => {
  $(button).click(handleEveryImportantButton);
});

startButtonElement.click(handleStartButton);
resetButtonElement.click(handleResetButton);
// skipButtonElement.click(handleSkipButton);

// Do this stuff once the DOM is done loading for the first time
$(() => {
  // Local Storage Initialization
  // Check if one of the variables is in local storage. If not initialize it with data and empty arrays
  if (!store("?shuffledCards")) {
    initLocalStorage();
  }
});
