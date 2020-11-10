const date = document.querySelector(".date")
date.innerHTML = new Date().getFullYear();

const contactBtn = document.querySelector(".social-btn");
const iconList = document.querySelector(".social-list")
contactBtn.addEventListener("click", ()=>{
iconList.classList.toggle("social-list-active");
})