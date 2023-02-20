// import {Personel} from "./personel.js"
// import Demirbas from "./demirbas.js"

// import {liste as listePersonel, adetBilgi} from "./personel.js"
import Personel from "./personel.js"
import Demirbas from "./demirbas.js"

const elPersonelRaporButon = document.querySelector("#btnPersonelRapor")
const elDemirbasRaporButon = document.querySelector("#btnDemirbasRapor")
const elRaporAlani = document.querySelector("#raporAlani")


elPersonelRaporButon.addEventListener("click", () => {

    elRaporAlani.textContent = ""

    Personel.liste.forEach( (eleman)=> {
    elRaporAlani.textContent += `${eleman},`
 })
 Personel.adetBilgi()
})

elDemirbasRaporButon.addEventListener("click", () => {

    elRaporAlani.textContent = ""

    Demirbas.liste.forEach( (eleman)=> {
    elRaporAlani.textContent += `${eleman},`
 })
})