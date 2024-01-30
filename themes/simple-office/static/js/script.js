"use strict";

// Function to control the nav menu
function navToggle() {
    const navMenu = document.getElementById("nav_menu");
    const opacityLayer = document.getElementById("opacity_layer");

    // Disable to scrolling
    //TODO: Write this logic
    document.body.classList.toggle("overflow-y-hidden");

    // Toggle the opacity
    if (opacityLayer.classList.contains("opacity-0")) {
        opacityLayer.classList.add("opacity-50");
        opacityLayer.classList.remove("opacity-0");
    } else if (opacityLayer.classList.contains("opacity-50")) {
        opacityLayer.classList.add("opacity-0");
        opacityLayer.classList.remove("opacity-50");
    } else {
        console.log("error");
    }

    // Toggle the opacity layers pointer events
    opacityLayer.classList.toggle("pointer-events-none");

    // Move the nav menu
    navMenu.classList.toggle("translate-x-72");
}

// Click events
document.getElementById("burger").addEventListener("click", navToggle);
document.getElementById("opacity_layer").addEventListener("click", navToggle);

console.log(document.body.style.overflowY);