function addFlex(screenSize) {
  if (screenSize.matches) {
    cardSize.classList.remove("flex-row");
    cardSize.classList.add("flex-column");
  } else {
    cardSize.classList.add("flex-row");
    cardSize.classList.remove("flex-column");
  }
}

var screenSize = window.matchMedia("(max-width: 425px)");
const cardSize = document.getElementById("packages-container");

addFlex(screenSize);

screenSize.addEventListener("change", function () {
  addFlex(screenSize);
});
