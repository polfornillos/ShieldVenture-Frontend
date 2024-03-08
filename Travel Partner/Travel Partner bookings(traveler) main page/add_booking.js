$(function () {
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
