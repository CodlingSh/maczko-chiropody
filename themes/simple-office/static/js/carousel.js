class Carousel {
    constructor() {
        this.testimonialSection = document.getElementById("testimonial_section"); 
        this.numItems = document.querySelector("#testimonial_section").children.length / 3;
        this.itemWidth = this.calcItemWidth();
        this._itemIndex = 0;
        this.leftShift = this.calcLeftShift();
        
        this.initialPosition();
    }
    // Getters
    get itemIndex() {
        return this._itemIndex;
    }

    // Setters
    set itemIndex(value) {
        this._itemIndex = value;
        this.itemWidth = this.calcItemWidth();
        this.leftShift = this.calcLeftShift();

        this.testimonialSection.style.transform = "translateX(" + (((this.itemWidth * this.numItems - this.leftShift) + (this._itemIndex * this.itemWidth)) * -1) +"px)"

        console.log(`Initial value is ${value}`);

        if (this._itemIndex === -1 || this._itemIndex === 7) {
            if (this._itemIndex === -1) {
                this._itemIndex = 6;
                this.testimonialSection.style.transform = "translateX(" + (((this.itemWidth * this.numItems - this.leftShift) + (this._itemIndex * this.itemWidth)) * -1) +"px)"
            } else if (this._itemIndex === 7) {
                this._itemIndex = 0;
                this.testimonialSection.style.transform = "translateX(" + (((this.itemWidth * this.numItems - this.leftShift) + (this._itemIndex * this.itemWidth)) * -1) +"px)"
            }
        }

        console.log(`final value is ${value}`);
    }

    // Methods
    calcItemWidth() {
        const testimonial = document.getElementsByClassName("testimonial")[0];
        const computedStyle = window.getComputedStyle(testimonial);
    
        return testimonial.offsetWidth + parseFloat(computedStyle.getPropertyValue("margin-right").slice(0, -2) * 2);
    }

    calcLeftShift() {
        const testimonialWidth = this.itemWidth;
        const screenWidth = window.innerWidth;

        return (screenWidth - testimonialWidth) / 2;
    }

    initialPosition() {
        this.testimonialSection.style.transform = "translateX(-" + (this.itemWidth * this.numItems - this.leftShift) + "px)";
    }
}


const testimonialCarousel = new Carousel();
console.log(testimonialCarousel.itemWidth);
console.log(testimonialCarousel);


document.getElementById("left_btn").addEventListener("click", () => {
    console.log("fuhgma");
    --testimonialCarousel.itemIndex});
document.getElementById("right_btn").addEventListener("click",  () => {++testimonialCarousel.itemIndex});