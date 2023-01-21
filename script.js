
const btnClose =document.querySelector(".aside--close");
const btnOpen =document.querySelector(".aside--open");
const aside =document.querySelector(".aside");
const html =document.querySelector("html");
const themeToggler =document.querySelector(".themeToggler");

function toggleSidebar(){
    btnOpen.classList.toggle("hide");
    aside.classList.toggle("hide");
    html.classList.toggle("hideScrollY");

}
btnOpen.addEventListener("click",toggleSidebar);

btnClose.addEventListener("click", toggleSidebar);

themeToggler.addEventListener("click",()=>{
    document.body.classList.toggle("dark-theme-variables");
})