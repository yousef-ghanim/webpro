const navBtn = document.querySelector(".nav-btn");
const navLinks = document.querySelector(".nav-links");

navBtn.addEventListener("click", ()=>{
    navLinks.classList.toggle("nav-links-active")
})