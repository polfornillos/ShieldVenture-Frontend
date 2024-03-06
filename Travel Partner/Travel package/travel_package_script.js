$(document).ready(function () {
  $("#travelPackageTable").DataTable({
    info: true,
    ordering: true,
    paging: true,
    searching: false,
    lengthChange: false,
    pageLength: 50,
    responsive: true,
    columnDefs: [
      {
        targets: -1,
        orderable: false,
      },
    ],
    order: [[0, "desc"]],
  });
});
