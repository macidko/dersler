const ayarlar = {
    oyunBasladiMi: false,
    sure: 0,
    sureIntervalId: null,
    tiklamaPuani: 0,
    maksSure: null
}

const btnBasla = document.querySelector("#btnBasla");
const txtSure = document.querySelector("#txtSure");
const divKutu1 = document.querySelector("#kutu1");
const txtPuan = document.querySelector("#txtPuan");
divKutu1.style.userSelect = 'none';
const inpMaksSure = document.querySelector("#inpMaksSure");

divKutu1.addEventListener('click', () => {
    if (ayarlar.oyunBasladiMi === true) {
        ayarlar.tiklamaPuani = ayarlar.tiklamaPuani + 1;
        txtPuan.textContent = ayarlar.tiklamaPuani + "puan";
    }
})


btnBasla.addEventListener("click", () => {

    if (ayarlar.oyunBasladiMi === false) { //eğer oyun başlamadıysa

        if( inpMaksSure.value === "" ) {
            alert("Süre boş olamaz.");
            
            return; //fonksiyon aşağıdan devam etmeyi durdurur
        }

        ayarlar.maksSure = parseInt(inpMaksSure.value);

        ayarlar.oyunBasladiMi = true;
        btnBasla.textContent = "Oyunu Bitir";

        txtPuan.textContent = ayarlar.tiklamaPuani + "puan";
        ayarlar.sure = ayarlar.sure + 1;
        txtSure.textContent = ayarlar.sure + "sn";
        ayarlar.sureIntervalId = setInterval(() => {
            ayarlar.sure = ayarlar.sure + 1;
            txtSure.textContent = ayarlar.sure + "sn";

            if( ayarlar.sure >= ayarlar.maksSure   ) {
                alert("Süre doldu.")
                
                oyunuBitir()
            }
        }, 1000)

    } else {
        oyunuBitir()
    }
})


function oyunuBitir() {
    clearInterval(ayarlar.sureIntervalId);
    let mesaj = `Süre: ${ayarlar.sure} Puan: ${ayarlar.tiklamaPuani}`;
    alert(mesaj);

    //oyunu sıfırlama kodları
    ayarlar.tiklamaPuani = 0;
    ayarlar.sure =  0;
    ayarlar.oyunBasladiMi = false;
    btnBasla.textContent = "Oyuna Başla";
    txtSure.textContent = ""
    txtPuan.textContent = ""
    inpMaksSure.value = ""
}