$(document).ready(function () {
  $("#travelPackageTable").DataTable({
    info: true,
    ordering: true,
    paging: true,
    searching: false,
    lengthChange: false,
    columnDefs: [
      {
        targets: -1,
        orderable: false,
      },
    ],
    order: [[0, "desc"]],
  });
});
