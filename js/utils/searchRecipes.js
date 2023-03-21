const inputSearch = document.querySelector("#search");

function filterRecipes() {
  const searchValue = inputSearch.value.toLowerCase();
  const allTags = document.querySelectorAll(".tags");
  const filteredRecipes = [];

  recipes.forEach((recipe) => {
    const name = recipe.name.toLowerCase();
    const ingredients = recipe.ingredients.map((ingredient) =>
      ingredient.ingredient.toLowerCase()
    );
    const description = recipe.description.toLowerCase();

    const searchMatches =
      searchValue.length < 3 ||
      name.includes(searchValue) ||
      ingredients.some((ingredient) => ingredient.includes(searchValue)) ||
      description.includes(searchValue);

    const tagMatches = Array.from(allTags).every((tag) => {
      const categorie = tag.getAttribute("categorie");
      const tagName = tag.innerText.toLowerCase();

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

    if (searchMatches && tagMatches) {
      filteredRecipes.push(recipe);
    }
  });

  return filteredRecipes;
}

export { filterRecipes };
