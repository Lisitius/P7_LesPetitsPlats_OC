// Retrieve search field HTML element
const inputSearch = document.querySelector("#search");

// Retrieve full-container HTML element
const fullContainer = document.querySelector(".full-container");

// Retrieve error message HTML element
const errorMessage = document.createElement("p");
errorMessage.classList.add("error-message");
errorMessage.textContent = "Aucune recette ne correspond à votre recherche.";

// Add an event listener to listen for user input changes
inputSearch.addEventListener("input", () => {
  // Retrieve the value entered by the user
  const searchValue = inputSearch.value.toLowerCase();

  // Filter the recipes array to retrieve all recipes that have the name, ingredients, or description that match the entered value

  if (searchValue.length < 3) {
    displayAllRecipe(recipes);
    // Hide error message if it is displayed
    if (errorMessage.parentNode === fullContainer) {
      fullContainer.removeChild(errorMessage);
    }
  } else {
    // Create an array to store the filtered recipes
    const filteredRecipes = [];
    // Loop through each recipe in the recipes array
    for (let i = 0; i < recipes.length; i++) {
      const recipe = recipes[i];
      const name = recipe.name.toLowerCase();
      const ingredients = recipe.ingredients.map((ingredient) =>
        ingredient.ingredient.toLowerCase()
      );
      const description = recipe.description.toLowerCase();
      //Check if the name or ingredient or description of each recipe contains the value entered by the user in the search field
      if (
        name.includes(searchValue) ||
        ingredients.includes(searchValue) ||
        description.includes(searchValue)
      ) {
        // If the recipe matches the search, add it to the filteredRecipes array
        filteredRecipes.push(recipe);
      }
    }
    // Pass the filtered array to the displayAllRecipe function to display the results
    displayAllRecipe(filteredRecipes);
    // Display error message if no recipes match the search
    if (filteredRecipes.length === 0) {
      fullContainer.appendChild(errorMessage);
    } else {
      // Hide error message if it is displayed
      if (errorMessage.parentNode === fullContainer) {
        fullContainer.removeChild(errorMessage);
      }
    }
  }
});
