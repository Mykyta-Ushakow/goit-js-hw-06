const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUl = document.querySelector("#ingredients");
const ingredientsList = [];

const itemsArray = ingredients.forEach(makeLi);

function makeLi(ingredient) {
  const ingredientItem = document.createElement("li");
  ingredientItem.classList.add('item');
  ingredientItem.textContent = ingredient;
  ingredientsList.push(ingredientItem);
}

ingredientsUl.append(...ingredientsList);