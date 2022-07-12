


/* ===== typing animation ===== */
let typed = new Typed(".typing", {
  strings: ["", "Product Manager", "Designer", "Programmer", "Publisher", "Marketer "
],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true
})
/* ===== Aside ===== */
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

  for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    
    a.addEventListener("click", function() {
      removeBackSection();
      
      for (let j = 0; j < totalNavList; j++) {
        if (navList[j].querySelector("a").classList.contains("active")) {
          addBackSection(j);
          console.log(totalNavList);
          console.log(j);
          }        
        navList[j].querySelector("a").classList.remove("active")
      }

      this.classList.add("active")
      showSection(this);
      if (window.innerWidth < 1200) {
        asideSectionTogglerBtn();
        }
    })
  }


function removeBackSection() {
for (let i = 0; i < totalSection; i++) {
  allSection[i].classList.remove("back-section");
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back-section"); 
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++)
  {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active")
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++)
  {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
      navList[i].querySelector("a").classList.add("active");
      }
    }
}

// Hire Button
document.querySelector(".hire-me").addEventListener("click", function ()
{
  const sectionIndex = this.getAttribute("data-section-index");
  console.log(this)
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
})


// Nav Toggler Button
const navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  if (styleSwitcher.classList.contains("open")) {
    styleSwitcher.classList.remove("open");
  }
  asideSectionTogglerBtn();
})

function asideSectionTogglerBtn()
{
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

// 

/* ===== MIXITUP FILTER PORTFOLIO ===== */

let mixer = mixitup('.portfolio__container', {
  selectors: {
      target: '.portfolio__card'
  },
  animation: {
      duration: 300
  }
});

/* ===== Link Active Portfolio ===== */

// Portfolio
const $$portfolioItem = document.querySelectorAll('.portfolio__item');

function activePortfolio() { 
  $$portfolioItem.forEach(l => l.classList.remove('active-portfolio'))
  this.classList.add('active-portfolio')
}

$$portfolioItem.forEach(l => l.addEventListener("click", activePortfolio)) 


/* ===== Portfolio Popup ===== */
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("portfolio__button")) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
})

function togglePortfolioPopup() {
  document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup); 

function portfolioItemDetails(portfolioItem) {
  // console.log(portfolioItem)
  document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".portfolio__img").src;
  document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".portfolio__subtitle").innerHTML;
  document.querySelector(".portfolio__popup-title").innerHTML = portfolioItem.querySelector(".portfolio__title").innerHTML;
  document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
  
}


// Email JS
(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init('1LsCcPyoJuh3rVgNc');
})();

window.onload = function () {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // generate a five digit number for the contact_number variable
    this.contact_number.value = Math.random() * 100000 | 0;
    // these IDs from the previous steps
    emailjs.sendForm('service_p9u31ze', 'template_ajad98f', this)
      .then(function () {
        console.log('SUCCESS!');
        alert('전송이 완료되었습니다');
        location.reload();
      }, function (error) {
        console.log('FAILED...', error);
      });
  });
}

  