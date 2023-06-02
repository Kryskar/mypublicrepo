let body = document.getElementsByTagName("body")[0];
let button = document.getElementsByTagName("button")[0];
let clickCount=0;

let randomColor = function(){
    const string = "0123456789ABCDEF"
    let word ="#"
    for (let i=0; i<6; i++){
        let randomNum = Math.floor(Math.random()*16)
        word+=string[randomNum]
    
    }
    return word;
}

function randomBackground(){
    let color = randomColor();
    if (clickCount<15){
    body.style.backgroundColor = color;
} else {
    let color2 = randomColor();
    let gradient = `linear-gradient(to left, ${color}, ${color2})`
    body.style.backgroundImage = gradient;
    body.style.transition ="background 1s"
    
}
clickCount++
}

button.addEventListener("click", randomBackground)