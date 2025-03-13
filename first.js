// Fetch the Categories
function loadCategories (){
                // --- Fetch the Data
               fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
                                // --- Convert promise to JSON ---
                                .then((response) => response.json())
                                // --- send the data to Display
                                .then((data) =>displayCategories(data.categories));
}
function displayCategories (categories){
                console.log(categories)
}
loadCategories();