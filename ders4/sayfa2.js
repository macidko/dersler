const alisverisListesi = [
    { ad: "Elma", resim: "🍎", adet: 1 },
    { ad: "Armut", resim: "🍐", adet: 3 },
    {},
    {}
]

const kokEtiket = document.querySelector("#root")

alisverisListesi.forEach(listeyiGoster)

function listeyiGoster(urun) {
    if (urun.ad !== undefined) {
        let html = `<span> ${urun.resim} </span> <span> ${urun.ad} </span> <span> ${urun.adet} </span>`
        let div = document.createElement("div")
        div.innerHTML = html

        kokEtiket.append(div)
    }

}

let butonEkle = document.createElement("button")
butonEkle.textContent = "+ Ekle"
kokEtiket.prepend(butonEkle)

let inputUrunAd = document.createElement("input")
inputUrunAd.type = "text"
inputUrunAd.placeholder = "Ürün adı"
butonEkle.after(inputUrunAd)

let inputUrunResim = document.createElement("input")
inputUrunResim.type = "text"
inputUrunResim.placeholder = "Ürün resmi"
inputUrunAd.after(inputUrunResim)

let inputUrunNo = document.createElement("input")
inputUrunNo.type = "text"
inputUrunNo.placeholder = "Ürün adet/kilo"
inputUrunResim.after(inputUrunNo)

butonEkle.addEventListener("click", function () {
    let yeniUrun = {
        ad: inputUrunAd.value,
        resim: inputUrunResim.value,
        adet: parseInt(inputUrunNo.value)
    }

    alisverisListesi.push(yeniUrun)

    //aşağıdaki kodlar, eski ürün divlerini seçer ve DOMdan kaldırır
    let eskiUrunEtiketleri = kokEtiket.querySelectorAll("div")
    eskiUrunEtiketleri.forEach(function (etiket) {
        etiket.remove()
    })

    //listenin güncel halini sayfada tekrar gösterelim
    alisverisListesi.forEach(listeyiGoster)

    //inputlar 3 saniye sonra temizlensin
    setTimeout(function () {
        inputUrunNo.value = ""
        inputUrunResim.value = ""
        inputUrunAd.value = ""
    }, 3000)
})