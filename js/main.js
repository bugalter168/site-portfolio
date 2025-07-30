//Header effect scroll

const header = document.querySelector(".header")
window.addEventListener('scroll', function(){
    window.scrollY > 10 
        ? header.classList.add("sticky") 
        : header.classList.remove("sticky");
})
// Navigation menu items active

window.addEventListener("scroll", function () {
  const section = this.document.querySelectorAll("section")
  const scrollY = this.window.scrollY

  section.forEach(function(current){
    let sectionHeight = current.offsetHeight
    let sectionTop = current.offsetTop - 80
    let sectionId = current.getAttribute("id")
    let navItem = document.querySelector(`.nav-item a[href*="${sectionId}"]`)


    if(navItem){
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItem.classList.add("active");
        } else {
        navItem.classList.remove("active");
        }
    }
   
  })
});

// Scroll to pot button
const scrollToTop = document.querySelector(".scrollToTop");
window.addEventListener("scroll", function(){
    scrollToTop.classList.toggle("active", this.window.scrollY >500)
})
scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // для плавної анімації
  });
});

// JS функція перемикача
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  document.getElementById("theme-icon").className = "fa-sun";
}

// Під час кліку
 document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");

    if (savedTheme === "dark") {
      body.classList.add("dark-mode");
      themeIcon.className = "fa-solid fa-sun";
    } else {
      body.classList.remove("dark-mode");
      themeIcon.className = "fa-solid fa-moon";
    }

    // 🎯 Обробка кліку по кнопці
    document.getElementById("toggle-theme").addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      const isDark = body.classList.contains("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");

      themeIcon.className = `fa-solid ${isDark ? "fa-sun" : "fa-moon"}`;
    });
  });

  //Responsive navigation menu toggle

const navBtn = document.querySelector(".nav-menu-btn")
const navBar = document.querySelector(".nav")
const navMenu = document.querySelector(".nav-menu")
const navLinks = document.querySelectorAll(".nav-link");

navBtn.addEventListener("click",function(){
   navBtn.classList.toggle("close")
   navBar.classList.toggle("active")
   navMenu.classList.toggle("active")
})

navLinks.forEach(function(link){
  link.addEventListener("click", function(){
    navBtn.classList.remove("close")
    navBar.classList.remove("active")
    navMenu.classList.remove("active")
  })
})



//Services section - modal
const serviceModal = document.querySelectorAll(".service-modal");
const learnMoreBtm = document.querySelectorAll(".learn-more-btn");
const modalCloceBtn = document.querySelectorAll(".modal-close-btn");

const modal = function(modalClick){
    serviceModal[modalClick].classList.add("active")
}

learnMoreBtm.forEach((button, i) => {
    button.addEventListener("click", function(){
        modal(i)
    })   
})

modalCloceBtn.forEach(button => {
    button.addEventListener("click", () =>{
        serviceModal.forEach(modal => {
            modal.classList.remove("active")
        })
    })
})

// Portfolio section modal

const portfolioModals = document.querySelectorAll(".portfolio-modal");
const imgCard = document.querySelectorAll(".img-card");
const portfolioCloceBtn = document.querySelectorAll(".portfolio-close-btn");

const portfolio = function (modalClick) {
  portfolioModals[modalClick].classList.add("active");
};

imgCard.forEach((button, i) =>{
    button.addEventListener("click", () => {
        portfolio(i)
    })
})

portfolioCloceBtn.forEach(button => {
    button.addEventListener("click", () => {
        portfolioModals.forEach(modalView =>{
            modalView.classList.remove("active");
        }) 
        
    })
})

// добавляем слайди
var swiper = new Swiper(".client-swipper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 100
})
ScrollReveal().reveal(".home-info h1", {delay: 500, origin: "left"});
ScrollReveal().reveal(".home-img", { delay: 600, origin: "right" });
ScrollReveal().reveal(".media-icons a", { delay: 700, origin: "bottom", interval: 300 });
ScrollReveal().reveal(".home-info h3, .home-info p, .home-info-link", {
  delay: 600,
  origin: "left",
});