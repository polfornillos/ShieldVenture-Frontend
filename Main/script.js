//Function for sidebar collision
document.addEventListener("DOMContentLoaded", function () {
  var sidebar = document.getElementById("sidebar");
  var sidebarCollapse = document.getElementById("sidebarCollapse");
  var content = document.getElementById("content");

  // Function to handle the toggle of the sidebar
  function toggleSidebar() {
    sidebar.classList.toggle("active");
    if (window.innerWidth <= 768) {
      content.classList.toggle("active");
    }
  }

  // Event listener for sidebar toggle button
  sidebarCollapse.addEventListener("click", toggleSidebar);

  // Event listener for window resize
  window.addEventListener("resize", function () {
    // If window is resized to desktop view and sidebar is hidden, show it
    if (window.innerWidth > 768 && sidebar.classList.contains("active")) {
      toggleSidebar(); // This will remove 'active' class and show the sidebar
    }
  });
});

//Function for traveler cart
document.addEventListener("DOMContentLoaded", function () {
  var travelerCartBtn = document.getElementById("travelerCartBtn");
  var travelerCart = document.getElementById("travelerCart");

  travelerCartBtn.addEventListener("click", function () {
    travelerCart.classList.toggle("active");
  });
});
