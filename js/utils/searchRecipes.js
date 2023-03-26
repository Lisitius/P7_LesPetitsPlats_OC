const inputSearch = document.querySelector("#search");

// Function to filter recipes based on search and selected tags
function filterRecipes() {
  const searchValue = inputSearch.value.toLowerCase();
  const allTags = document.querySelectorAll(".tags");

  if (searchValue.length < 3) {
    return recipes;
  }

  // Initialize an array to store filtered recipe
  const filteredRecipes = [];

  // Browse all recipes to check if they match search and tag criteria
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    const name = recipe.name.toLowerCase();
    const ingredients = [];

    for (let j = 0; j < recipe.ingredients.length; j++) {
      ingredients.push(recipe.ingredients[j].ingredient.toLowerCase());
    }

    const description = recipe.description.toLowerCase();

    // Check if the search matches the name, ingredients or description of the recipe
    const searchMatches =
      searchValue.length < 3 ||
      name.includes(searchValue) ||
      ingredients.some((ingredient) => ingredient.includes(searchValue)) ||
      description.includes(searchValue);

    /// check if all active tags meet the filter conditions for a given recipe
    const tagMatches = Array.from(allTags).every((tag) => {
      const categorie = tag.getAttribute("categorie");
      const tagName = tag.innerText.toLowerCase();

      // Check if the tag matches based on its category
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

    // If the recipe matches the search and tag criteria, add it to filtered recipes
    if (searchMatches && tagMatches) {
      filteredRecipes.push(recipe);
    }
  }

  return filteredRecipes;
}

export { filterRecipes };
