/* ===== toggle Style Switcher ===== */ 
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");

styleSwitcherToggler.addEventListener("click", () => {
  if (navTogglerBtn.classList.contains("open")) {
    aside.classList.remove("open");
    navTogglerBtn.classList.remove("open");
  }
  styleSwitcher.classList.toggle("open");
})

/* ===== hide style - switcher on scroll ===== */ 
window.addEventListener("scroll", () => {
  if (styleSwitcher.classList.contains("open")) {
    styleSwitcher.classList.remove("open");
  }
})


/* ===== theme color ===== */ 
const alternateStyle = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  localStorage.setItem("color", color);
  changeColor();

  function changeColor() {
    alternateStyle.forEach((style) => {
      if(localStorage.getItem("color") === style.getAttribute("title")){
      // if (color === style.getAttribute("title")) {
        style.removeAttribute("disabled");
      }
      else {
        style.setAttribute("disabled", "true");
      }
    })
  }
  styleSwitcher.classList.remove("open");
}  


// if (localStorage.getItem("color") === style.getAttribute("title"))
// })

/* ===== theme light and dark mode ===== */ 
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark"); 
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark")
  } else {
    localStorage.setItem("theme", "")
  }
})


window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
})


// Local Storage
function themeSet() {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove('dark')
  }
}
themeSet();


function colorSet() {
  for (let i = 0; i < alternateStyle.length; i++) {
    if (localStorage.getItem('color') === `color-${i+1}`)
    setActiveStyle(`color-${i+1}`)
  }
}
colorSet();