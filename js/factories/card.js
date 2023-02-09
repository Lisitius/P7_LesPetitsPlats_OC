function cardFactory(data) {
  const { name, time, description } = data;

  const picture =
    "https://cache.marieclaire.fr/data/photo/w1000_ci/1h2/colombo-de-veau.webp";

  function recipeCard() {
    //create element, add class and set attribute
    //container of card
    const containerCard = document.createElement("div");
    containerCard.classList.add("container");

    //Image top card
    const imgCard = document.createElement("img");
    imgCard.classList.add("food");
    imgCard.setAttribute("src", picture);
    imgCard.setAttribute("alt", "Image plat nourriture");

    //container of bottom card
    const bottomCard = document.createElement("div");
    bottomCard.classList.add("bottom-grid");

    //content of bottom card
    //name
    const divNameRecipe = document.createElement("div");
    divNameRecipe.classList.add("card");
    divNameRecipe.classList.add("small");
    const nameRecipe = document.createElement("p");
    nameRecipe.textContent = name;

    //time
    const divTime = document.createElement("div");
    divTime.classList.add("card");
    divTime.classList.add("small");
    divTime.classList.add("right");
    const imgClock = document.createElement("img");
    imgClock.setAttribute("src", "assets/clock/clock.png");
    imgClock.setAttribute("alt", "image horloge");
    const timer = document.createElement("p");
    timer.textContent = time;

    //ingredients list
    const ingredientList = document.createElement("div");
    ingredientList.classList.add("card");
    const paragraphListIngredient = document.createElement("p");

    //description text
    const divDescriptionRecipe = document.createElement("div");
    divDescriptionRecipe.classList.add("card");
    const descriptionRecipe = document.createElement("p");
    descriptionRecipe.textContent = description;

    //
    containerCard.appendChild(imgCard);
    containerCard.appendChild(bottomCard);
    bottomCard.appendChild(divNameRecipe);
    bottomCard.appendChild(divTime);
    bottomCard.appendChild(ingredientList);
    bottomCard.appendChild(divDescriptionRecipe);
    divNameRecipe.appendChild(nameRecipe);
    divTime.appendChild(imgClock);
    divTime.appendChild(timer);
    ingredientList.appendChild(paragraphListIngredient);
    divDescriptionRecipe.appendChild(descriptionRecipe);

    data.ingredients.forEach((ingredient) => {
      let ingredientName = `${ingredient.ingredient}`;
      let quantityText = `${ingredient.quantity}`;
      if (quantityText === undefined) {
        quantityText = "";
      }
      paragraphListIngredient.textContent =
        ingredientName + " : " + quantityText;
    });

    return containerCard;
  }
  return { recipeCard };
}
