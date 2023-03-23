import { createTag } from "./createTag.js";
import { filterRecipes } from "./searchRecipes.js";
import { updateFilterElements } from "./updateFilterElements.js";
import { displayAllRecipe } from "../index.js";

const inputSearch = document.querySelector("#search");
const fullContainer = document.querySelector(".full-container");

const tagElements = document.querySelectorAll(".element");

// Create an error message element to display when no recipes match the search
const errorMessage = document.createElement("p");
errorMessage.classList.add("error-message");
errorMessage.textContent =
  "Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson » etc.";

// Function to display filtered recipes
function displayFilteredRecipes(filteredRecipes) {
  // Show all filtered recipes
  displayAllRecipe(filteredRecipes);
  // Update filter items based on filtered recipes
  updateFilterElements(filteredRecipes);

  // If no recipe matches the search, display the error message
  if (filteredRecipes.length === 0) {
    fullContainer.appendChild(errorMessage);
  } else {
    // Otherwise, suppress the error message if present
    if (errorMessage.parentNode === fullContainer) {
      fullContainer.removeChild(errorMessage);
    }
  }
}
// Add an "input" event handler to the search element to filter recipes in real time
inputSearch.addEventListener("input", () => {
  const filteredRecipes = filterRecipes();
  displayFilteredRecipes(filteredRecipes);
});

// Add "click" event handlers to each element to create tags and filter recipes
tagElements.forEach((element) => {
  element.addEventListener("click", () => {
    // Create tag from clicked tag
    createTag(element);
    // Filter recipes based on active tags
    const filteredRecipes = filterRecipes();
    displayFilteredRecipes(filteredRecipes);

    const close = document.querySelectorAll(".close-tag");
    close.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        element.style.display = "block";
        e.target.closest("div").remove();
        const filteredRecipes = filterRecipes();
        displayFilteredRecipes(filteredRecipes);
      });
    });
  });
});
