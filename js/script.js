const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

// connect to API
const getImage = async function(){
    const response = await fetch("https://picsum.photos/v2/list?limit=100");
    const images = await response.json();
    console.log(images);

    // select the image
    randomNumber(images);
    
}

// Call function to get result in the console.
// getImage();

// create a random number

const randomNumber = function(images){
    const randomIndex = Math.floor(Math.random() * images.length);
    // console.log(randomIndex);
    const imageObject = images[randomIndex];
    // console.log(imageObject);
    displayImage(imageObject);
}

const displayImage = function(imageObject){
    const url = imageObject.download_url;
    const author = imageObject.author;
    authorSpan.innerText = author;
    img.src = url;
}

button.addEventListener("click", function(){
    imgDiv.classList.remove("hide");
    getImage();
})