const inputSearch = document.querySelector("#search");

function filterRecipes() {
  const searchValue = inputSearch.value.toLowerCase();
  const allTags = document.querySelectorAll(".tags");

  if (searchValue.length < 3) {
    return recipes;
  }

  // Filter the recipes array based on search value and selected tags
  const filteredRecipes = recipes.filter((recipe) => {
    // Convert the recipe name, ingredients, and description to lower case
    const name = recipe.name.toLowerCase();
    const ingredients = recipe.ingredients.map((ingredient) =>
      ingredient.ingredient.toLowerCase()
    );
    const description = recipe.description.toLowerCase();

    // Check if the search value matches the recipe name, ingredients, or description
    const searchMatches =
      searchValue.length < 3 ||
      name.includes(searchValue) ||
      ingredients.some((ingredient) => ingredient.includes(searchValue)) ||
      description.includes(searchValue);

    // Check if the selected tags match the recipe's tags
    const tagMatches = Array.from(allTags).every((tag) => {
      const categorie = tag.getAttribute("categorie");
      const tagName = tag.innerText.toLowerCase();

      // Determine if the recipe matches the selected tags based on their category
      switch (categorie) {
        case "ingredient":
          return recipe.ingredients.some(
            (i) => i.ingredient.toLowerCase() === tagName
          );
        case "appliance":
          return recipe.appliance.toLowerCase().includes(tagName);
        case "ustensil":
          return recipe.ustensils.some((u) => u.toLowerCase() === tagName);
        default:
          return false;
      }
    });

    // Return true if both search and tags match the recipe, false otherwise
    return searchMatches && tagMatches;
  });
  console.log(filteredRecipes);

  return filteredRecipes;
}

export { filterRecipes };
