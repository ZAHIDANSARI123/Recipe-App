const searchBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector('.searchBtn');
const recipeContainer = document.querySelector('.recipe-container');


const fetchRecipes = async (query) => {
    recipeContainer.innerHTML = "<h2>Fetchig Recipes...</h2>";
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await data.json();
    //console.log(response);


    recipeContainer.innerHTML = "";
    response.meals.forEach(meal => {
        
        
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');
            recipeDiv.innerHTML = `
            <img src="${meal.strMealThumb}"> 
            <h3>${meal.strMeal}</h3>
            <p><span>${meal.strArea}</span> Dish</p>
            <p>Belong to <span>${meal.strCategory}</span> Category</p>
            

            `

            const Button = document.createElement('button');
            Button.textContent = "View Recipe";
            recipeDiv.appendChild(Button);


            
    
            recipeContainer.appendChild(recipeDiv);

         });
}

 
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    fetchRecipes(searchInput);
    //console.log("Button Click");
})