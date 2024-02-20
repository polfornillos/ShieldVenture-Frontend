document.addEventListener("DOMContentLoaded", function () {
  var sidebar = document.getElementById("sidebar");
  var sidebarCollapse = document.getElementById("sidebarCollapse");
  var rootStyles = getComputedStyle(document.documentElement);

  sidebarCollapse.addEventListener("click", function () {
    var sidebarWidth = rootStyles.getPropertyValue("--sidebar-width").trim();
    // Ensure sidebarWidth is a number to use in calculations
    sidebarWidth = parseInt(sidebarWidth, 10);

    // Toggle the sidebar on and off
    if (sidebar.classList.contains("active")) {
      sidebar.style.transform = `translateX(-${sidebarWidth}px)`; // Sidebar slides out
      sidebar.classList.remove("active");
    } else {
      sidebar.style.transform = "translateX(0px)"; // Sidebar slides in
      sidebar.classList.add("active");
    }
  });
});
