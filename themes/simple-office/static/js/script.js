"use strict";
// Global variables
let scrollIndex = 0;

// Function to control the nav menu
function navToggle() {
    const navMenu = document.getElementById("nav_menu");
    const opacityLayer = document.getElementById("opacity_layer");

    // Disable to scrolling
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

// Function to control shifting the testimonial to the right
function testimonialShift(direction) {
    const testimonialSection = document.getElementById("testimonial_section");
    const currentScrollPos = testimonialSection.scrollLeft;
    const screenSize = window.innerWidth;
    // let futureScrollPos;
    
    if (direction === "right") {
        console.log("ligma")
        scrollIndex += 1;
        testimonialSection.style.transform = "translateX(-" + (554.5 + (794 * scrollIndex)) + "px)";
        console.log(554.5 + (794 * scrollIndex));
        // testimonialSection.scroll({left: currentScrollPos + screenSize, behavior: "smooth"});
    } else if (direction === "left") {
        // testimonialSection.scroll({left: currentScrollPos - screenSize, behavior: "smooth"});
    }
}

// Click events
document.getElementById("burger").addEventListener("click", navToggle);
document.getElementById("opacity_layer").addEventListener("click", navToggle);
document.getElementById("left_btn").addEventListener("click", () => {testimonialShift("left")});
document.getElementById("right_btn").addEventListener("click", () => {testimonialShift("right")});

console.log(document.body.style.overflowY);