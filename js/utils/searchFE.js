// Retrieve search field HTML element
const inputSearch = document.querySelector("#search");

// Add an event listener to listen for user input changes
inputSearch.addEventListener("input", () => {
  // Récupérer la valeur saisie par l'utilisateur
  const searchValue = inputSearch.value.toLowerCase();

  // Filter the recipes array to retrieve all recipes that have the name, ingredients, or description that match the entered value

  if (searchValue.length < 3) {
    displayAllRecipe(recipes);
  } else {
    const filteredRecipes = recipes.filter((recipe) => {
      const name = recipe.name.toLowerCase();
      const ingredients = recipe.ingredients.map((ingredient) =>
        ingredient.ingredient.toLowerCase()
      );
      const description = recipe.description.toLowerCase();
      return (
        name.includes(searchValue) ||
        ingredients.includes(searchValue) ||
        description.includes(searchValue)
      );
    });
    // Pass the filtered array to the displayAllRecipe function to display the results
    displayAllRecipe(filteredRecipes);
  }
});
