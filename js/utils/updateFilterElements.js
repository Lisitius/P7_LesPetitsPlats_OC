const allIngredients = document.querySelectorAll(".ingredient-tag");
const allDevices = document.querySelectorAll(".device-tag");
const allUtensils = document.querySelectorAll(".ustensil-tag");

function updateFilterElements(recipes) {
  // The createMap function takes a "keyExtractor" function as a parameter which extracts the keys (elements) of a recipe.
  // It then loops through the recipes and uses keyExtractor to extract items from each category (ingredients, appliances, utensils).
  // The resulting Map contains the elements as keys and the number of their occurrences as values.
  const createMap = (keyExtractor) =>
    recipes.reduce((map, recipe) => {
      keyExtractor(recipe).forEach((key) => {
        map.set(key, (map.get(key) || 0) + 1);
      });
      return map;
    }, new Map());

  // The updateList function takes a list of HTML elements (list) and a Map of occurrences (map) as parameters.
  // It goes through the list of HTML elements, retrieves the name of each element (in lowercase) and checks if it is present in the Map.
  // If the element is present in the Map (its number of occurrences is greater than 0), it will be displayed (display: block).
  // Otherwise, the element will be hidden (display: none).
  const updateList = (list, map) => {
    list.forEach((item) => {
      const itemName = item.innerText.toLowerCase();
      const count = map.get(itemName);
      item.style.display = count ? "block" : "none";
    });
  };

  // Creation of Maps for ingredients, appliances and utensils
  const ingredientsMap = createMap((recipe) =>
    recipe.ingredients.map((i) => i.ingredient.toLowerCase())
  );
  const appliancesMap = createMap((recipe) => [recipe.appliance.toLowerCase()]);
  const utensilsMap = createMap((recipe) =>
    recipe.ustensils.map((u) => u.toLowerCase())
  );

  // Update the lists of ingredients, appliances and utensils according to the Maps
  updateList(allIngredients, ingredientsMap);
  updateList(allDevices, appliancesMap);
  updateList(allUtensils, utensilsMap);
}

export { updateFilterElements };
