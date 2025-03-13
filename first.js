// Fetch the Categories
function loadCategories (){
                // --- Fetch the Data
               fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
                                // --- Convert promise to JSON ---
                                .then((response) => response.json())
                                // --- send the data to Display
                                .then((data) =>displayCategories(data.categories));
}

// sample things
// {
//                 "category_id": "1001",
//                 "category": "Music"
//                 }



function displayCategories (categories){

                // --- Get the Container ---
               const categoryContainer = document.getElementById('category-container');

               // --- loop operation of array of object ---
               for(cat of categories){
                console.log(cat);

                // --- create element ---
                const categoryDiv =document.createElement('div');
               categoryDiv.innerHTML = `<button class="btn btn-sm hover:bg-red-600 hover:text-white">${cat.category}</button>`;

               // --- append the created element ---
               categoryContainer.append(categoryDiv);
               }  
}
loadCategories();