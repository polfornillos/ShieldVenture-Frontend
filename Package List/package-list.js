function myFunction(screenSize) {
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

myFunction(screenSize);

screenSize.addEventListener("change", function () {
  myFunction(screenSize);
});
