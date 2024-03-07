//Initialize chart
$(document).ready(function () {
  const ctx = document.getElementById("milesChart").getContext("2d");
  let milesChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["August 2021", "September 2021", "October 2021", "November 2021", "December 2021", "January 2022", "February 2022"],
      datasets: [
        {
          label: "Miles Consumed",
          data: [0, 20, 40, 60, 80, 100, 120],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        y: {
          beginAtZero: true,
        },
        x: {
          display: false, // Hide x-axis labels initially
        },
      },
      plugins: {
        tooltip: {
          mode: "index",
          intersect: false,
        },
      },
      events: ["mousemove"], // Listen for mousemove event to toggle x-axis labels
    },
  });

  // Function to toggle x-axis labels on mousemove event
  function toggleLabels(e) {
    const windowWidth = $(window).width();
    if (windowWidth >= 768) {
      milesChart.options.scales.x.display = true;
    } else {
      milesChart.options.scales.x.display = false;
    }
    milesChart.update();
  }

  // Call the function on document ready and mousemove event
  toggleLabels();
  $(window).on("mousemove", toggleLabels);
});

//Initialize daterange
$(document).ready(function () {
  $("#dateRangePicker").daterangepicker({
    opens: "left",
    autoUpdateInput: false,
    locale: {
      format: "YYYY-MM-DD",
    },
    linkedCalendars: false,
    showDropdowns: true,
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});
