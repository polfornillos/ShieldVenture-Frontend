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


//#region calendar function
const daysContainer = document.querySelector(".days"),
  nextBtn = document.querySelector(".next-btn"),
  prevBtn = document.querySelector(".prev-btn"),
  month = document.querySelector(".month"),
  todayBtn = document.querySelector(".today-btn");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// get current date
const date = new Date();

// get current month
let currentMonth = date.getMonth(); //default get the current month

//preferred month
let customMonth = 0;//change month of booking 0=january to 11=december 

if(currentMonth != customMonth){//change the month from default to custom 
  currentMonth = customMonth;
}
else{
  currentMonth = date.getMonth(); 
}
// get current year
let currentYear = date.getFullYear();

// function to render days
function renderCalendar() {
  // get prev month current month and next month days
  date.setDate(1);
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const lastDayIndex = lastDay.getDay();
  const lastDayDate = lastDay.getDate();
  const prevLastDay = new Date(currentYear, currentMonth, 0);
  const prevLastDayDate = prevLastDay.getDate();
  const nextDays = 7 - lastDayIndex - 1;

  // update current year and month in header
  month.innerHTML = `${months[currentMonth]} ${currentYear}`;

  // update days html
  let days = "";

  // prev days html
  for (let x = firstDay.getDay(); x > 0; x--) {
    days += `<div class="day prev">${prevLastDayDate - x + 1}</div>`;
  }

  let bookingDays = [15,16,17] //put days to book here
  let unavailableDays = [11,24,25,30,31,21]//put unavailable days/fullybooked days to here
  let bookedDaysCount = 0;
  let fullyBookedCount = 0;
  for (let i = 1; i <= lastDayDate; i++) {
    // check if its today then add today class
    if (
      i === bookingDays[bookedDaysCount] &&
      currentMonth === customMonth &&
      currentYear === new Date().getFullYear()
    ) {
      bookedDaysCount+=1;//to iterate thru index of bookingDays[]
      // if date month year matches add today
      days += `<div class="day today">${i}</div>`;
    }
    else {
      //else dont add booked day
      if( 
        i === unavailableDays[fullyBookedCount] &&
        currentMonth === customMonth &&
        currentYear === new Date().getFullYear()){
        days += `<div class="day unavailable-days">${i}</div>`;
        fullyBookedCount+=1;//to iterate thru index of unavailableDays[]
      }
      else{
        days += `<div class="day ">${i}</div>`;
      }
    }
  }

  // next MOnth days
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="day next">${j}</div>`;
  }

  // run this function with every calendar render
  hideTodayBtn();
  daysContainer.innerHTML = days;
}

renderCalendar();

nextBtn.addEventListener("click", () => {
  // increase current month by one
  currentMonth++;
  if (currentMonth > 11) {
    // if month gets greater that 11 make it 0 and increase year by one
    currentMonth = 0;
    currentYear++;
  }
  // rerender calendar
  renderCalendar();
});

// prev monyh btn
prevBtn.addEventListener("click", () => {
  // increase by one
  currentMonth--;
  // check if let than 0 then make it 11 and deacrease year
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});

// go to today
todayBtn.addEventListener("click", () => {
  // set month and year to current
  currentMonth = date.getMonth();
  currentYear = date.getFullYear();
  // rerender calendar
  renderCalendar();
});

// lets hide today btn if its already current month and vice versa

function hideTodayBtn() {
  if (
    currentMonth === new Date().getMonth() &&
    currentYear === new Date().getFullYear()
  ) {
    todayBtn.style.display = "none";
  } else {
    todayBtn.style.display = "flex";
  }
}
//#endregion calendar function end