function toggleText() {
  let button = document.querySelector(".toggle-text-button");
  let text = document.querySelector("#text");
  let hiddenText = false;
  button.addEventListener("click", function () {
    text.hidden = hiddenText = !hiddenText;
  });
}
