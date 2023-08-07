
const li = document.querySelectorAll('.item');
console.log(`Number of categories: ${li.length}`);


li.forEach((elem) => {
   
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(`Elements: ${elem.lastElementChild.children.length}`);

})









   