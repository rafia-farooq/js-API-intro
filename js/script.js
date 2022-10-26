const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function(){
    const response = await fetch("https://picsum.photos/v2/list?limit=10");
    const image = await response.json();
    console.log(image);
}

getImage();