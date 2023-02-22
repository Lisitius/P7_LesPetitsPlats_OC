// // Retrieve search field HTML element
// const inputSearch = document.querySelector("#search");

// // Retrieve full-container HTML element
// const fullContainer = document.querySelector(".full-container");

// // Retrieve error message HTML element
// const errorMessage = document.createElement("p");
// errorMessage.classList.add("error-message");
// errorMessage.textContent = "Aucune recette ne correspond à votre recherche.";

// // Add an event listener to listen for user input changes
// inputSearch.addEventListener("input", () => {
//   // Retrieve the value entered by the user
//   const searchValue = inputSearch.value.toLowerCase();

//   // Filter the recipes array to retrieve all recipes that have the name, ingredients, or description that match the entered value

//   if (searchValue.length < 3) {
//     displayAllRecipe(recipes);
//     // Hide error message if it is displayed
//     if (errorMessage.parentNode === fullContainer) {
//       fullContainer.removeChild(errorMessage);
//     }
//   } else {
//     // Create an array to store the filtered recipes
//     const filteredRecipes = [];
//     // Loop through each recipe in the recipes array
//     for (let i = 0; i < recipes.length; i++) {
//       const recipe = recipes[i];
//       const name = recipe.name.toLowerCase();
//       const ingredients = recipe.ingredients.map((ingredient) =>
//         ingredient.ingredient.toLowerCase()
//       );
//       const description = recipe.description.toLowerCase();
//       //Check if the name or ingredient or description of each recipe contains the value entered by the user in the search field
//       if (
//         name.includes(searchValue) ||
//         ingredients.includes(searchValue) ||
//         description.includes(searchValue)
//       ) {
//         // If the recipe matches the search, add it to the filteredRecipes array
//         filteredRecipes.push(recipe);
//       }
//     }
//     // Pass the filtered array to the displayAllRecipe function to display the results
//     displayAllRecipe(filteredRecipes);
//     // Display error message if no recipes match the search
//     if (filteredRecipes.length === 0) {
//       fullContainer.appendChild(errorMessage);
//     } else {
//       // Hide error message if it is displayed
//       if (errorMessage.parentNode === fullContainer) {
//         fullContainer.removeChild(errorMessage);
//       }
//     }
//   }
// });

// Récupérer l'élément HTML du champ de recherche
const inputSearch = document.querySelector("#search");

// Récupérer l'élément HTML du conteneur complet
const fullContainer = document.querySelector(".full-container");

// Créer un élément HTML de message d'erreur
const errorMessage = document.createElement("p");
errorMessage.classList.add("error-message");
errorMessage.textContent = "Aucune recette ne correspond à votre recherche.";

// Ajouter un écouteur d'événements pour surveiller les changements de l'utilisateur dans le champ de recherche
inputSearch.addEventListener("input", () => {
  // Récupérer la valeur entrée par l'utilisateur
  const searchValue = inputSearch.value.toLowerCase();

  // Filtrer le tableau de recettes pour récupérer toutes les recettes qui ont le nom, les ingrédients, ou la description qui correspondent à la valeur entrée

  if (searchValue.length < 3) {
    displayAllRecipe(recipes);
    // Cacher le message d'erreur s'il est affiché
    if (errorMessage.parentNode === fullContainer) {
      fullContainer.removeChild(errorMessage);
    }
  } else {
    // Créer un tableau pour stocker les recettes filtrées
    const filteredRecipes = [];
    // Parcourir chaque recette dans le tableau de recettes
    for (let i = 0; i < recipes.length; i++) {
      const recipe = recipes[i];
      const name = recipe.name.toLowerCase();
      const ingredients = [];
      // Parcourir chaque ingrédient de la recette et ajouter son nom en minuscules au tableau "ingredients"
      for (let j = 0; j < recipe.ingredients.length; j++) {
        ingredients.push(recipe.ingredients[j].ingredient.toLowerCase());
      }
      const description = recipe.description.toLowerCase();
      // Vérifier si le nom, les ingrédients, ou la description de chaque recette contient la valeur entrée par l'utilisateur dans le champ de recherche
      if (
        name.includes(searchValue) ||
        ingredients.includes(searchValue) ||
        description.includes(searchValue)
      ) {
        // Si la recette correspond à la recherche, l'ajouter au tableau de recettes filtrées
        filteredRecipes.push(recipe);
      }
    }
    // Passer le tableau filtré à la fonction displayAllRecipe pour afficher les résultats
    displayAllRecipe(filteredRecipes);
    // Afficher le message d'erreur si aucune recette ne correspond à la recherche
    if (filteredRecipes.length === 0) {
      fullContainer.appendChild(errorMessage);
    } else {
      // Cacher le message d'erreur s'il est affiché
      if (errorMessage.parentNode === fullContainer) {
        fullContainer.removeChild(errorMessage);
      }
    }
  }
});
