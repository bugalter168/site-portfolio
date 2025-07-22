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