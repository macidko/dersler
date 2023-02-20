const liste = ["Ahmet", "Okan", "Şeyda", "Esra"]

// export default liste //liste değişkeni dış dosyalara açık hale getirildi.

function adetBilgi(){
    alert(liste.length + " personel var")
}

export default {liste, adetBilgi}
