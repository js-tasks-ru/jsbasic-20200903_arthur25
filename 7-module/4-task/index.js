import createElement from "../../assets/lib/create-element.js";

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.segments = steps - 1;

    this.getElements();
    this.getEventListeners();
    this.getStepValue(value);
  }

  getEventListeners() {
    this.elem.querySelector(".slider__thumb").ondragstart = () => false;

    this.elem.querySelector(
      ".slider__thumb"
    ).onpointerdown = this.getCursorDown;

    this.elem.onclick = this.getClick;
  }

  getClick = (event) => {
    let newLeft =
      (event.clientX - this.elem.getBoundingClientRect().left) /
      this.elem.offsetWidth;

    this.getStepValue(Math.round(this.segments * newLeft));

    this.elem.dispatchEvent(
      new CustomEvent("slider-change", {
        detail: this.value,
        bubbles: true,
      })
    );
  };

  getStepValue(value) {
    this.value = value;

    let padding = (value / this.segments) * 100;

    this.elem.querySelector(".slider__thumb").style.left = `${padding}%`;
    this.elem.querySelector(".slider__progress").style.width = `${padding}%`;

    this.elem.querySelector(".slider__value").innerHTML = value;

    if (this.elem.querySelector(".slider__step-active")) {
      this.elem
        .querySelector(".slider__step-active")
        .classList.remove("slider__step-active");
    }

    this.elem
      .querySelector(".slider__steps")
      .children[this.value].classList.add("slider__step-active");
  }

  getElements() {
    this.elem = createElement(`
      <div class="slider">
        <div class="slider__thumb">
          <span class="slider__value"></span>
        </div>
        <div class="slider__progress"></div>
        <div class="slider__steps">
          ${"<span></span>".repeat(this.steps)}
        </div>
      </div>
    `);
  }

  getCursorDown = (event) => {
    event.preventDefault();

    this.elem.classList.add("slider_dragging");

    document.addEventListener("pointermove", this.getCursorMove);
    document.addEventListener("pointerup", this.getCursorUp);
  };

  getCursorMove = (event) => {
    event.preventDefault();

    let padding = this.getPaddingLeft(event);

    this.elem.querySelector(".slider__thumb").style.left = `${padding * 100}%`;
    this.elem.querySelector(".slider__progress").style.width = `${
      padding * 100
    }%`;

    this.value = Math.round(this.segments * padding);
    this.elem.querySelector(".slider__value").innerHTML = this.value;

    if (this.elem.querySelector(".slider__step-active")) {
      this.elem
        .querySelector(".slider__step-active")
        .classList.remove("slider__step-active");
    }

    this.elem
      .querySelector(".slider__steps")
      .children[this.value].classList.add("slider__step-active");
  };

  getPaddingLeft(event) {
    let paddingLeft =
      (event.clientX - this.elem.getBoundingClientRect().left) /
      this.elem.offsetWidth;

    if (paddingLeft < 0) {
      paddingLeft = 0;
    } else if (paddingLeft > 1) {
      paddingLeft = 1;
    }

    return paddingLeft;
  }

  getCursorUp = () => {
    document.removeEventListener("pointermove", this.getCursorMove);
    document.removeEventListener("pointerup", this.getCursorUp);

    this.elem.classList.remove("slider_dragging");

    this.elem.querySelector(".slider__thumb").style.left = `${
      (this.value / this.segments) * 100
    }%`;
    this.elem.querySelector(".slider__progress").style.width = `${
      (this.value / this.segments) * 100
    }%`;

    this.elem.dispatchEvent(
      new CustomEvent("slider-change", {
        detail: this.value,
        bubbles: true,
      })
    );
  };
}
