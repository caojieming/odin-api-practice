const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");
const img = document.querySelector("img");
            
// fetch("https://api.giphy.com/v1/gifs/translate?api_key=04eKjgolLioPm4hCES39hRYlsB3ZhNmA&s=cats")
//     // first response = a promise (for the data we are looking for)
//     .then(function(response) {
//         return response.json();
//     })
//     // second response = the data we are looking for (returned from the previous promise)
//     .then(function(response) {
//         // gets the image url
//         const cat = response.data.images.original.url
//         console.log(cat);
//         img.src = cat;
//     });

searchBtn.addEventListener("click", searchForImg);

function searchForImg() {
    const subject = searchInput.value;
    
    fetch("https://api.giphy.com/v1/gifs/translate?api_key=04eKjgolLioPm4hCES39hRYlsB3ZhNmA&s=" + subject)
        // first response = a promise (for the data we are looking for)
        .then(function(response) {
            return response.json();
        })
        // second response = the data we are looking for (returned from the previous promise)
        .then(function(response) {
            // gets the image url
            const imgURL = response.data.images.original.url
            // console.log(imgURL);
            img.src = imgURL;

            // unhide img element
            img.style.display = "block";
        })
        .catch(function(err) {
            console.log("Error: " + err);
        });
}
