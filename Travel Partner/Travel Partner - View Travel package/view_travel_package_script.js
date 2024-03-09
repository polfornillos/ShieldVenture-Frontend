const picker = new Litepicker({
  element: document.getElementById("litepicker"),
  inlineMode: true,
  singleMode: false,
  autoApply: true,

  setup: (picker) => {
    picker.on("selected", (date1, date2) => {
      // Identify the parent element where cloned sections will be appended
      const itineraryParent = document.querySelector(".itinerary-section").parentElement;
      // Clear previous itinerary sections except the first one (template)
      while (itineraryParent.children.length > 1) {
        itineraryParent.removeChild(itineraryParent.lastChild);
      }

      // Calculate the number of days
      const diffDays = date2.dateInstance - date1.dateInstance;
      const numberOfDays = diffDays / (1000 * 60 * 60 * 24);

      // Clone and append the itinerary section for each day
      for (let i = 2; i <= numberOfDays + 1; i++) {
        const itineraryTemplate = document.querySelector(".itinerary-section").cloneNode(true);
        itineraryTemplate.querySelector("h3").innerText = `DAY ${i}`;
        itineraryParent.appendChild(itineraryTemplate);
      }
    });
  },
});

const startTimePicker = flatpickr("#startTime", {
  enableTime: true,
  noCalendar: true,
  dateFormat: "H:i",
  onChange: function (selectedDates) {
    const startDate = selectedDates[0];
    endTimePicker.set("minDate", startDate);
  },
});

// Initialize end time picker
const endTimePicker = flatpickr("#endTime", {
  enableTime: true,
  noCalendar: true,
  dateFormat: "H:i",
});

document.getElementById("litepicker").addEventListener("datepicker:selected", function (e) {
  // Extract the selected start and end dates from the event detail
  const { startDate, endDate } = e.detail;

  // Log the selected dates
  console.log("Selected start date:", startDate);
  console.log("Selected end date:", endDate);
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

document.addEventListener("DOMContentLoaded", function () {
  const activityDropdowns = document.querySelectorAll(".activity-dropdown");
  const activityNames = document.querySelectorAll(".tour-option .activity-name, .hotel-option .hotel-name");

  activityDropdowns.forEach((dropdown) => {
    activityNames.forEach((el) => {
      let prefix = el.closest(".tour-option") ? "Tour Option - " : el.closest(".hotel-option") ? "Hotel - " : "";
      const name = prefix + el.textContent.charAt(0).toUpperCase() + el.textContent.slice(1).toLowerCase();
      const option = document.createElement("option");
      option.value = name;
      option.textContent = name;
      dropdown.appendChild(option);
    });
  });
});
