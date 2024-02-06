let sonuc;
let a = 20,
  b = 20,
  c = 32;

//1 aritmatik operatörler
sonuc = a + b;
sonuc = a - b;
sonuc = a * b;
sonuc = a / b;
sonuc = c % a;
sonuc = a++;
sonuc = a--;
sonuc = --a; // işlem sırasını değiştirir

//2 atama operatörleri
sonuc = a;
sonuc += a; //sonuc = sonuc+a
sonuc -= a; //sonuc = sonuc-a
sonuc *= a; //sonuc = sonuc*a
sonuc /= a; //sonuc = sonuc/a
sonuc %= a; //sonuc = sonuc%a
sonuc += a + b; //sonuc = sonuc+a+b

//3 karşılaştırma operatörleri
sonuc = a == b;
sonuc = a != b;
sonuc = 3 === "3"; //d == değer kontrolü ===tip kontrolü yapar
sonuc = a < b;
sonuc = a >= b;

//4 mantıksal operatörler

console.log(sonuc);
