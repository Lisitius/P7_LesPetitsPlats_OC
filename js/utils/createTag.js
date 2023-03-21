const filterTags = document.querySelector(".add-tags");

function createTag(el) {
  const categorie = el.getAttribute("categorie");
  if (!categorie) return;

  const tag = document.createElement("div");
  tag.classList.add("tags");
  tag.setAttribute("categorie", categorie);
  tag.style.background = getTagBackgroundColor(categorie);
  tag.innerHTML = `<p class="tag-text">${el.innerText}<i class="close-tag fa-regular fa-circle-xmark"></i></p>`;

  filterTags.appendChild(tag);
  el.style.display = "none";
}

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
