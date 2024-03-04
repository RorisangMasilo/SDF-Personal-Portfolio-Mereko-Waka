// Hamburger
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

// Login Page
function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "" || password == "") {
    alert("Please enter both username and password.");
    return false;
  }
  return true;
}

// Redirect to another webpage
function redirectToPage(url) {
  window.location.href = url;
}

// Redirect to the homepage
redirectToPage("index.html");
