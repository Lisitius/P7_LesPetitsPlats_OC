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
    nameRecipe.classList.add("title");
    nameRecipe.textContent = name;

    //time
    const divTime = document.createElement("div");
    divTime.classList.add("card");
    divTime.classList.add("small");
    divTime.classList.add("right");
    const imgClock = document.createElement("img");
    imgClock.classList.add("clock");
    imgClock.setAttribute("src", "assets/clock/clock.png");
    imgClock.setAttribute("alt", "image horloge");
    const timer = document.createElement("p");
    timer.textContent = time + " minutes";

    //ingredients list
    const ingredientList = document.createElement("div");
    ingredientList.classList.add("card");
    const paragraphListIngredient = document.createElement("p");
    paragraphListIngredient.classList.add("ingredient-list");

    //description text
    const divDescriptionRecipe = document.createElement("p");
    divDescriptionRecipe.classList.add("description");
    divDescriptionRecipe.textContent = description;

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

    data.ingredients.forEach((ingredient) => {
      let ingredientName = `${ingredient.ingredient}`;
      let quantityText;
      if (ingredient.quantity) {
        quantityText = ` : ${ingredient.quantity}`;
      } else {
        quantityText = "";
      }
      paragraphListIngredient.innerHTML +=
        ingredientName + quantityText + "<br>";
    });

    return containerCard;
  }
  return { recipeCard };
}
