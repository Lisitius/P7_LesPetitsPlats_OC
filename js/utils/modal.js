function handleModal() {
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
}

export { handleModal };
