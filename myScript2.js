const person1 = {

     firstName:"John",
  lastName: "Doe1",
  fullName: function() {
    return this.firstName + " " + this.lastName;// this class gibi.
  }
}

const person2 = {
  firstName:"John",
  lastName: "Doe1",
}

const person3 = {
  firstName:"John1",
  lastName: "Doe2",
}

let x = person1.fullName.call(person3);// call function eger bind kullaırsak function () { [native code] } hatası alıyorum

document.getElementById("demo12").innerHTML = x;

const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.call(member);

document.getElementById("demo22").innerHTML = fullName; //call ile cağrıldı

let fullName2 = person.fullName.bind(member);

document.getElementById("demo23").innerHTML = fullName2(); //burada fulNAME FOnksiyonunu odunc alıyor

let myFunction = (a, b) => a * b;
document.getElementById("demo24").innerHTML = myFunction(4, 5);

let hello = () => {
  return "Hello World!";
}

document.getElementById("demo25").innerHTML = hello();

hello = () => "Hello World2!";

document.getElementById("demo26").innerHTML = hello();

hello = val => "Hello " + val;

document.getElementById("demo27").innerHTML = hello("xyz"); // herhangi bir variable ekleme  parantezli parantezsiz


hello = (val) => "Hello " + val;

document.getElementById("demo28").innerHTML = hello("xyz2");

hello2 = () => {
  document.getElementById("demo29").innerHTML += this;
}

//The window object calls the function:
window.addEventListener("load", hello2);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", hello2);//btn ye bagladık


class Car {
  constructor(name, year, ) {
    this.name = name;
    this.year = year;

  }
  name1() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }

name2(x) {
   return x - this.year;
  }

}
let date = new Date();
let year1 = date.getFullYear();

let myCar = new Car("Ford", 2014);
document.getElementById("demo30").innerHTML =
"My car is " + myCar.name1() + " years old.model year "+myCar.year+ "and model is" +myCar.name ;

let myCar2 = new Car("Ford2", 2018);
document.getElementById("demo31").innerHTML =
"My car is " + myCar2.name1(year1) + " years old.model year "+myCar2.year+ "and model is" +myCar2.name ;


