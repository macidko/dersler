"use strict"
let eleman1 = document.querySelector("#kutu1")


// eleman1.addEventListener("wheel", function(){

//     alert(this);
// })


// //console da properties kısmında js propertyleri görebilirsin
// eleman1.addEventListener("wheel", function () {

//     alert(this.clientWidth);
// })




// eleman1.addEventListener("wheel", (olay) => {

//     console.log(olay);
// })

// eleman1.addEventListener("wheel", (olay) => {
//     if(ctrlKey == true){
//     console.log(olay);
//     }
// })


// pencerenin koordinatları
// eleman1.addEventListener("click", (olay) => {

//     console.log(olay.x, olay.y);
// })

// eleman1.addEventListener("click", (olay) => {

//     console.log(olay.width, olay.height);
// })

eleman1.addEventListener("click", (olay) => {

    console.log(olay.currentTarget.style.width);
})



