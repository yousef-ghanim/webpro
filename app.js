// get date
const date = document.querySelector(".date")
date.innerHTML = new Date().getFullYear();

// nav-bar
const navBtn = document.querySelector(".nav-btn");
const navLinks = document.querySelector(".nav-links");
const nav = document.querySelector(".nav");
navBtn.addEventListener("click", ()=>{
navLinks.classList.toggle("nav-links-active");
})

// Contact Icon List
const contactBtn = document.querySelector(".contact-btn");
const iconList = document.querySelector(".contact-list")
contactBtn.addEventListener("click", ()=>{
iconList.classList.toggle("contact-list-active");
})

// project Animation
const projects = document.querySelectorAll(".project-item");
const projectCon = document.querySelector(".projects-container");
const project2 = document.querySelector(".project-item2")
const project3 = document.querySelector(".project-item3")
window.addEventListener("scroll", () =>{
     let projectHeight = projectCon.getBoundingClientRect().top + 500;
     const screenPos = window.pageYOffset;
     console.log(projectHeight);
     console.log(screenPos);

     if (projectHeight < screenPos){
         projects.forEach((project) =>{
             project.classList.add("project-anime");
             project2.style.animationDelay = "0.3s"
             project3.style.animationDelay = "0.6s"
         })
     }
    //  nav scroll
const navHeight = nav.getBoundingClientRect().height;
if(screenPos > navHeight){
    nav.classList.add("nav-fixed");
}else{
    nav.classList.remove("nav-fixed");
}

})

const links = document.querySelectorAll(".nav-link");
links.forEach((link) =>{
    link.addEventListener("click", ()=>{
        navLinks.classList.remove("nav-links-active");
    })
})