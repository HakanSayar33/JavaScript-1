let ad = "Hakan";
let soyad = "Sayar";
let yas = 27;
let sehir = "Kocaeli";

let mesaj =
  "benim adım " +
  ad +
  " ve soyadım " +
  soyad +
  "." +
  sehir +
  "'nde yasiyorum " +
  "emekliliğe " +
  (65 - yas) +
  " yılım kaldı.";

//backtick
let mesaj2 = `benim adım ${ad} ve soyadım ${soyad}.${sehir}'nde yasiyorum emekliliğe ${
  65 - yas
} yılım kaldı.`;

//ternary operators
let emeklilik =
  65 - yas > 0
    ? "emekliliğe " + (65 - yas) + " yılım kaldı."
    : "zaten emekli oldunuz";
let mesaj3 = `benim adım ${ad} ve soyadım ${soyad}.${sehir}'nde yasiyorum.${emeklilik}`;

// console.log(mesaj);
// console.log(mesaj2);
// console.log(mesaj3);

// ------------String Metodları--------------

let kursAdi = "  Komple Uygulamalı Web Geliştirme Eğitimi ";

let sonuc;

sonuc = kursAdi.toLowerCase();
sonuc = kursAdi.toUpperCase();
sonuc = kursAdi.length;
sonuc = kursAdi[0];
sonuc = kursAdi.slice(7, 18);
sonuc = kursAdi.slice(18);
sonuc = kursAdi.slice(-7);

sonuc = kursAdi.substring(0, 6);
sonuc = kursAdi.substring(10);

sonuc = kursAdi.replace("Eğitimi", "Kursu");

sonuc = kursAdi.trim();
sonuc = kursAdi.trimEnd();
sonuc = kursAdi.trimStart();

sonuc = kursAdi.indexOf("Komple");
sonuc = kursAdi.split(" ");

// console.log(sonuc);

// --------------string uygulama
let url = "https://www.linkedin.com/in/hakan-sayar-835bab283/";
let url2 = "https://www.linkedin.com/in";
let meslek = "hakan sayar junior front end developer";
//kac karakter
let cikti;
cikti = url.length;
//kaç kelimeden oluşmaktadır?
cikti = meslek.split(" ").length;
//cümle .... ile başlıyor mu ?
cikti = url.startsWith("https");
//cümle içinde .... var mı ?
cikti = meslek.indexOf("end");
//meslek içerisinde değiişiklik yap urlye ekle
meslek = meslek.toLowerCase();
meslek = meslek.replaceAll(" ", "-");
url2 = `${url2}/${meslek}`;

cikti = url2;

console.log(cikti);
