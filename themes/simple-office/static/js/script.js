"use strict";

// Global variables
// let scrollIndex = 0;

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


// Get the width of all testimonials
function getTestimonialWidth() {
    const testimonial = document.getElementsByClassName("testimonial")[0];
    const computedStyle = window.getComputedStyle(testimonial);
    
    return testimonial.offsetWidth + parseFloat(computedStyle.getPropertyValue("margin-right").slice(0, -2) * 2);
}

// On load, scroll the testimonials to the second section to make the illusion of infinite spinning
function transitionTestimonial() {
    const leftShift = (window.innerWidth - getTestimonialWidth()) / 2;
    const numTestimonials = document.querySelector("#testimonial_section").children.length / 3;

    // return "translateX(-" + (numTestimonials * getTestimonialWidth()) + ")px";
    document.querySelector("#testimonial_section").style.transform = "translateX(-" + (796 * numTestimonials - leftShift) + "px)"
}

// Function to control shifting the testimonial to the right
function testimonialShift(direction) {
    const leftShift = (window.innerWidth - getTestimonialWidth()) / 2;
    const testimonialSection = document.getElementById("testimonial_section");
    const currentScrollPos = testimonialSection.scrollLeft;
    const screenSize = window.innerWidth;
    // let futureScrollPos;
    
    if (direction === "right") {
        scrollIndex += 1;
    } else if (direction === "left") {
        scrollIndex -= 1;
    }

    testimonialSection.style.transform = "translateX(" + (796 * scrollIndex * -1) + "px)";

    console.log(testimonialSection.style.transform);
}

// Click events
document.getElementById("burger").addEventListener("click", navToggle);
document.getElementById("opacity_layer").addEventListener("click", navToggle);
// document.getElementById("left_btn").addEventListener("click", () => {testimonialShift("left")});
// document.getElementById("right_btn").addEventListener("click", () => {testimonialShift("right")});

// window.addEventListener("load", transitionTestimonial);

console.log(document.body.style.overflowY);