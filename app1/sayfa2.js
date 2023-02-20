// 1- data types
    // https://www.w3schools.com/js/js_datatypes.asp

// 2- variable - constant
    // let ad = 'ahmet'; //string
    // var yas = 35; //integer
    // const askerlik = true; // boolean
    // boy //undefined
    // kilo = null; //null

    let ilanNo = 46412;
    let ilanBasligi = "Temiz doktordan Clio";
    let fiyat = 210000;
    let yil = 2006;
    let km = 230000;
    let otomatikMi = true;

    let ilanNo2 = 545457;
    let ilanBasligi2 = "2019 Trafiğe Çıkışlı Aksesuarlı";
    let fiyat2 = 1850000;
    let km2 = 41500;
    let otomatikMi2 = true;


    //OBJECT
    const arac1 = {
        ilanNo : 46412,
        ilanBasligi : "Temiz doktordan Clio",
        fiyat : 210000,
        yil : 2006,
        km : 230000,
        otomatikMi : true
    }

    const arac2 = {
        ilanNo : 545457,
        ilanBasligi : "2019 Trafiğe Çıkışlı Aksesuarlı",
        fiyat : 1850000,
        km : 41500,
        otomatikMi : true
    }

    const kitap1 = {
        isbn : 457354364,
        ad : "Lorem Ipsum 1",
        fiyat : 40,
        yazar: ["Ahmet", "Mehmet"],
        yerli : true
    }

    const post1 = {
        no : 12346,
        text : "Lorem ipsum, dolor sit amet.",
        like : 21,
        yorumSayisi: 432
    }
document.body.innerHTML = post1.no + post1.text;

