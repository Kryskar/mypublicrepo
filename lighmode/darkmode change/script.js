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