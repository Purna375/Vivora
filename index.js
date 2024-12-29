let SearchForm = document.querySelector("header .SearchForm");
let LoginForm = document.querySelector("header .LoginForm");
let SignupForm = document.querySelector("header .SignupForm"); // Newly added
let Information = document.querySelector("header .InfoMain");
let Navbar = document.querySelector("header .navbar");

// For Navbar
document.querySelector("#MenuBtn").onclick = () => {
  Navbar.classList.toggle("active");
  SearchForm.classList.remove("active");
  LoginForm.classList.remove("active");
  SignupForm.classList.remove("active"); // Hide Signup Form when Navbar toggles
  ThemeToggle.classList.remove("active");
};

// For Search Form
document.querySelector("#SearchBtn").onclick = () => {
  SearchForm.classList.toggle("active");
  LoginForm.classList.remove("active");
  SignupForm.classList.remove("active"); // Hide Signup Form when Search Form toggles
  Navbar.classList.remove("active");
  ThemeToggle.classList.remove("active");
};

// For Login Form
document.querySelector("#LoginBtn").onclick = () => {
  LoginForm.classList.toggle("active");
  SearchForm.classList.remove("active");
  SignupForm.classList.remove("active"); // Hide Signup Form when Login Form toggles
  Navbar.classList.remove("active");
  ThemeToggle.classList.remove("active");
};

// For Signup Form (Toggling)
document.querySelector("#SignupBtn").onclick = () => { // New button for toggling Signup
  SignupForm.classList.toggle("active");
  LoginForm.classList.remove("active");
  SearchForm.classList.remove("active");
  Navbar.classList.remove("active");
  ThemeToggle.classList.remove("active");
};

// If the user clicks on "Login Here!" link inside Signup form, show Login form again
document.querySelector(".SignupForm a").onclick = () => {
  SignupForm.classList.remove("active");
  LoginForm.classList.add("active");
};

// For Information
document.querySelector("#InfoBtn").onclick = () => {
  Information.classList.add("active");
  Navbar.classList.remove("active");
};

// To Close The Information
document.querySelector("#InformationClass").onclick = () => {
  Information.classList.remove("active");
};

// For Home Slider
var swiper = new Swiper(".HomeSlider", {
  loop: true,
  grabCursor: true,
});

// For Review Slider
var swiper = new Swiper(".ReviewSlider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

// For Blog Slider
var swiper = new Swiper(".BlogSlider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

// For Theme Toggle
let ThemeToggle = document.querySelector(".ThemeToggle");
let ToggleBtn = document.querySelector(".ToggleBtn");

ToggleBtn.onclick = () => {
  ThemeToggle.classList.toggle("active");
  LoginForm.classList.remove("active");
  SignupForm.classList.remove("active"); // Hide Signup Form when Theme Toggle opens
  SearchForm.classList.remove("active");
  Navbar.classList.remove("active");
};

// Main Logic To Toggle The Theme
document.querySelectorAll(".ThemeToggle .theme-btn").forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--main", color);
  };
});

const urlParams = new URLSearchParams(window.location.search);
const blogId = urlParams.get("id");

// Mock blog data (replace with server-side data if needed)
const blogs = {
  1: {
    title: "How to Host a Memorable Wedding: Expert Tips and Advice",
    content:
      "Pain itself is a common problem, but it leads to more pleasant experiences. However, it is difficult to handle everything related to it, whether it be a personal issue or a formal one.",
    image: "images/Blog1.jpg",
  },
  2: {
    title: "The Ultimate Guide to Planning a Successful Corporate Event",
    content:
      "Learn how to structure your event timeline, promote it effectively, and ensure seamless execution so your attendees walk away with a memorable experience.",
    image: "images/Blog4.jpg",
  },
  3: {
    title: "How to Create a Memorable Event Experience for Your Guests",
    content:
      "Planning a personalized wedding requires careful attention to detail. Discover creative ideas for making your day unforgettable, from custom decor to unique guest experiences.",
    image: "images/Blog2.jpg",
  },
  4: {
    title: "How to Choose the Perfect Venue for Your Event",
    content:
      "Selecting the right venue can make or break your event. Learn how to choose the perfect venue based on your event type, guest list size, and accessibility needs.",
    image: "images/Blog3.jpg",
  },
};

// Load blog details dynamically
if (blogId && blogs[blogId]) {
  const blog = blogs[blogId];
  document.getElementById("blog-title").innerText = blog.title;
  document.getElementById("blog-content").innerText = blog.content;
  document.getElementById("blog-image").src = blog.image;
}
