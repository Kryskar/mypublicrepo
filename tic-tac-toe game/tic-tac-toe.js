let Arr =[]; // Array used to push element IDs, later used to check used fields
let Arr2 = [0]; //Array used to push 0 and 1 to differ X and O alternately
let a =[null, null, null, null, null, null, null, null, null] // Array to check winners
const x = 1, o = 2 //variables to push to Array to check winner combinations
let winVar; //variable to stop executing code when there is winner
let container = document.getElementById("container")
let winLine = document.getElementById("win")

function start(){
    container.addEventListener("click", function(event){
    if (winVar){return}   
    let i = parseInt(event.target.id.substring(1)-1) // will be used for Arr3 push
    let elementId = event.target.id
    let getHook = document.getElementById(elementId)
    addToHtml(getHook, elementId, i);
    })
}
function addToHtml(getHook, elementId, i){ // function adds divs with X and O to boarder
    let htmlString;
    if (Arr.includes(elementId)){
        alert("Used field")
        return;
    }
    if (Arr2[Arr2.length-1] == 0){
        Arr2.push(1)
    } else {
        Arr2.push(0)
    }
    Arr.push(elementId)
    if (Arr2[Arr2.length-1]==1) {
        htmlString = `<div class="circle"></div>`;
        a[i]=o  
}
    else {
        htmlString = `<div class="symbol-x"></div>`
        a[i]=x
    };
    getHook.insertAdjacentHTML("afterbegin", htmlString)
    win();
    winnerAlert();
}
function win(){ // function for checking winning conditions

if (a[0]==a[1] && a[1]==a[2] && a[0]+a[1]+a[2]!==0){
    winLine.classList.add("liner1")
    winVar = 1 // row1
} else if (a[3]==a[4] && a[4]==a[5] && a[3]+a[4]+a[5]!==0) {
    winLine.classList.add("liner2")
    winVar = 1 // row2
} else if (a[6]==a[7] && a[7]==a[8] && a[6]+a[7]+a[8]!==0) {
    winLine.classList.add("liner3")
    winVar = 1 // row3
} else if (a[0]==a[3] && a[3]==a[6] && a[0]+a[3]+a[6]!==0) {
    winLine.classList.add("lineh1")
    winVar = 1 // col1
} else if (a[1]==a[4] && a[4]==a[7] && a[1]+a[4]+a[7]!==0) {
    winLine.classList.add("lineh2")
    winVar = 1 // col2
} else if (a[2]==a[5] && a[5]==a[8] && a[2]+a[5]+a[8]!==0) {
    winLine.classList.add("lineh3")
    winVar = 1 // col3
} else if (a[0]==a[4] && a[4]==a[8] && a[0]+a[4]+a[0]!==0) {
    winLine.classList.add("linex1")
    winVar = 1 // x1
} else if (a[6]==a[4] && a[4]==a[2] && a[6]+a[4]+a[2]!==0) {
    winLine.classList.add("linex2")
    winVar = 1 // x2
}
}
function winnerAlert(){ // function for alerting winner
    if (winVar){
    if (Arr2[Arr2.length-1]==1){
        setTimeout(function() {
            alert("CIRCLE ( O ) PLAYER WON !!!")}, 100)
    } else if (Arr2[Arr2.length-1]==0) {setTimeout(function() {
        alert("CROSS( X ) PLAYER WON !!!")}, 100)}}
        else if (!winVar && Arr2.length==10){setTimeout(function() {
            alert("DRAW NO-ONE WON TRY AGAIN !!!")}, 100)}

}
start();