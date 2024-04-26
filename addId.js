const addId = () => {
  let newArray = [];
  for (let i = 0; i < cards.length; i++) {
    let newCard = {
      id: i + 1,
      value: cards[i].value,
      description: cards[i].description,
    };
    newArray.push(newCard);
  }
  return newArray;
};

console.log(addId());
