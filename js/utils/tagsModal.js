//create arrays for modals
function tagLists(listRecipes) {
  let ingredientsList = document.querySelector(".ingredient-list");
  const ingredientsArray = [];
  let devicesList = document.querySelector(".device-list");
  const devicesArray = [];
  let utensilsList = document.querySelector(".ustensil-list");
  const utensilsArray = [];

  //search elements and add in arrays
  listRecipes.forEach((recipe) => {
    const ingredients = recipe.ingredients;
    ingredients.forEach((ingredient) => {
      let ingredientsTab = ingredient.ingredient;
      console.log("Ingredient:", ingredientsTab);
      ingredientsArray.push(
        `<li class="ingredient_tag element" categorie="ingredient">${ingredientsTab.toLowerCase()}</li>`
      );
    });

    const devices = recipe.appliance;
    console.log("Device:", devices);
    devicesArray.push(
      `<li class="device_tag element" categorie="appliance">${devices.toLowerCase()}</li>`
    );

    const utensils = recipe.ustensils;
    utensils.forEach((ustensil) => {
      console.log("Utensil:", ustensil);
      utensilsArray.push(
        `<li class="utensil_tag element" categorie="utensil">${ustensil.toLowerCase()}</li>`
      );
    });
  });
  //fin de search elements and add in arrays

  //to display the arrays
  let newIngredientsList = [...new Set(ingredientsArray)];
  console.log("Ingredients List:", newIngredientsList);
  ingredientsList.innerHTML += `<ul class="tag_list">${newIngredientsList.join(
    ""
  )}</ul>`;
  let newDevicesList = [...new Set(devicesArray)];
  console.log("Devices List:", newDevicesList);
  devicesList.innerHTML += `<ul class="tag_list">${newDevicesList.join(
    ""
  )}</ul>`;
  let newUtensilsList = [...new Set(utensilsArray)];
  console.log("Utensils List:", newUtensilsList);
  utensilsList.innerHTML += `<ul class="tag_list">${newUtensilsList.join(
    ""
  )}</ul>`;
  //fin de to display the arrays
}

tagLists(recipes);
//fin de create arrays for modals
