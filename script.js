import { cards } from "./cardData.js";

// ~~~~~~~~~~
// Variables
// ~~~~~~~~~~
let totalCards = cards.length; // Initially set to the array length then incremented when new cards are added by user
let currentIndex = 0;

// ~~~~~~~~~~~~
// DOM Elements
// ~~~~~~~~~~~~
// Card Stuff
const displayCardElement = $(".display-card");
const cardsCountElement = $("#cards-count");
const cardContainerElement = $(".card-container");
const cardHeaderElement = $("#card-header");
const cardDescriptionElement = $("#card-description");
// Buttons
const allImportantButtonElements = $(".important-button-class");
const buttonContainerElement = $(".buttons-container");
const startButtonElement = $("#start-button");
const resetButtonElement = $("#reset-button");
const addButtonElement = $("#add-button");
const submitButtonElement = $("#submit-button");
const confirmResetButtonElement = $("#confirm-reset-button");
const cancelButtonElement = $("#cancel-button");
const cancelSubmitButtonElement = $("#cancel-submit-button");
const skipButtonElement = $("#skip-button");
const previousButtonElement = $("#previous-button");
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
// Add card
const addCardModalElement = $(".add-card-modal");
const addCardValueElement = $("#add-new-name");
const addCardDescriptionElement = $("#add-new-description");
const validationTextElement = $(".validation-text");
// Reset Modal
const resetModalElement = $(".reset-modal-container");
// ~~~~~~~~~
// Functions
// ~~~~~~~~~
// Put shuffled cards and initialize the empty arrays in local storage
const initLocalStorage = () => {
  store.clear();
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
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
const handleStartButton = () => {
  if (store.get("?reset")) {
    initLocalStorage();
  }
  showCardContainer();
  displayCard();
  startButtonElement.addClass("hidden");
  resetButtonElement.removeClass("hidden");
  addButtonElement.removeClass("hidden");
};
const handleResetButton = () => {
  buttonContainerElement.addClass("hidden");
  resetModalElement.removeClass("hidden");
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
  updateCardsRemainingDOM();
};

const showSortedContainers = () => {
  // Make sure each array exists in the local storage and is greater than 0 to show or hide List in DOM
  if (
    store.get("?veryImportantCards") &&
    store.get("veryImportantCards").length > 0
  ) {
    veryImportantListContainerElement.removeClass("hidden");
  } else {
    veryImportantListContainerElement.addClass("hidden");
  }
  if (
    store.get("?notImportantCards") &&
    store.get("notImportantCards").length > 0
  ) {
    notImportantListContainerElement.removeClass("hidden");
  } else {
    notImportantListContainerElement.addClass("hidden");
  }
  if (
    store.get("?somewhatImportantCards") &&
    store.get("somewhatImportantCards").length > 0
  ) {
    somewhatImportantListContainerElement.removeClass("hidden");
  } else {
    somewhatImportantListContainerElement.addClass("hidden");
  }
  if (store.get("?importantCards") && store.get("importantCards").length > 0) {
    importantListContainerElement.removeClass("hidden");
  } else {
    importantListContainerElement.addClass("hidden");
  }
};
const cardsStorageLoop = (array, element, button) => {
  element.empty();
  for (let i = 0; i < array.length; i++) {
    let newLi = $(
      `<li data-id="${array[i].id}"><span class="listed-value">${array[i].value} </span><i class="fa-regular fa-square-minus"></i></li>`
    );

    // Hover Will show the Edit icon
    newLi.hover(
      // Function to execute when mouse enters the newLi element
      function () {
        // Show the <i> element when hovered over
        $(this).addClass("highlight-text");
        // $(this).find("i").removeClass("hidden");
      },
      // Function to execute when mouse leaves the newLi element
      function () {
        // Hide the <i> element when mouse leaves
        $(this).removeClass("highlight-text");
        // $(this).find("i").addClass("hidden");
      }
    );

    // Click Event to remove from sorted list
    newLi.click(function () {
      let shuffledCards = store.get("shuffledCards");
      // get id from clicked li element
      const elementId = this.getAttribute("data-id");
      // Find card by comparing the index in the array to the id grabbed from the element that was clicked
      const indexToRemove = array.findIndex((card) => card.id == elementId);
      let removedCard = array.splice(indexToRemove, 1)[0]; // Remove the card from the original array
      shuffledCards.unshift(removedCard); // Put card in beginning of deck to be sorted
      store.set("shuffledCards", shuffledCards); // Put deck back
      displayCard(); // displayCardElement.removeClass("hidden"); // Remove card from list that it is in
      // adjust the local storage based on the edit button pressed
      store.set(button, array); // Update the array in the store
      $(this).remove(); // remove from DOM
      // logAllArrays();
      showSortedContainers();
      // Show card container if all cards have already been sorted
      cardContainerElement.removeClass("hidden");
    });

    element.append(newLi);
  }
};

const sortCardsInDOM = () => {
  if (store.get("veryImportantCards").length > 0) {
    let veryImportantCards = store.get("veryImportantCards");
    cardsStorageLoop(
      veryImportantCards,
      veryImportantListElement,
      "veryImportantCards"
    );
  }
  if (store.get("notImportantCards").length > 0) {
    let notImportantCards = store.get("notImportantCards");
    cardsStorageLoop(
      notImportantCards,
      notImportantListElement,
      "notImportantCards"
    );
  }
  if (store.get("somewhatImportantCards").length > 0) {
    let somewhatImportantCards = store.get("somewhatImportantCards");
    cardsStorageLoop(
      somewhatImportantCards,
      somewhatImportantListElement,
      "somewhatImportantCards"
    );
  }
  if (store.get("importantCards").length > 0) {
    let importantCards = store.get("importantCards");
    cardsStorageLoop(importantCards, importantListElement, "importantCards");
  }
};
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
    button = "importantCards"; // Pass button string for local storage later
  } else if (button === "very-important-button") {
    const veryImportantCards = store.get("veryImportantCards"); // Grab from storage
    veryImportantCards.push(currentCard); // Update
    store.set("veryImportantCards", veryImportantCards); // Back in storage
    button = "veryImportantCards"; // Pass button string for local storage later
  } else if (button === "somewhat-important-button") {
    const somewhatImportantCards = store.get("somewhatImportantCards"); // Grab from storage
    somewhatImportantCards.push(currentCard); // Update
    store.set("somewhatImportantCards", somewhatImportantCards); // Back in storage
    button = "somewhatImportantCards"; // Pass button string for local storage later
  } else if (button === "not-important-button") {
    const notImportantCards = store.get("notImportantCards"); // Grab from storage
    notImportantCards.push(currentCard); // Update
    store.set("notImportantCards", notImportantCards); // Back in storage
    button = "notImportantCards"; // Pass button string for local storage later
  }
  // Put cards back in storage
  store.set("shuffledCards", shuffledCards);
  showSortedContainers();
  sortCardsInDOM(); // Put the sorted cards in the right DOM container
  displayCard(); // Update card to evaluate in the DOM
}
const handleAddButton = () => {
  addCardModalElement.removeClass("hidden");
  displayCardElement.addClass("hidden");
};
const handleCancelButton = () => {
  // reset all the add card modal settings
  addCardModalElement.addClass("hidden");
  displayCardElement.removeClass("hidden");
  validationTextElement.addClass("hidden");
  addCardValueElement.val("");
  addCardDescriptionElement.val("");
  resetModalElement.addClass("hidden");
  buttonContainerElement.removeClass("hidden");
};
const handleSubmitButton = () => {
  // Check to make sure both fields are filled out before submitting card to local storage
  if (addCardValueElement.val() && addCardDescriptionElement.val()) {
    // Increment total cards length
    totalCards += 1;
    // Get card data from form fields
    const newCard = {
      id: totalCards,
      value: addCardValueElement.val(),
      description: addCardDescriptionElement.val(),
    };
    const shuffledCards = store.get("shuffledCards"); // Get the deck from local storage
    shuffledCards.splice(getRandomNumber(0, shuffledCards.length), 0, newCard); // Put new card in random spot
    store.set("shuffledCards", shuffledCards);
    updateCardsRemainingDOM();
    handleCancelButton(); // Reset text Fields
  } else {
    validationTextElement.removeClass("hidden");
  }
};
const handleConfirmResetButton = () => {
  store.clear(); // Delete local storage
  store.set("reset", true);
  hideCardContainer();
  showSortedContainers();
  startButtonElement.removeClass("hidden");
  resetButtonElement.addClass("hidden");
  addButtonElement.addClass("hidden");
  handleCancelButton();
};
const handleSkipButton = () => {
  let shuffledCards = store.get("shuffledCards"); // Get cards from storage
  let skippedCard = shuffledCards.shift(); // Take the card from the front of array
  shuffledCards.push(skippedCard); // Move card to the back of array
  store.set("shuffledCards", shuffledCards); // Put the cards back into storage
  displayCard();
};
const handlePreviousButton = () => {
  let shuffledCards = store.get("shuffledCards");
  let previousCard = shuffledCards.pop(); // Take the card from the back of the array
  shuffledCards.unshift(previousCard); // Move the card to the front of the array
  store.set("shuffledCards", shuffledCards); // Put the cards back into storage
  displayCard();
};
const updateCardsRemainingDOM = () => {
  cardsCountElement.text(`${store.get("shuffledCards").length}`);
};

// ~~~~~~~~~~~~~~~~~~~
// Button Click Events
// ~~~~~~~~~~~~~~~~~~~
// Listener for all the important choice buttons
allImportantButtonElements.each((index, button) => {
  $(button).click(handleEveryImportantButton);
});

startButtonElement.click(handleStartButton);
resetButtonElement.click(handleResetButton);
addButtonElement.click(handleAddButton);
submitButtonElement.click(handleSubmitButton);
cancelButtonElement.click(handleCancelButton);
confirmResetButtonElement.click(handleConfirmResetButton);
cancelSubmitButtonElement.click(handleCancelButton);
skipButtonElement.click(handleSkipButton);
previousButtonElement.click(handlePreviousButton);

// Do this stuff once the DOM is done loading for the first time
$(() => {
  // Local Storage Initialization
  // Check if one of the variables is in local storage. If not initialize it with data and empty arrays
  if (!store("?shuffledCards")) {
    initLocalStorage();
  } else {
    handleStartButton();
    showSortedContainers();
    sortCardsInDOM();
  }
});
