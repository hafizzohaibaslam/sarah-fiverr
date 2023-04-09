let slides = document.querySelectorAll(".slide");

leftBtn = document.querySelector(".prev");
rightBtn = document.querySelector(".next");


let index = 1;
showSlides(index);

function plusSlides(n) {
    showSlides(index += n);
}

function currentSlide(n) {
    showSlides(index = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".slide");
    if (n > slides.length) {index = 1}
    if (n < 1) {index = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[index-1].style.display = "flex";
}

var searchBar = document.querySelector(".searchBar");
var searchBtn = document.querySelector(".searchIcon");

searchBtn.addEventListener('click', ()=>{
    searchBar.value="";
})

var hamBurger = document.querySelector(".hamBurger");

var mobile_Nav = document.querySelector(".mobile-nav");

hamBurger.addEventListener('click', ()=>{
    mobile_Nav.classList.toggle("hide");
    mobile_Nav.classList.toggle("visible");
    
})

// var mob_link = document.querySelector(".mob-link");

// mob_link.addEventListener('click', ()=>{
//     var mobile_Nav = document.querySelector(".mobile-nav");
//     mobile_Nav.classList.toggle("hide");
//     mobile_Nav.classList.toggle("visible");
// })