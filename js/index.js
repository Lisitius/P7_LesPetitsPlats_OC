function displayAllRecipe(array) {
  const cardContainer = document.querySelector(".full-container");
  cardContainer.innerHTML = "";
  array.forEach((recipe) => {
    const cardModel = cardFactory(recipe);
    const cardDOM = cardModel.recipeCard();
    cardContainer.appendChild(cardDOM);
  });
}

displayAllRecipe(recipes);
