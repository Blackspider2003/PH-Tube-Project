// Fetch the Categories
function loadCategories (){
                // --- Fetch the Data
               fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
                                // --- Convert promise to JSON ---
                                .then((response) => response.json())
                                // --- send the data to Display
                                .then((data) =>displayCategories(data.categories));
}

// --- Fetch the Videos ---
function loadVideos () {
                // --- fetch the data
                fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
                // --- convert promise to JSON ---
                .then((response) => response.json())
                // --- send the date to display ---
                .then((data) => displayVideos(data.videos));
}


// --- Display the categories ---
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

// ---Sample things

// {
//                 "category_id": "1001",
//                 "video_id": "aaaa",
//                 "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//                 "title": "Shape of You",
//                 "authors": [
//                 {
//                 "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//                 "profile_name": "Olivia Mitchell",
//                 "verified": ""
//                 }
//                 ],
//                 "others": {
//                 "views": "100K",
//                 "posted_date": "16278"
//                 },
//                 "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
//                 }

// --- Display the Videos ---
const displayVideos =(videos)=>{
                 // --- Get the Container ---
                const videoContainer = document.getElementById('video-container');

                // --- loop operation of array of object ---

                videos.forEach((video) => {
                                console.log(video);

                                 // --- create element ---
                                 const videoCard = document.createElement('div')
                                videoCard.innerHTML = `   <div class="card bg-base-100">
                                      <figure class="relative">
                                        <img
                                          src="${video.thumbnail}"
                                          alt="Shoes" />
                                          <span class="bg-black text-white text-sm px-2 py-1 absolute bottom-2 right-2 rounded">3hrs 56 min ago</span>
                                      </figure>
                                      <div class="flex gap-3 px-0 py-5">
                                        <div class="profile">
                                          <div class="avatar">
                                            <div class="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                                              <img src="${video.authors[0].profile_picture}" />
                                            </div>
                                          </div>
                                        </div>
                                        <div class="intro">
                                          <h2 class="font-bold text-[#171717] text-sm">${video.title}</h2>
                                          <p class="flex gap-5 text-[#17171770] text-sm">${video.authors[0].profile_name}
                                            <img class="w-6 h-6" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt="">
                                          </p>
                                          <p class="text-[#17171770] text-sm">${video.others.views}</p>
                                        </div>
                                      </div>
                                    </div>`

// --- Append the created element

videoContainer.append(videoCard);
                })


}


loadCategories();
loadVideos();