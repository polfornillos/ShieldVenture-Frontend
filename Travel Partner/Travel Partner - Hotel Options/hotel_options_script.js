$(document).ready(function () {
  $(".btn-plus").click(function () {
    var input = $($(this).data("target"));
    var count = parseInt(input.val()) + 1;
    input.val(count);
  });

  $(".btn-minus").click(function () {
    var input = $($(this).data("target"));
    var count = parseInt(input.val());
    if (count > 0) {
      count -= 1;
    }
    input.val(count);
  });
});
