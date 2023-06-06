
const lightbox = document.querySelector("#lightbox")
const page = document.querySelector(".page")
const body = document.querySelector("body")
const gallery = document.querySelector("#container")

async function api(){
const getApi = "https://some-random-api.com/animal/dog"
const response = await fetch(getApi)
const data = await response.json()
console.log(data.image)
check(data)
}

function check(data){
    let image=document.createElement("img")
    image.src=data.image;
    gallery.insertAdjacentElement("beforeend",image)
}



for (let i=0; i<10; i++){
   api();
}
