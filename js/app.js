 // fixed nav background 
 const nav = document.querySelector(".nav");
 if( window.innerWidth > 768 ) {
     nav.style.background = "none";
 }
 
 function check() {
     if( window.scrollY + document.querySelector(".nav").getBoundingClientRect().top > 0 ) {
         nav.classList.add("navFixed");
     }
     else {
         nav.classList.remove("navFixed");
     }
 }

 document.addEventListener("scroll", check);

 // mobile nav
 const menu_btn_open = document.querySelector(".menu_button_open i");
 const menu_btn_close = document.querySelector(".menu_button_close");
 const mobile_nav = document.querySelector(".mobile_nav");
 const mobile_nav_links = document.querySelectorAll(".mobile_nav a");
 
 let menuOpen = () => {
     mobile_nav.style.width = "100%";
 }
 let menuClose = () => {
     mobile_nav.style.width = "0";
 }

 for (const link of mobile_nav_links) {
     link.addEventListener('click', menuClose);
 }
 menu_btn_close.addEventListener("click", menuClose);
 menu_btn_open.addEventListener("click", menuOpen);

 //Preloader
 const preloaderEl = document.querySelector(".preloader-wrapper");
 preloaderEl.style.display = "block";
let preloader = () => {
    preloaderEl.style.opacity = "0";
    
    setTimeout(function() {
        preloaderEl.style.display = "none";
    },1000);

}

window.addEventListener("load", preloader, false);
