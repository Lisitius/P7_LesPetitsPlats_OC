// // get search field HTML element
// const inputSearch = document.querySelector("#search");

// // Add an event listener to detect user input changes
// inputSearch.addEventListener("input", () => {
//   // Retrieve the value entered by the user and put it in lowercase
//   const searchValue = inputSearch.value.toLowerCase();

//   // Create an empty array to store recipes
//   let filteredRecipes = [];

//   // check the recipe table and add matching recipes to the search in the filtered table
//   recipes.forEach((recipe) => {
//     // Retrieve the recipe name, ingredients and description and put them in lowercase
//     const name = recipe.name.toLowerCase();
//     const ingredients = recipe.ingredients.map((ingredient) =>
//       ingredient.ingredient.toLowerCase()
//     );
//     const description = recipe.description.toLowerCase();
//     // Check if the name, ingredients or description contains the entered value
//     if (
//       name.includes(searchValue) ||
//       ingredients.includes(searchValue) ||
//       description.includes(searchValue)
//     ) {
//       // Add the check recipe in the filtered table
//       filteredRecipes.push(recipe);
//     }
//   });

//   // If the value entered is less than 3 characters, display all recipes
//   if (searchValue.length < 3) {
//     displayAllRecipe(recipes);
//   } else {
//     // Else, display the recipes corresponding to the search
//     displayAllRecipe(filteredRecipes);
//   }
// });

// Retrieve search field HTML element
const inputSearch = document.querySelector("#search");

// Retrieve full container HTML element
const fullContainer = document.querySelector(".full-container");

// Retrieve error message HTML element
const errorMessage = document.createElement("p");
errorMessage.classList.add("error-message");
errorMessage.textContent = "Aucune recette ne correspond à votre recherche.";

// Add an event listener to listen for user input changes
inputSearch.addEventListener("input", () => {
  // Retrieve the value entered by the user
  const searchValue = inputSearch.value.toLowerCase();

  // Filter the recipes array to retrieve all recipes that have the name, ingredients, or description that match the entered value

  if (searchValue.length < 3) {
    displayAllRecipe(recipes);
    // Hide error message if it is displayed
    if (errorMessage.parentNode === fullContainer) {
      fullContainer.removeChild(errorMessage);
    }
  } else {
    // Create an array to store the filtered recipes
    const filteredRecipes = [];
    // Loop through each recipe in the recipes array
    recipes.forEach((recipe) => {
      const name = recipe.name.toLowerCase();
      const ingredients = recipe.ingredients.map((ingredient) =>
        ingredient.ingredient.toLowerCase()
      );
      const description = recipe.description.toLowerCase();
      //Check if the name or ingredient or description of each recipe contains the value entered by the user in the search field
      if (
        name.includes(searchValue) ||
        ingredients.includes(searchValue) ||
        description.includes(searchValue)
      ) {
        // If the recipe matches the search, add it to the filteredRecipes array
        filteredRecipes.push(recipe);
      }
    });
    // Pass the filtered array to the displayAllRecipe function to display the results
    displayAllRecipe(filteredRecipes);
    // Display error message if no recipes match the search
    if (filteredRecipes.length === 0) {
      fullContainer.appendChild(errorMessage);
    } else {
      // Hide error message if it is displayed
      if (errorMessage.parentNode === fullContainer) {
        fullContainer.removeChild(errorMessage);
      }
    }
  }
});
