class Carousel {
    constructor(testimonialSection, itemWidth, itemIndex, leftShift, numItems) {
        this.testimonialSection = document.getElementById("testimonial_section"); 
        this.numItems = document.querySelector("#testimonial_section").children.length / 3;
        this.itemWidth = this.calcItemWidth;
        this.itemIndex = 0;
        this.leftShift = this.calcLeftShift();     
    }
    // Getters
    get testimonialSection() {
        return this.testimonialSection;
    }

    get itemWidth() {
        return this.itemWidth;
    }

    get itemIndex() {
        return this.itemIndex;
    }

    get leftShift() {
        return this.leftShift;
    }

    // Setters
    set itemIndex(itemIndex) {
        this.itemIndex = itemIndex;
    }

    // Methods
    calcItemWidth(itemWidth) {
        const testimonial = document.getElementsByClassName("testimonial")[0];
        const computedStyle = window.getComputedStyle(testimonial);
    
        this.itemWidth = testimonial.offsetWidth + parseFloat(computedStyle.getPropertyValue("margin-right").slice(0, -2) * 2);
    }

    calcLeftShift() {
        const testimonialWidth = this.itemWidth();
        const screenWidth = window.innerWidth;

        this.leftShift = (screenWidth - testimonialWidth) / 2;
    }

    initialPosition() {
        this.testimonialSection.style.transform = "translateX(-" + (this.itemWidth * this.numItems - this.leftShift) + "px)";
    }


}