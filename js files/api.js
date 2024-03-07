'use strict';

const BASE_URL = 'https://api.spoonacular.com/recipes/'
const apiKey = 'c578d03c8a87421a8208184bda89301b'

class Recipe {
    constructor(recipeData) {
        this.id = recipeData.id;
        this.title = recipeData.title;
        this.image = recipeData.image;
    }
}

async function getRecipe(search) {
    try {
        const response = await fetch(`${BASE_URL}?apiKey=${apiKey}&complexSearch=${search}`);
        const data = await response.json();
        const recipe = new Recipe(data);
        console.log (recipe)
        return recipe;
        
    } catch(error) {
        console.log (error)
    }
}