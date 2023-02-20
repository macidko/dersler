const eleman1 = document.querySelector("p")
const ayarlar = {
    puanBaslangic: 100,
    bitisPuani: 0,
    maksSayacDegeri: 20,
    sayacBaslangicDegeri: 0
}


//alert(eleman1.dataset["puan"])

/*
buton1.addEventListener(  "click", () => { 
    const buton1 = document.querySelector("button");
    let sayi = buton1.dataset.sayac;
    let guncelSayi = parseInt( sayi ) + 1;
    buton1.dataset.sayac = guncelSayi;
 } )
 */

const buton1 = document.querySelector("#btnOyun");
buton1.dataset.sayac = ayarlar.sayacBaslangicDegeri;
buton1.dataset.puan = ayarlar.puanBaslangic;


 buton1.addEventListener(  "click", (olay) => { 
    const buton1 = olay.target;

    let sayi = parseInt(buton1.dataset.sayac);
    let guncelSayi =  sayi + 1;
    buton1.dataset.sayac = guncelSayi;

    let sayi2 = parseInt(buton1.dataset.puan);
    if( sayi2 !== 0 ) {
        let guncelSayi2 = parseInt( sayi2 ) - 10;
        buton1.dataset.puan = guncelSayi2;
    } else {
        alert("Oyun bitti. Puan: 0")
    }

 } )

