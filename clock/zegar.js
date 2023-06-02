let secondHand = document.getElementById("secondHand")
let minuteHand = document.getElementById("minuteHand")
let hourHand = document.getElementById("hourHand")

let secondsDeg, minutesDeg, hoursDeg
function time (){
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    if (secondsDeg >= 354){
        secondsDeg+=6
    } else {
     secondsDeg = (seconds/60)*360
    }
    if (minutesDeg >= 354){
        minutesDeg+=0.1
    } else {
     minutesDeg = ((minutes+ seconds/60)/60)*360
    }
    if (hoursDeg>=354){
        hoursDeg+=0.1/12
    }
     hoursDeg = ((hours + ((minutes+ seconds/60)/60))/12)*360

    secondHand.style.transform = `rotate(${secondsDeg}deg)`
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`
    hourHand.style.transform = `rotate(${hoursDeg}deg)`

}

time();

setInterval(time,1000);
setTimeout(function() {
    location.reload();
  }, 1000*60*15);