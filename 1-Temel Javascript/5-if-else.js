let username = "hakansayar";
let password = "abc111";
let isLoggedin = username == "hakansayar2" && password == "abc111";

if (isLoggedin) {
  console.log("giriş yapıldı");
} else {
  console.log("giriş yapılamadı");
}

let mezuniyet = "üniversite";
let yas = 20;
if (yas >= 18 || mezuniyet == "lise") {
  console.log("ehliyet alabilir");
}

//1 sayinin 10-50 arası olduğunu kontrol et

let sayi1 = 20;
if (10 < sayi1 < 50) {
  console.log("sayi 10-50 arasındadir");
}

//sayinin pozitif tek sayi olmadiğini kontrol ediniz

let sayi2 = 20;
if (sayi2 % 2 == 1 && sayi2 > 0) {
  console.log("sayi tektir");
} else {
  console.log("sayi çifttir");
}

// 3 sayinin arasındaki karşılaştırma yapma

let x = 20,
  y = 20,
  z = 20;

if (x > y && x > z) {
  console.log("x en büyük");
} else if (y > x && y > z) {
  console.log("y en büyük");
} else if (z > y && z > x) {
  console.log("z en büyük");
} else {
  console.log("sayilar eşittir");
}

// vize ve final notuna göre hesaplama yapma

let vize1 = 10;
let vize2 = 10;
let final = 70;

let ortalama = (vize1 + vize2) * 0.2 + final * 0.6;
console.log(ortalama);

if (ortalama >= 50 && final >= 50) {
  console.log("geçtiniz");
} else if (final >= 70) {
  console.log("geçtiniz");
} else {
  console.log("kaldınız");
}
