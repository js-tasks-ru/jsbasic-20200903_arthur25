function initCarousel() {
  const arrowRight = document.querySelector(".carousel__arrow_right");
  const arrowLeft = document.querySelector(".carousel__arrow_left");
  const carouselConteiner = document.querySelector(".carousel__inner");
  const carouselSlide = document.querySelectorAll(".carousel__slide");

  let widthSlide = carouselConteiner.offsetWidth;
  let sumWidthSlides = 0;
  let count = 0;

  function getStatusButton(count) {
    switch (count) {
      case carouselSlide.length - 1:
        arrowRight.style.display = "none";
        break;
      case carouselSlide.length - 2:
        arrowRight.style.display = "";
        break;
      case 1:
        arrowLeft.style.display = "";
        break;
      case 0:
        arrowLeft.style.display = "none";
        break;
      default:
        arrowLeft.style.display = "none";
        break;
    }
  }

  getStatusButton();

  arrowRight.addEventListener("click", function () {
    sumWidthSlides += widthSlide;
    carouselConteiner.style.transform = `translateX(-${sumWidthSlides}px)`;

    count++;

    getStatusButton(count);
  });

  arrowLeft.addEventListener("click", function () {
    sumWidthSlides -= widthSlide;
    carouselConteiner.style.transform = `translateX(-${sumWidthSlides}px)`;

    count--;

    getStatusButton(count);
  });
}
