document.addEventListener("DOMContentLoaded", function () {
    // Set the time interval for the carousel (2 seconds)
    const carouselInterval = 2000;

    // Get references to the relevant elements
    const imageCarousel = document.querySelector("#image-carousel");
    const careerFieldSelect = document.querySelector("#career-field");
    const nextButton = document.querySelector("#next-button");

    // Create a map of career field values to their respective HTML pages
    const careerFieldToPage = {
        datasci: "datasci.html",
        entp: "entp.html",
        developer: "developer.html",
    };

    // Attach an event listener to the "Next" button to redirect to the selected career field page
    nextButton.addEventListener("click", function () {
        const selectedCareerField = careerFieldSelect.value;
        const selectedPage = careerFieldToPage[selectedCareerField];
        
        if (selectedPage) {
            window.location.href = selectedPage;
        }
    });

    // Enable the carousel with a 2-second interval
    const myCarousel = new bootstrap.Carousel(imageCarousel, {
        interval: carouselInterval,
    });
});