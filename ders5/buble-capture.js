// let eleman1 = document.querySelector("body")
// let eleman2 = document.querySelector("section")


// // //event eklenen eleman ve içerisindeki tıklanan elemanlar(parent-child)
// // eleman1.addEventListener("click", function(event){

// //     console.log(event.target);
// // })

// // //event eklenen elemanın direkt kendisi(parent)
// // eleman1.addEventListener("click", function(event){

// //     console.log(event.currentTarget);
// // })

// //event eklenen elemanın alt elemanına göre(parent(child))
// eleman1.addEventListener("click", function(event){

//     console.log(event.target === eleman2);
// })


// //capture phase
// let eleman1 = document.querySelector("#pr-1")
// let eleman2 = document.querySelector("section")

// eleman2.addEventListener("click", function(olay) {
//     console.log("Section tıklandı")
// }, true)

// eleman1.addEventListener("click", function(olay) {
//     console.log("Paragraf 1 tıklandı")
// })

//bubbling phase (default)
let eleman1 = document.querySelector("#pr-1")
let eleman2 = document.querySelector("section")

eleman2.addEventListener("click", function(olay) {
    console.log("Section tıklandı")
})

eleman1.addEventListener("click", function(olay) {
    console.log("Paragraf 1 tıklandı")
})

