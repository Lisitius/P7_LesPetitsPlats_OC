// The "tagLists" function takes a list of recipes as an argument
function tagLists(listRecipes) {
  // Retrieving lists of items from each category
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

// Call of the "tagLists" function with the list of recipes "recipes"
tagLists(recipes);

////////////////////////////////////////////////////////////////

// Select all elements with class "button-up"
const btnModal = document.querySelectorAll(".button-up");

// Select ingredient in html
const modalbgIngredients = document.querySelector(".ingredients-list");
const ingredientPlaceHolder = document.getElementsByName("ingredients");
const ingredientDefaultPlaceholder = "Ingrédients";
const ingredientAltPlaceholder = "Rechercher un ingrédient";

// Select device in html
const modalbgDevices = document.querySelector(".devices-list");
const devicePlaceHolder = document.getElementsByName("devices");
const deviceDefaultPlaceholder = "Appareils";
const deviceAltPlaceholder = "Rechercher un appareil";

// Select ustensil in html
const modalbgUstensils = document.querySelector(".ustensils-list");
const ustensilPlaceHolder = document.getElementsByName("ustensils");
const ustensilDefaultPlaceholder = "Ustensiles";
const ustensilAltPlaceholder = "Rechercher un ustensile";

// Add a "click" event handler for each modal button
btnModal.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // If the user clicks on button-ingredients
    if (e.target.classList.contains("button-ingredients")) {
      // Replace the current placeholder with that of ingredientAltPlaceholder
      ingredientPlaceHolder[0].placeholder = ingredientAltPlaceholder;

      //If the modalbgIngredients is hidden
      if (modalbgIngredients.classList.contains("none")) {
        // Show modal ingredients
        modalbgIngredients.classList.remove("none");
        // rotate the button 180 degrees
        btn.style.transform = "rotate(180deg)";
      } else {
        // Hide modal ingredients
        modalbgIngredients.classList.add("none");
        // Replace the current placeholder with ingredientDefaultPlaceholder (default placeholder)
        ingredientPlaceHolder[0].placeholder = ingredientDefaultPlaceholder;
        // Returns the button to its initial position
        btn.style.transform = "rotate(0deg)";
      }
      // If the user clicks on button-devices
    } else if (e.target.classList.contains("button-devices")) {
      // Replace the current placeholder with that of deviceAltPlaceholder
      devicePlaceHolder[0].placeholder = deviceAltPlaceholder;

      // If the modalbgIngredients is hidden
      if (modalbgDevices.classList.contains("none")) {
        // Show modal devices
        modalbgDevices.classList.remove("none");
        // rotate the button 180 degrees
        btn.style.transform = "rotate(180deg)";
      } else {
        // Hide modal ingredients
        modalbgDevices.classList.add("none");
        // Replace the current placeholder with deviceDefaultPlaceholder (default placeholder)
        devicePlaceHolder[0].placeholder = deviceDefaultPlaceholder;
        // Returns the button to its initial position
        btn.style.transform = "rotate(0deg)";
      }
      // If the user clicks on button-devices
    } else if (e.target.classList.contains("button-ustensils")) {
      // Replace the current placeholder with that of ustensilAltPlaceholder
      ustensilPlaceHolder[0].placeholder = ustensilAltPlaceholder;

      // If the modalbgIngredients is hidden
      if (modalbgUstensils.classList.contains("none")) {
        // Show modal ustensils
        modalbgUstensils.classList.remove("none");
        // rotate the button 180 degrees
        btn.style.transform = "rotate(180deg)";
      } else {
        // Hide modal ingredients
        modalbgUstensils.classList.add("none");
        // Replace the current placeholder with ustensilDefaultPlaceholder (default placeholder)
        ustensilPlaceHolder[0].placeholder = ustensilDefaultPlaceholder;
        // Returns the button to its initial position
        btn.style.transform = "rotate(0deg)";
      }
    }
  });
});

//filter tags modal
function filterRecipes() {
  // Retrieve the HTML tags for ingredients, devices and utensils.
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

  // filterList() function is called to filter the tags in the ingredients, devices and utensils list.
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

// Call the filterRecipes() function to initialize the recipe filtering.
filterRecipes();
