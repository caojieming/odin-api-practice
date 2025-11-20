const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");
const img = document.querySelector("img");
const API_KEY = "04eKjgolLioPm4hCES39hRYlsB3ZhNmA";



searchBtn.addEventListener("click", searchForImg);

function searchForImg() {
    const subject = searchInput.value;
    
    fetch("https://api.giphy.com/v1/gifs/translate?api_key=" + API_KEY + "&s=" + subject)
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



// same function, but made using await/async, generally neater looking
async function searchForImg() {
    try {
        const subject = searchInput.value;

        // response is a promise
        const response = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=" + API_KEY + "&s=" + subject);
        // imgData waits for + obtains json data from the promise
        const imgData = await response.json();

        // gets the image url
        const imgURL = imgData.data.images.original.url
        // console.log(imgURL);
        img.src = imgURL;

        // unhide img element
        img.style.display = "block";
    }
    catch(err) {
        console.log("Error: " + err);
    }
}
