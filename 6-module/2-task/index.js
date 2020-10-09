import createElement from "../../assets/lib/create-element.js";

export default class ProductCard {
  constructor(product) {
    this.category = product.category;
    this.id = product.id;
    this.image = product.image;
    this.name = product.name;
    this.price = product.price;

    this.elem = document.createElement("div");
    let cardTop = document.createElement("div");
    let imgTop = document.createElement("img");
    let price = document.createElement("span");
    let cardBody = document.createElement("div");
    let cardTitle = document.createElement("div");
    let cardButton = document.createElement("button");
    let imgPlusIcon = document.createElement("img");
    let cardTitleText = document.createTextNode(this.name);
    let priceText = document.createTextNode(
      "€" + this.getRoundedNumber(this.price) + ".00"
    );

    this.setAttr(this.elem, { class: "card" });
    this.setAttr(price, { class: "card__price" });
    this.setAttr(cardBody, { class: "card__body" });
    this.setAttr(cardTitle, { class: "card__title" });
    this.setAttr(cardTop, { class: "card__top" });

    this.setAttr(cardButton, { class: "card__button", type: "button" });

    this.setAttr(imgTop, {
      class: "card__image",
      alt: "product",
      src: `/assets/images/products/${this.image}`,
    });

    this.setAttr(imgPlusIcon, {
      alt: "icon",
      src: "/assets/images/icons/plus-icon.svg",
    });

    this.elem.prepend(cardTop);
    cardTop.prepend(imgTop);
    cardTop.appendChild(price);
    price.appendChild(priceText);
    this.elem.appendChild(cardBody);
    cardBody.prepend(cardTitle);
    cardTitle.appendChild(cardTitleText);
    cardBody.appendChild(cardButton);
    cardButton.appendChild(imgPlusIcon);

    cardButton.addEventListener("click", function () {
      let event = new CustomEvent("product-add", {
        detail: product.id,
        bubbles: true,
      });
      cardBody.dispatchEvent(event);
    });
  }

  getRoundedNumber(number) {
    number.toFixed(2);
    return number;
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
