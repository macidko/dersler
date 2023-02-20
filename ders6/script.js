let prObje = new Promise( 
    (a, b) => {
        //..... zaman alan işlemler burada kodlanır
        for ( let i = 0; i<50000; i++ ) {
            console.log(i)
        }

        a({ gidenSMS: 12, gitmeyenSMS:1 })
    }  
)

prObje.then( (deger)=>{ console.log("SMS gönderimi tamamlandı" + deger.gidenSMS) } )

prObje.catch( (hata) => { console.log(hata)  } )
//prObje.then( (deger)=>{ console.log("Mesaj 2" + deger) } )


//Promiseler içerisinde süre alan kodlar barındırır. İşlemler tamamlanınca negatrif veya pozitif bir sonuc döndürürler..

//Programcılar, promiseleri dinleyerek, promiseler işini bitirince farklı işlemler yaptırmak üzere kodlarını yazabilir...