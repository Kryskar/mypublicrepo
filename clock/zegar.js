let secondHand = document.getElementById("secondHand")
let minuteHand = document.getElementById("minuteHand")
let hourHand = document.getElementById("hourHand")

let s = 0, m=0, h=0; 
function seconds(){
    secondHand.style.transform = "rotate("+s+"deg)"
    s+=6
}
function minutes(){
    minuteHand.style.transform = "rotate("+m+"deg)"
    m+=6
}
function hours(){
    hourHand.style.transform = "rotate("+h+"deg)"
    h+=30
}

setInterval(()=>{seconds()},1000);
setInterval(()=>{minutes()},1000*60);
setInterval(()=>{hours()},1000*60*60);