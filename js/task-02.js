const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

const items = ingredients.map((ingredient) => {
    const listItem = document.createElement("li");
    listItem.textContent = ingredient;
    listItem.classList.add("item");
    return listItem;
});

ingredientsList.append(...items);