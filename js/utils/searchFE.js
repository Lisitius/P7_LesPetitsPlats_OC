const inputSearch = document.querySelector("#search");

inputSearch.addEventListener("input", () => {
  const searchValue = inputSearch.value.toLowerCase();
  let filteredRecipes = [];

  recipes.forEach((recipe) => {
    const name = recipe.name.toLowerCase();
    const ingredients = recipe.ingredients.map((ingredient) =>
      ingredient.ingredient.toLowerCase()
    );
    const description = recipe.description.toLowerCase();
    if (
      name.includes(searchValue) ||
      ingredients.includes(searchValue) ||
      description.includes(searchValue)
    ) {
      filteredRecipes.push(recipe);
    }
  });

  if (searchValue.length < 3) {
    displayAllRecipe(recipes);
  } else {
    displayAllRecipe(filteredRecipes);
  }
});
