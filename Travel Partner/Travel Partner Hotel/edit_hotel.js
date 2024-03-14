/*$(function () {
  $('input[name="start_date"]').daterangepicker({
    singleDatePicker: true,
    autoUpdateInput: false,
    locale: {
      cancelLabel: "Clear",
    },
  });

  $('input[name="start_date"]').on(
    "apply.daterangepicker",
    function (ev, picker) {
      $(this).val(picker.startDate.format("MMM DD, YYYY"));
    }
  );

  $('input[name="start_date"]').on(
    "cancel.daterangepicker",
    function (ev, picker) {
      $(this).val("");
    }
  );

  $('input[name="end_date"]').daterangepicker({
    singleDatePicker: true,
    autoUpdateInput: false,
    locale: {
      cancelLabel: "Clear",
    },
  });

  $('input[name="end_date"]').on(
    "apply.daterangepicker",
    function (ev, picker) {
      $(this).val(picker.startDate.format("MMM DD, YYYY"));
    }
  );

  $('input[name="end_date"]').on(
    "cancel.daterangepicker",
    function (ev, picker) {
      $(this).val("");
    }
  );
});

$(window)
  .resize(function () {
    console.log("resize called");
    var width = $(window).width();
    if (width < 768) {
      $("#first-name-field").removeClass("col").addClass("col-lg-12");
      $("#middle-name-field").removeClass("col").addClass("col-lg-12");
      $("#last-name-field").removeClass("col").addClass("col-lg-12");
      $("#email-field").removeClass("col").addClass("col-lg-12");
      $("#package-name-field").removeClass("col").addClass("col-lg-12");
    } else {
      $("#first-name-field").removeClass("col-lg-12").addClass("col");
      $("#middle-name-field").removeClass("col-lg-12").addClass("col");
      $("#last-name-field").removeClass("col-lg-12").addClass("col");
      $("#email-field").removeClass("col-lg-12").addClass("col");
      $("#package-name-field").removeClass("col-lg-12").addClass("col");
    }
  })
  .resize();
*/