// The "tagLists" function takes a list of recipes as an argument
function tagLists(listRecipes) {
  // Retrieving lists of items from each category
  const ingredientList = document.querySelector(".ingredient-list");
  const deviceList = document.querySelector(".device-list");
  const utensilList = document.querySelector(".ustensil-list");

  // Creation of tables to store tags for each category (ingredients, appliances and utensils)
  const ingredientTags = [];
  const deviceTags = [];
  const utensilTags = [];

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

    // Loop for each recipe utensil
    recipe.ustensils.forEach((ustensil) => {
      // Adding utensils in the "utensilTags" table if they are not already there
      if (!utensilTags.includes(ustensil.toLowerCase())) {
        utensilTags.push(ustensil.toLowerCase());
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

  const utensilListHTML =
    '<ul class="tag-list">' +
    utensilTags
      .map(
        (utensil) =>
          `<li class="utensil-tag element" categorie="utensil">${utensil}</li>`
      )
      .join("") +
    "</ul>";

  // Inserting the HTML code in the corresponding lists
  ingredientList.innerHTML = ingredientListHTML;
  deviceList.innerHTML = deviceListHTML;
  utensilList.innerHTML = utensilListHTML;
}

// Call of the "tagLists" function with the list of recipes "recipes"
tagLists(recipes);
