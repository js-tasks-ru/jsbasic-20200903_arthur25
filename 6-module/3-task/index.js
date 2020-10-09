import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;

    this.getCarousel();
    this.addEventListeners();
  }

  getCarousel() {
    this.elem = document.createElement("div");
    this.setAttr(this.elem, { class: "carousel" });

    let carouselInner = document.createElement("div");
    this.setAttr(carouselInner, { class: "carousel__inner" });

    const arrowRight = document.createElement("div");
    const arrowRightImg = document.createElement("img");
    this.setAttr(arrowRight, {
      class: "carousel__arrow carousel__arrow_right",
    });
    this.setAttr(arrowRightImg, {
      src: "/assets/images/icons/angle-icon.svg",
      alt: "icon",
    });

    const arrowLeft = document.createElement("div");
    const arrowLeftImg = document.createElement("img");
    this.setAttr(arrowLeft, {
      class: "carousel__arrow carousel__arrow_left",
    });
    this.setAttr(arrowLeftImg, {
      src: "/assets/images/icons/angle-left-icon.svg",
      alt: "icon",
    });

    this.elem.prepend(arrowLeft);
    arrowLeft.appendChild(arrowLeftImg);
    this.elem.prepend(arrowRight);
    arrowRight.appendChild(arrowRightImg);
    this.elem.appendChild(carouselInner);
    carouselInner.appendChild(this.getSlides());

    this.initCarousel(this.slides, carouselInner, arrowRight, arrowLeft);
    return this.elem;
  }

  addEventListeners() {
    this.elem.onclick = ({ target }) => {
      let button = target.closest(".carousel__button");
      if (button) {
        let id = target.closest("[data-id]").dataset.id;
        this.elem.dispatchEvent(
          new CustomEvent("product-add", {
            detail: id,
            bubbles: true,
          })
        );
      }
    };
  }

  getSlides() {
    let count = this.slides.length;
    let fragment = document.createDocumentFragment();

    for (let i = 0; count > i; i++) {
      fragment.appendChild(
        this.getSlide(
          this.slides[i].name,
          this.slides[i].price,
          this.slides[i].image,
          this.slides[i].id
        )
      );
    }

    return fragment;
  }

  getSlide(name, price, image, id) {
    let carouselSlide = document.createElement("div");
    this.setAttr(carouselSlide, { class: "carousel__slide" });
    carouselSlide.setAttribute("data-id", `${id}`);

    let carouselImg = document.createElement("img");
    this.setAttr(carouselImg, {
      src: `/assets/images/carousel/${image}`,
      class: "carousel__img",
      alt: "slide",
    });

    let carouselCaption = document.createElement("div");
    this.setAttr(carouselCaption, { class: "carousel__caption" });

    let carouselPrice = document.createElement("span");
    let carouselPriceText = document.createTextNode("€" + price.toFixed(2));
    this.setAttr(carouselPrice, { class: "carousel__price" });

    let carouselTitle = document.createElement("div");
    let carouselTitleText = document.createTextNode(name);
    this.setAttr(carouselTitle, { class: "carousel__title" });

    let carouselButton = document.createElement("button");
    this.setAttr(carouselButton, { class: "carousel__button", type: "button" });

    let carouselButtonImg = document.createElement("img");
    this.setAttr(carouselButtonImg, {
      src: "/assets/images/icons/plus-icon.svg",
      alt: "icon",
    });

    carouselSlide.prepend(carouselImg);
    carouselSlide.appendChild(carouselCaption);
    carouselCaption.prepend(carouselTitle);
    carouselCaption.prepend(carouselPrice);
    carouselCaption.appendChild(carouselButton);
    carouselButton.prepend(carouselButtonImg);
    carouselPrice.appendChild(carouselPriceText);
    carouselTitle.appendChild(carouselTitleText);

    return carouselSlide;
  }

  initCarousel(arr, inner, arrowRight, arrowLeft) {
    let sumWidthSlides = 0;
    let count = 0;

    function getStatusButton(count) {
      switch (count) {
        case arr.length - 1:
          arrowRight.style.display = "none";
          break;
        case arr.length - 2:
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
      sumWidthSlides += inner.offsetWidth;
      inner.style.transform = `translateX(-${sumWidthSlides}px)`;

      count++;

      getStatusButton(count);
    });

    arrowLeft.addEventListener("click", function () {
      sumWidthSlides -= inner.offsetWidth;
      inner.style.transform = `translateX(-${sumWidthSlides}px)`;

      count--;

      getStatusButton(count);
    });
  }

  setAttr(elem, atrObj) {
    let count = Object.keys(atrObj).length;

    for (let i = 0; count > i; i++) {
      let objKey = Object.keys(atrObj)[i];
      let objVal = Object.values(atrObj)[i];

      if (objKey === "class") {
        elem.setAttribute(objKey, objVal);
      }

      if (objKey === "type") {
        elem.setAttribute(objKey, objVal);
      }

      if (objKey === "alt") {
        elem.setAttribute(objKey, objVal);
      }

      if (objKey === "src") {
        elem.setAttribute(objKey, objVal);
      }
    }

    return elem;
  }
}
