// get search field HTML element
const inputSearch = document.querySelector("#search");

// Add an event listener to detect user input changes
inputSearch.addEventListener("input", () => {
  // Retrieve the value entered by the user and put it in lowercase
  const searchValue = inputSearch.value.toLowerCase();

  // Create an empty array to store recipes
  let filteredRecipes = [];

  // check the recipe table and add matching recipes to the search in the filtered table
  recipes.forEach((recipe) => {
    // Retrieve the recipe name, ingredients and description and put them in lowercase
    const name = recipe.name.toLowerCase();
    const ingredients = recipe.ingredients.map((ingredient) =>
      ingredient.ingredient.toLowerCase()
    );
    const description = recipe.description.toLowerCase();
    // Check if the name, ingredients or description contains the entered value
    if (
      name.includes(searchValue) ||
      ingredients.includes(searchValue) ||
      description.includes(searchValue)
    ) {
      // Add the check recipe in the filtered table
      filteredRecipes.push(recipe);
    }
  });

  // If the value entered is less than 3 characters, display all recipes
  if (searchValue.length < 3) {
    displayAllRecipe(recipes);
  } else {
    // Else, display the recipes corresponding to the search
    displayAllRecipe(filteredRecipes);
  }
});
