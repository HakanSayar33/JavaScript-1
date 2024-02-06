// let toplam = 0;
// for (let i = 0; i <= 10; i++) {
//   toplam += i;
//   console.log(toplam);
// }

// let sayilar = [2, 4, 5, 3, 9, 6, 7, 25];
// let toplam2 = 0;
// for (let i = 0; i <= sayilar.length; i++) {
//   toplam2 += sayilar[i];
//   console.log(toplam2);
// }

// for (let index in sayilar) {
//   console.log(index);
// }

// for (let index in sayilar) {
//   toplam2 += sayilar[index];
//   console.log(toplam2);
// }
// ------------------------------------
let sayilar = [2, 4, 5, 3, 9, 15, 12, 25];
// 1.örnek sayilar listendeki elemanların karesini yazdırın
// for (let index of sayilar) {
//   console.log(index * index);
// }

// 2. örnek sayilar listesindeki hangi sayilar 5'in katıdır
// for (let index of sayilar) {
//   if (index % 5 == 0) {
//     console.log(index);
//   }
// }

// 3. örnek sayilar listesindeki çift sayıların toplamını bulunuz
// let toplam = 0;
// for (let index of sayilar) {
//   if (index % 2 == 0) {
//     toplam += index;
//   }
// }
// console.log(toplam);

// 4. örnek tüm ürünleri büyük harf ile yaz
// let urunler = [
//   "samsung s22",
//   "iphone 13",
//   "iphone14",
//   "iphone 15",
//   "samsung s23",
// ];
// for (let urun of urunler) {
//   console.log(urun.toUpperCase());
// }

// 5. örnek kaç tane samsung ürün vardır ?
// let urunler = [
//   "samsung s22",
//   "iphone 13",
//   "iphone14",
//   "iphone 15",
//   "samsung s23",
// ];
// let adet = 0;
// for (let urun of urunler) {
//   if (urun.includes("samsung")) {
//     adet++;
//   }
// }
// console.log(adet);

// ogrenciler listesindeki her öğrencinin not ortalamasını ve başarı durumunu yazdırınız
let ogrenciler = [
  { ad: "yiğit", soyad: "bilgi", notlar: [60, 70, 60] },
  { ad: "ada", soyad: "bilgi", notlar: [80, 70, 80] },
  { ad: "çınar", soyad: "turan", notlar: [10, 20, 60] },
];

for (let ogrenci of ogrenciler) {
  let notToplam = 0;
  let notOrtalama = 0;
  let adet = 0;
  for (let not of ogrenci.notlar) {
    notToplam += not;
    adet++;
  }
  notOrtalama = notToplam / adet;

  console.log(
    ogrenci.ad + ogrenci.soyad + "not ortalaması " + ogrenci.notOrtalama
  );

  if (notOrtalama >= 50) {
    console.log("başarılı");
  } else {
    console.log("başarısız");
  }
}
