let button = document.querySelector("#checkbox")
let theme = localStorage.getItem("theme");
let switchTheme = (e)=>{
    let theme= e.target.checked ? "dark" : "light"
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
}

if (theme){
document.documentElement.setAttribute("data-theme", theme) 
button.checked = (theme === "dark");
}
button.addEventListener("change",switchTheme)

const lightbox = document.querySelector("#lightbox")
const yesButton = document.querySelector(".yes")
const noButton = document.querySelector(".no")
const page = document.querySelector(".page")

//if(localStorage.is18){
//    lightbox.style.display = "none";
//}


yesButton.addEventListener("click",()=>{
    lightbox.style.display = "none";
    page.style.filter = "none"
    localStorage.setItem("is18", true)
})

noButton.addEventListener("click",()=>{
    window.location.replace("https://previews.123rf.com/images/vospalej/vospalej0911/vospalej091100039/5993883-no-entry-when-you-are-under-18.jpg")
})