const picker = new Litepicker({
  element: document.getElementById("litepicker"),
  inlineMode: true,
  singleMode: false, // Allows for date range selection
  autoApply: true, // Automatically applies the selected date range
  // Configure additional options as needed
  onSelect: function (start, end) {
    // Optional: Handle the selected date range
    console.log(start.format("YYYY-MM-DD"), end.format("YYYY-MM-DD"));
  },
});

//Add inclusion row
$(document).ready(function () {
  $("#addInclusionBtn").click(function () {
    var lastInclusionContainer = $(".add-inclusion-container").last();
    var clone = lastInclusionContainer.clone();
    clone.find("input").val(""); // Clear the input value in the cloned inclusion container
    lastInclusionContainer.after(clone);

    // Enable all delete buttons
    $(".delete-inclusion-btn").prop("disabled", false);
    // Disable delete button if only one inclusion container is left
    if ($(".add-inclusion-container").length === 1) {
      $(".delete-inclusion-btn").prop("disabled", true);
    }
  });

  // Delete inclusion
  $(document).on("click", ".delete-inclusion-btn", function () {
    $(this).closest(".add-inclusion-container").remove();
    // Enable all delete buttons
    $(".delete-inclusion-btn").prop("disabled", false);
    // Disable delete button if only one inclusion container is left
    if ($(".add-inclusion-container").length === 1) {
      $(".delete-inclusion-btn").prop("disabled", true);
    }
  });
});

//Add exclusion row
$(document).ready(function () {
  $("#addExclusionBtn").click(function () {
    var lastInclusionContainer = $(".add-exclusion-container").last();
    var clone = lastInclusionContainer.clone();
    clone.find("input").val(""); // Clear the input value in the cloned inclusion container
    lastInclusionContainer.after(clone);

    // Enable all delete buttons
    $(".delete-exclusion-btn").prop("disabled", false);
    if ($(".add-exclusion-container").length === 1) {
      $(".delete-exclusion-btn").prop("disabled", true);
    }
  });

  // Delete exclusion
  $(document).on("click", ".delete-exclusion-btn", function () {
    $(this).closest(".add-exclusion-container").remove();
    $(".delete-exclusion-btn").prop("disabled", false);
    if ($(".add-exclusion-container").length === 1) {
      $(".delete-exclusion-btn").prop("disabled", true);
    }
  });
});
