import createElement from "../../assets/lib/create-element.js";

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;

    this.buttonRight = document.createElement("button");
    this.buttonLeft = document.createElement("button");
    this.nav = document.createElement("nav");

    this.render();
  }

  render() {
    this.elem = document.createElement("div");
    this.elem.setAttribute("class", "ribbon");

    this.elem.prepend(this.buttonRight);
    this.elem.prepend(this.buttonLeft);

    this.elem.appendChild(this.getElements());

    this.addEventListeners(this.buttonLeft, this.buttonRight, this.nav);

    return this.elem;
  }

  addEventListeners(leftBtn, rightBtn, container) {
    this.nav.addEventListener("click", function (evt) {
      let node = evt.target.parentNode.childNodes;
      let idTarget = evt.target.dataset.id;

      evt.target.classList.add("ribbon__item_active");

      node.forEach((item) => {
        item.addEventListener("click", (e) => {
          node.forEach((el) => {
            el.classList.remove("ribbon__item_active");
          });
          item.classList.add("ribbon__item_active");
        });
      });

      evt.target.dispatchEvent(
        new CustomEvent("ribbon-select", {
          detail: idTarget,
          bubbles: true,
        })
      );
    });

    leftBtn.addEventListener("click", function () {
      container.scrollBy(-350, 0);
    });

    rightBtn.addEventListener("click", function () {
      container.scrollBy(350, 0);
    });
  }

  getElements() {
    let buttons = [];
    let fragment = document.createDocumentFragment();

    for (let i = 0; 2 > i; i++) {
      let imgButton = document.createElement("img");
      this.setAttr(imgButton, {
        src: "/assets/images/icons/angle-icon.svg",
        alt: "icon",
      });

      buttons.push(imgButton);
    }

    this.buttonLeft.setAttribute(
      "class",
      "ribbon__arrow ribbon__arrow_left ribbon__arrow_visible"
    );
    this.buttonLeft.appendChild(buttons[0]);

    this.buttonRight.setAttribute(
      "class",
      "ribbon__arrow ribbon__arrow_right ribbon__arrow_visible"
    );
    this.buttonRight.appendChild(buttons[1]);

    this.nav.setAttribute("class", "ribbon__inner");

    for (let i = 0; this.categories.length > i; i++) {
      let a = document.createElement("a");
      let aText = document.createTextNode(this.categories[i].name);

      this.setAttr(a, { href: "#", class: "ribbon__item" });

      a.setAttribute("data-id", this.categories[i].id);
      a.appendChild(aText);

      fragment.appendChild(a);
    }
    this.nav.appendChild(fragment);

    return this.nav;
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
      if (objKey === "href") {
        elem.setAttribute(objKey, objVal);
      }
    }

    return elem;
  }
}
