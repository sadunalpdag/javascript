function myFunction1() {
  document.getElementById("demo2").innerHTML = "Paragraph changed2.";
}

function myFunction2() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function myFunction3() {
  return "hello";
}
window.alert(5 + 6);
alert(15 % 9);// kalan için kullanılıyuor

document.getElementById("demo3").innerHTML = 5 + 98;//script js den demo3 id ile cağıracağımız kod

let x;
x = 6;
x = x+6;
y = x*10;


var m = 10;

var n =5;
m += n; // m yeni bir değer alıyor
document.getElementById("demo4").innerHTML = x;
document.getElementById("demo5").innerHTML = y;
document.getElementById("demo6").innerHTML = m;
document.getElementById("demo7").innerHTML = n;
document.getElementById("demo7").innerHTML = n;

const person = {
  firstName: "John",
  lastName: "Doe",
  country:"Norway"
};
const person2 = {
  firstName: "John2",
  lastName: "Doe2",
  country:"Norway2"
};

document.getElementById("demo8").innerHTML = person.firstName;
document.getElementById("demo9").innerHTML = person2.firstName;//script js den demo8 object cağırmaid ile cağıracağımız ko//script js den demo8 object cağırmaid ile cağıracağımız kod



let f = 0;// f tanımladım
document.getElementById("demo11").innerHTML = f; //f i yazdırdım

function increment2() {


  document.getElementById("demo11").innerHTML = f++;// f e increment yaptım



}
 var w2 = assign (4,3);

function assign(p1, p2) {

  return p1*p2; // The function returns the product of p1 and p2
}

document.getElementById("demo15").innerHTML = w2;



const persona = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName; // this heryerde this veya self
  }
};

w3 = persona.fullName();

document.getElementById("demo16").innerHTML = w3;// w3 yerine direkt persona.fullName();
document.getElementById("demo17").innerHTML = w3.length;

let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;

document.getElementById("demo18").innerHTML = text;
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT))}`;//
let total1= parseFloat(price * (1 + VAT));// declare onemli

document.getElementById("demo19").innerHTML = total1.toFixed(3);// to fixed decimal



let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"]; // arrayde for dongusu

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`; // html ye arrayden cekkilenleri ekliyoruz
}

html += `</ul>`;
document.getElementById("demo20").innerHTML = html;// htmly, yazdırrr

let w123 = 100 / "Apple";
isNaN(w123); // is NaN fonksiyuonu true false dongusu

let w24 = 123;
w24.toString();//bazen to string gerekir
(123).toString();
(100 + 23).toString();


const fruits = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById("demo23").innerHTML = fruits;// htmly, yazdırrr
fruits.push("Lemon");// lemon ekledik en sona



let fruit = fruits[fruits.length - 1];
let fruit2 = fruits.pop(); // sondakiş array cıkarma ve basrırma lemon cıkarıldı


document.getElementById("demo21").innerHTML = fruit;// htmly, yazdırrr

document.getElementById("demo24").innerHTML = fruit2;// htmly, yazdırrr3

document.getElementById("demo25").innerHTML = fruits;// htmly, yazdırrr

fruits.unshift("Lemon");

document.getElementById("demo26").innerHTML = fruits;// htmly, yazdırrr

fruits[0] = "Kiwi";

document.getElementById("demo27").innerHTML = fruits;// htmly, yazdırrr

fruits.splice(2, 0, "Lemon2", "Kiwi2");
document.getElementById("demo28").innerHTML = fruits;// htmly, yazdırrr

const citrus = fruits.slice(1);

const citrus2 = fruits.slice(1, 3);

document.getElementById("demo29").innerHTML = citrus;// htmly, yazdırrr
document.getElementById("demo30").innerHTML = fruits;// htmly, yazdırrr
document.getElementById("demo31").innerHTML = citrus2;// htmly, yazdırrr




let deploy ="";
for (const x of fruits) {

  deploy += `<li>${x}</li>`; // html ye arrayden cekkilenleri ekliyoruz fruits ile ilgili seyleri değişikliklerden sonra yaptıgımızda ve onun idsi once oldugundan

}

document.getElementById("demo22").innerHTML = deploy;// hdeploy, yazdırrr

const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo32").innerHTML = points;// htmly, yazdırrr
points.sort(function(a, b){return a - b});// boylece points[0] en dusuk b-a yapsaydık points[0] en buyuk olacaktı

document.getElementById("demo33").innerHTML = points;// htmly, yazdırrr


let txt = "";
points.forEach(myFunction48);//points sort edilmis hali

function myFunction48(value) {
  txt += value + "<br>";
}

const numbers2 = points.map(myFunction49);

function myFunction49(value) {
  return value * 2;
}

const over18 = numbers2.filter(myFunction50);

function myFunction50(value) {
  return value > 18;
}

document.getElementById("demo38").innerHTML = txt;// iterationnn


document.getElementById("demo40").innerHTML = numbers2+"sss";// mapping

document.getElementById("demo90").innerHTML = numbers2+"sss";// mapping

document.getElementById("demo41").innerHTML = over18;//belli kural filtreee

let mult = numbers2.reduce(myFunction51);

function myFunction51(total, value) {
  return total * value;
}
document.getElementById("demo43").innerHTML = mult;//belli kural filtreee

let allOver18 = numbers2.every(myFunction52);//tum arrayi dolasıp 18 den buyuk yoksa false donduruyor

function myFunction52(value) {
  return value > 18;
}

let first = points.find(myFunction53);

function myFunction53(value, index, array) {
  return value > 18;
}
document.getElementById("demo48").innerHTML = first;//belli kural filtreee

document.getElementById("demo50").innerHTML = fruits.includes("Mango");


let position = fruits.indexOf("Apple");

document.getElementById("demo45").innerHTML = position;//index numaraıs verdidrir

document.getElementById("demo44").innerHTML = allOver18;//belli kural filtreee
function sortalp() {
  points.sort();
  document.getElementById("demo34").innerHTML = points;
}

document.getElementById("demo51").innerHTML = new Date();

document.getElementById("demo52").innerHTML = new Date(1655899555750);


document.getElementById("demo53").innerHTML = new Date().toDateString();
document.getElementById("demo54").innerHTML = new Date().getTime();

document.getElementById("demo55").innerHTML = new Date().getDay();
document.getElementById("demo62").innerHTML = 0;
function random2() {


  document.getElementById("demo62").innerHTML = Math.random();// f e increment yaptım



}



const d = new Date();
d.setDate(d.getDate() + 50);

document.getElementById("demo56").innerHTML = d;


function sortnumeri() {
  points.sort(function(a, b){return a - b});
  document.getElementById("demo35").innerHTML = points;
}

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

document.getElementById("demo36").innerHTML = myArrayMax(points)// htmly, yazdırr

document.getElementById("demo63").innerHTML = 0;
function myFunction60() {
  let age = document.getElementById("age").value;
  let voteable = (age < 18) ? "Too young":"Old enough";// bunun anlamı if age kucuk 18 cevap too young tersi too old
  document.getElementById("demo63").innerHTML = voteable + " to vote.";


}
const hour = new Date().getHours();
let greeting;
if (hour < 10) {
  greeting = "Good morning";
} else if (hour < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
document.getElementById("demo64").innerHTML = greeting ;

let text2;// switch sanki and gibi caseleri yazıyorsun o kısma gelince kapanıyor break ile
switch (new Date().getDay()) {
  case 4:
  case 5:
    text2 = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text2 = "It is Weekend";
    break;
  default:// eger istenen sonucla karsılasmaz ise default sonucu veriyor
    text2 = "Looking forward to the Weekend";
}
document.getElementById("demo65").innerHTML = text2;


const persona5 = {fname:"John", lname:"Doe", age:25};

let text3 = "";
for (let m in persona) {
  text3 += person[m];
}

document.getElementById("demo66").innerHTML = text3;

let txt5 = "";
numbers2.forEach(myFunction66);


document.getElementById("demo67").innerHTML = numbers2+",5250";// mapping

function myFunction66(value) {
  txt5 += value+ "<br>";
}
document.getElementById("demo68").innerHTML = txt5;

const cars = ["BMW", "Volvo", "Saab", "Ford"];

let text17 = "";

list: {
  text17 += cars[0] + "<br>";
  text17 += cars[1] + "<br>";
  break list;
  text17 += cars[2] + "<br>";
  text17 += cars[3] + "<br>";
}

document.getElementById("demo69").innerHTML = text17;

const fruit11 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

document.getElementById("demo70").innerHTML = "apple degeri"+ fruit11.get("apples");;// direkt yazdıramıyorsun







