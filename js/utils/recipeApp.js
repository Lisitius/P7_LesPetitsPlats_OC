import { displayAllRecipe } from "../index.js";
import { createTag } from "./createTag.js";
import { filterRecipes } from "./searchRecipes.js";
import { updateFilterElements } from "./updateFilterElements.js";

const inputSearch = document.querySelector("#search");
const fullContainer = document.querySelector(".full-container");

const tagElements = document.querySelectorAll(".element");

const errorMessage = document.createElement("p");
errorMessage.classList.add("error-message");
errorMessage.textContent =
  "Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson » etc...";

function displayFilteredRecipes(filteredRecipes) {
  displayAllRecipe(filteredRecipes);
  updateFilterElements(filteredRecipes);

  if (filteredRecipes.length === 0) {
    fullContainer.appendChild(errorMessage);
  } else {
    if (errorMessage.parentNode === fullContainer) {
      fullContainer.removeChild(errorMessage);
    }
  }
}

inputSearch.addEventListener("input", () => {
  const filteredRecipes = filterRecipes();
  displayFilteredRecipes(filteredRecipes);
});

tagElements.forEach((element) => {
  element.addEventListener("click", () => {
    createTag(element);
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
