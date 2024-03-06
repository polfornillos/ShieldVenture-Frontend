var newsRight = document.getElementById("news-btn-right");
newsRight.onclick = function () {
  var container = document.getElementById("news-container");
  sideScroll(container, "right", 25, 100, 10);
};

var newsLeft = document.getElementById("news-btn-left");
newsLeft.onclick = function () {
  var container = document.getElementById("news-container");
  sideScroll(container, "left", 25, 100, 10);
};

var packageRight = document.getElementById("packages-btn-right");
packageRight.onclick = function () {
  var container = document.getElementById("packages-container");
  sideScroll(container, "right", 25, 100, 10);
};

var reviewLeft = document.getElementById("reviews-btn-left");
reviewLeft.onclick = function () {
  var container = document.getElementById("reviews-container");
  sideScroll(container, "left", 25, 100, 10);
};

var reviewRight = document.getElementById("reviews-btn-right");
reviewRight.onclick = function () {
  var container = document.getElementById("reviews-container");
  sideScroll(container, "right", 25, 100, 10);
};

var packageLeft = document.getElementById("packages-btn-left");
packageLeft.onclick = function () {
  var container = document.getElementById("packages-container");
  sideScroll(container, "left", 25, 100, 10);
};

function sideScroll(element, direction, speed, distance, step) {
  scrollAmount = 0;
  var slideTimer = setInterval(function () {
    if (direction == "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}
