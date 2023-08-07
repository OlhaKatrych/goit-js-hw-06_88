const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const arrIngredients = []

function createIngredients(arr){

arr.map((item) => {

  const liIngredients = document.createElement('li');

  liIngredients.classList.add('item');
  liIngredients.textContent = item;
  arrIngredients.push(liIngredients)
  
})

list.append(...arrIngredients);

}

createIngredients(ingredients)
