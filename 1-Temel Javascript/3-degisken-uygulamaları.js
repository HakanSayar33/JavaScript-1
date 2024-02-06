let suankiYil = new Date().getFullYear();
let ogr1isim = "ada bilgi";
let ogr1yas = suankiYil - 2012;
let ogr1matNot1 = 70;
let ogr1matNot2 = 70;
let ogr1matNot3 = 80;

let ogr1MatOrt = (ogr1matNot1 + ogr1matNot2 + ogr1matNot3) / 3;

let ogr2isim = "yigit bilgi";
let ogr2yas = suankiYil - 2010;
let ogr2matNot1 = 40;
let ogr2matNot2 = 50;
let ogr2matNot3 = 50;

let ogr2MatOrt = (ogr2matNot1 + ogr2matNot2 + ogr2matNot3) / 3;

let basarilimi1 = 50 >= ogr1MatOrt;
let basarilimi2 = 50 >= ogr2MatOrt;

console.log(ogr1isim, "yaşı", ogr1yas);
console.log("sınav ortalaması", parseInt(ogr1MatOrt));
console.log(basarilimi1);

console.log(ogr2yas);
console.log(ogr2MatOrt);
