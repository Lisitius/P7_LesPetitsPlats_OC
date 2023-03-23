// Filter tags in modals
function filtrerTags() {
  // Get HTML elements for ingredients, appliances and utensils.
  const searchIngredientTag = document.getElementById("ingredients");
  const searchDeviceTag = document.getElementById("devices");
  const searchUtensilTag = document.getElementById("ustensils");

  // Add an event listener for the ingredient search tag.
  searchIngredientTag.addEventListener("input", function () {
    const ingredientTagValue = searchIngredientTag.value.toLowerCase();
    const allIngredients = document.querySelectorAll(".ingredient-tag");
    filterList(allIngredients, ".ingredients-list", ingredientTagValue);
  });

  // Add an event listener for the device search tag.
  searchDeviceTag.addEventListener("input", function () {
    const deviceTagValue = searchDeviceTag.value.toLowerCase();
    const allDevices = document.querySelectorAll(".device-tag");
    filterList(allDevices, ".devices-list", deviceTagValue);
  });

  // Add an event listener for the utensil search tag.
  searchUtensilTag.addEventListener("input", function () {
    const utensilTagValue = searchUtensilTag.value.toLowerCase();
    const allUtensils = document.querySelectorAll(".ustensil-tag");
    filterList(allUtensils, ".ustensils-list", utensilTagValue);
  });

  /// filterList() function is called to filter the tags in the ingredients, devices and utensils list.
  function filterList(list, listClass, tagValue) {
    // Retrieve the HTML element corresponding to the list of tags to display.
    const displayedElement = document.querySelector(listClass);
    displayedElement.classList.remove("none");
    // Iterate through the list of tags to filter.
    list.forEach((item) => {
      // Retrieve the tag value in lowercase.
      const tagValueToCheck = item.innerHTML.toLowerCase();
      // Check if the tag contains the search tag value.
      const containsTag = tagValueToCheck.includes(tagValue);
      // Display the tag if it contains the search tag value, or hide it otherwise.
      item.style.display = containsTag ? "" : "none";
    });
  }
}

export { filtrerTags };
