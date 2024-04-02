const cards = [
  { value: "Acceptance", description: "to be accepted as I am" },
  {
    value: "Accuracy",
    description: "to be accurate in my opinions and beliefs",
  },
  {
    value: "Value 3",
    description: "Desc",
  },
  {
    value: "Value 4",
    description: "fdsamlf;safsdfdsaf",
  },
  {
    value: "Value 5",
    description: "fdsafdsafsdafs",
  },
];

let cardCount = cards.length;

console.log(cards);

// ~~~~~~~~
// Buttons
// ~~~~~~~~
$("#start").click(() => {
  $("#reset").removeClass("hide");
  $("#start").addClass("hide");
});
$("#reset").click(() => {
  $("#start").removeClass("hide");
  $("#reset").addClass("hide");
});

$(() => {
  $("#cards-count").text(`${cardCount}`); // Show initial cards remaining
});
