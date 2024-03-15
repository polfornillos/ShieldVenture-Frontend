$(window)
  .resize(function () {
    console.log("resize called");
    var width = $(window).width();
    if (width <= 768) {
      $("#first-name-field").removeClass("col").addClass("col-lg-12");
      $("#middle-name-field").removeClass("col").addClass("col-lg-12");
      $("#last-name-field").removeClass("col").addClass("col-lg-12");
      $("#email-field").removeClass("col").addClass("col-lg-12");
      $("#package-name-field").removeClass("col").addClass("col-lg-12");
      $("#s-date-field").removeClass("col-lg-4").addClass("col-lg-12");
      $("#e-date-field").removeClass("col-lg-4").addClass("col-lg-12");
    } else {
      $("#first-name-field").removeClass("col-lg-12").addClass("col");
      $("#middle-name-field").removeClass("col-lg-12").addClass("col");
      $("#last-name-field").removeClass("col-lg-12").addClass("col");
      $("#email-field").removeClass("col-lg-12").addClass("col");
      $("#package-name-field").removeClass("col-lg-12").addClass("col");
      $("#s-date-field").removeClass("col-lg-12").addClass("col-lg-4");
      $("#e-date-field").removeClass("col-lg-12").addClass("col-lg-4");
    }
  })
  .resize();
