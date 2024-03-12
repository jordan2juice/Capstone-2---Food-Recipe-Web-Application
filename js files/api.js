"use strict";

const BASE_URL = "https://my-proxy-server-rkxw.onrender.com/search"; // backend url

// class for recipes //s
class Recipe {
  constructor(recipeData) {
    this.id = recipeData.id;
    this.title = recipeData.title;
    this.image = recipeData.image;
  }
}

// async function for getting data for a recipe //
async function getRecipe(search) {
  try {
    const response = await fetch(`${BASE_URL}?query=${search}`);
    const data = await response.json();
    const recipes = data.results.map((recipeData) => new Recipe(recipeData));
    console.log(recipes);
    displayRecipeToDom(recipes);
  } catch (error) {
    console.log(error);
  }
}

// EVENT LISTENERS for my recipes //

function displayRecipeToDom(recipes) {
  const recipeResults = document.getElementById("recipeResults");
  recipeResults.innerHTML = "";
  recipes.forEach((recipe) => {
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");
    recipeDiv.innerHTML = `
          <h2>${recipe.title}</h2>
          <img src="${recipe.image}" alt="${recipe.title}">
      `;
    recipeResults.appendChild(recipeDiv);
  });
}

// EVENT LISTENERS for my search bar //
const searchBar = document.getElementById("input-box");

searchBar.addEventListener("keyup", (event) => {
  if (event.code === "Enter") {
    event.preventDefault();
    const userSearchTerm = searchBar.value;
    searchBar.value = "";
    getRecipe(userSearchTerm);
  }
});

// EVENT LISTENERS for my search button
document.querySelector("#search-btn").addEventListener("click", () => {
  const userSearchTerm = searchBar.value;
  searchBar.value = "";
  getRecipe(userSearchTerm);
});
