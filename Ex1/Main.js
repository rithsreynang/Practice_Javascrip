// Get references to the DOM elements
const lightImage = document.getElementById("imglight");
const lightOffButton = document.getElementById("offButton");
const lightOnButton = document.getElementById("onButton");

// Create an image element and append it to the lightImage container
const img = document.createElement("img");
img.src = "https://upload.wikimedia.org/wikipedia/commons/6/64/Simple_light_bulb_graphic.png";
lightImage.appendChild(img);

// Define the URLs for the light bulb images
const lightOnSrc = "https://png.pngtree.com/png-clipart/20220911/original/pngtree-shining-bright-light-bulb-png-image_8539561.png";
const lightOffSrc = "https://upload.wikimedia.org/wikipedia/commons/6/64/Simple_light_bulb_graphic.png";

// Add event listeners for turning the light on and off
lightOnButton.addEventListener("click", () => {
  img.src = lightOnSrc;
});

lightOffButton.addEventListener("click", () => {
  img.src = lightOffSrc;
});
