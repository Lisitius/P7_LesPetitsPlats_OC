function tagLists(listRecipes) {
  const ingredientList = document.querySelector(".ingredients-list");
  const deviceList = document.querySelector(".devices-list");
  const ustensilList = document.querySelector(".ustensils-list");

  // Creation of tables to store tags for each category (ingredients, appliances and ustensils)
  const ingredientTags = [];
  const deviceTags = [];
  const ustensilTags = [];

  // Loop for each recipe in the recipe list
  listRecipes.forEach((recipe) => {
    // Loop for each recipe ingredient
    recipe.ingredients.forEach((ingredient) => {
      // Adding ingredients to the "ingredientTags" table if they are not already there
      if (!ingredientTags.includes(ingredient.ingredient.toLowerCase())) {
        ingredientTags.push(ingredient.ingredient.toLowerCase());
      }
    });

    // Adding devices to the "deviceTags" table if they are not already there
    if (!deviceTags.includes(recipe.appliance.toLowerCase())) {
      deviceTags.push(recipe.appliance.toLowerCase());
    }

    // Loop for each recipe ustensil
    recipe.ustensils.forEach((ustensil) => {
      // Adding ustensils in the "ustensilTags" table if they are not already there
      if (!ustensilTags.includes(ustensil.toLowerCase())) {
        ustensilTags.push(ustensil.toLowerCase());
      }
    });
  });

  // HTML code for each list of tags
  const ingredientListHTML =
    '<ul class="tag-list">' +
    ingredientTags
      .map(
        (ingredient) =>
          `<li class="ingredient-tag element" categorie="ingredient">${ingredient}</li>`
      )
      .join("") +
    "</ul>";

  const deviceListHTML =
    '<ul class="tag-list">' +
    deviceTags
      .map(
        (device) =>
          `<li class="device-tag element" categorie="appliance">${device}</li>`
      )
      .join("") +
    "</ul>";

  const ustensilListHTML =
    '<ul class="tag-list">' +
    ustensilTags
      .map(
        (ustensil) =>
          `<li class="ustensil-tag element" categorie="ustensil">${ustensil}</li>`
      )
      .join("") +
    "</ul>";

  // Inserting the HTML code in the corresponding lists
  ingredientList.innerHTML = ingredientListHTML;
  deviceList.innerHTML = deviceListHTML;
  ustensilList.innerHTML = ustensilListHTML;
}

export { tagLists };
