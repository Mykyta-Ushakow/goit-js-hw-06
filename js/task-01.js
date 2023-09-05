const categories = document.querySelector("#categories");
const numOfCategories = categories.children.length;
const categoryLists = document.querySelectorAll("#categories > .item > ul");
const categoryNames = document.querySelectorAll("#categories > .item > h2");

console.log(`Number of categories: ${numOfCategories}\n `);

categoryLists.forEach((category, index) => {
    console.log(`Category: ${categoryNames[index].textContent}`)
    console.log(`Elements: ${category.children.length}\n `)
})
