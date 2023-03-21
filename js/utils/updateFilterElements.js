const allIngredients = document.querySelectorAll(".ingredient-tag");
const allDevices = document.querySelectorAll(".device-tag");
const allUtensils = document.querySelectorAll(".ustensil-tag");

function updateFilterElements(recipes) {
  const createMap = (keyExtractor) =>
    recipes.reduce((map, recipe) => {
      keyExtractor(recipe).forEach((key) => {
        map.set(key, (map.get(key) || 0) + 1);
      });
      return map;
    }, new Map());

  const updateList = (list, map) => {
    list.forEach((item) => {
      const itemName = item.innerText.toLowerCase();
      const count = map.get(itemName);
      item.style.display = count ? "block" : "none";
    });
  };

  const ingredientsMap = createMap((recipe) =>
    recipe.ingredients.map((i) => i.ingredient.toLowerCase())
  );
  const appliancesMap = createMap((recipe) => [recipe.appliance.toLowerCase()]);
  const utensilsMap = createMap((recipe) =>
    recipe.ustensils.map((u) => u.toLowerCase())
  );

  updateList(allIngredients, ingredientsMap);
  updateList(allDevices, appliancesMap);
  updateList(allUtensils, utensilsMap);
}

export { updateFilterElements };
