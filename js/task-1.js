const categories = document.querySelector("#categories")
const categoriesArray = [...document.querySelectorAll(".item")];

console.log(`Number of categories: ${categories.childElementCount}`);

categoriesArray.forEach(item => {
    const title = item.querySelector(".title").textContent;
    const count = item.querySelector(".categories-list").childElementCount;
    console.log(`Category: ${title}`)
    console.log(`Elements: ${count}`); 
}
)   



