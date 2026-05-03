let prevButton = document.querySelector(".leftBTN");
let nextButton = document.querySelector(".rightBTN");
nextButton.addEventListener("click", function () {
    let currentSlide = document.querySelector(".onePosition.active");
    let newSlide = currentSlide.nextElementSibling;
    if (!newSlide.classList.contains("onePosition")) {
        newSlide = document.querySelector(".imageParent").firstElementChild;
    }
    currentSlide.classList.remove("active");
    newSlide.classList.add("active");
});
prevButton.addEventListener("click", function () {
    let currentSlide = document.querySelector(".onePosition.active");
    let newSlide = currentSlide.previousElementSibling;
    if (!newSlide) {
        newSlide = document.querySelector(".thirdImageInParent");
    }
    currentSlide.classList.remove("active");
    newSlide.classList.add("active");
});
