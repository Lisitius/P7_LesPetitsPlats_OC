const filterTags = document.querySelector(".add-tags");

// // Function to create a new tag
function createTag(el) {
  const categorie = el.getAttribute("categorie");
  // If the category is not defined, do not create a tag
  if (!categorie) return;

  // Create a new div element for the tag
  const tag = document.createElement("div");
  // Add the "tags" class to the div
  tag.classList.add("tags");
  // Define the "categorie" attribute
  tag.setAttribute("categorie", categorie);
  // Set tag background color based on categorie
  tag.style.background = getTagBackgroundColor(categorie);
  // Define the HTML content of the tag, including the text and the close button
  tag.innerHTML = `<p class="tag-text">${el.innerText}<i class="close-tag fa-regular fa-circle-xmark"></i></p>`;

  // Add the created tag to the "add-tags" class
  filterTags.appendChild(tag);
  el.style.display = "none";
}

// Function to determine the background color of a tag based on its categorie
function getTagBackgroundColor(categorie) {
  if (categorie === "ingredient") {
    return "#3282F7";
  } else if (categorie === "appliance") {
    return "#68D9A4";
  } else if (categorie === "ustensil") {
    return "#ED6454";
  }
}

export { createTag };
