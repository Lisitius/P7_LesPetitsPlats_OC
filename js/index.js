import { tagLists } from "./utils/tagLists.js";
import { handleModal } from "./utils/modal.js";
import { filtrerTags } from "./utils/filtrerTags.js";

// Function to display all recipes from the recipe table
function displayAllRecipe(array) {
  // Select the recipe card container
  const cardContainer = document.querySelector(".full-container");

  // Empty the contents of the full-container class
  cardContainer.innerHTML = "";

  // Iterates through each recipe in the array passed as an argument
  array.forEach((recipe) => {
    // Use the cardFactory function to create a card template from the current recipe
    const cardModel = cardFactory(recipe);

    // Calls the recipeCard() method on the card template to create the card, then stores this element in the 'card' constant
    const card = cardModel.recipeCard();

    // Adds the content (so the card created) to the full-container class
    cardContainer.appendChild(card);
  });
}

// Displays all recipes using the 'recipes' array
displayAllRecipe(recipes);

// Call the tagLists function with the list of recipes "recipes"
tagLists(recipes);

// Call the handleModal function to manage modals
handleModal();

// Call the filterRecipes function to initialize the recipe filtering
filtrerTags();

export { displayAllRecipe };
