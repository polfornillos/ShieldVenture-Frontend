//Initialize chart
$(document).ready(function () {
  const ctx = document.getElementById("milesChart").getContext("2d");
  const milesChart = new Chart(ctx, {
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
      },
    },
  });
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
