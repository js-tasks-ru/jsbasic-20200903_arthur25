import createElement from "../../assets/lib/create-element.js";

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.segments = steps - 1;

    this.getElements();
    this.getEventListeners();
    this.getStepValue(value);
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

  getEventListeners() {
    this.elem.onclick = this.getClick;
  }

  getClick = (event) => {
    let paddingLeft =
      (event.clientX - this.elem.getBoundingClientRect().left) /
      this.elem.offsetWidth;

    this.getStepValue(Math.round(this.segments * paddingLeft));

    this.elem.dispatchEvent(
      new CustomEvent("slider-change", {
        detail: this.value,
        bubbles: true,
      })
    );
  };

  getStepValue(stepValue) {
    this.value = stepValue;

    let padding = (stepValue / this.segments) * 100;

    this.elem.querySelector(".slider__thumb").style.left = `${padding}%`;
    this.elem.querySelector(".slider__progress").style.width = `${padding}%`;

    this.elem.querySelector(".slider__value").innerHTML = stepValue;

    if (this.elem.querySelector(".slider__step-active")) {
      this.elem
        .querySelector(".slider__step-active")
        .classList.remove("slider__step-active");
    }

    this.elem
      .querySelector(".slider__steps")
      .children[this.value].classList.add("slider__step-active");
  }
}
