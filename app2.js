const date = document.querySelector(".date")
date.innerHTML = new Date().getFullYear();

const contactBtn = document.querySelector(".contact-btn");
const iconList = document.querySelector(".contact-list")
contactBtn.addEventListener("click", ()=>{
iconList.classList.toggle("contact-list-active");
})