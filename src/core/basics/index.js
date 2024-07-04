"use strict";
// ----------------------
var a = 3;
console.log(typeof a);
var x = "Strrr";
console.log(typeof x);
var arr = [];
console.log(typeof arr);
console.log(Object.prototype.toString.call(a));
console.log(Object.prototype.toString.call(x));
console.log(Object.prototype.toString.call(arr));
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}());
var john = new Person("John", "Doe");
console.log(john instanceof Person);
console.log(typeof undefined);
console.log(typeof null);
// ----------------------
// const server = http.createServer((req, res) => {
//   res.write("<h1>Namastey!!</h1>");
//   res.end();
// });
// http.get('/hello',(res)=>{
// })
// server.listen(1337, "127.0.0.1", () => {
//   // Make a request to a tunneling proxy
//   console.log("Listening on http://127.0.0.1:1337");
// });
// -------------------------------------------------------
console.log(Number(undefined));
console.log(Number(null));
//-------------------------type Casting or explicit coercion---------------------------------------------
var xx = 2.1, y = "2.13";
console.log("Converting the number to boolean: " + Boolean(xx));
console.log("String to float: " + (Number.parseFloat(y) + 1)); //
//---------------------------comparison operator-------------------------------
//associativity means in which direction operator will operate
//presedence means which operator will operate first according to the priority
//associativity left to right
// console.log(1 < 2 < -1);//true<-1
// console.log(1 < 2 < 3);//true<3
// ---------------Object and Fucntion-----------------------------------
var Human = /** @class */ (function () {
    function Human(f, l) {
        this.firstName = f;
        this.lastName = l;
    }
    return Human;
}());
var person = new Human();
console.log(person["firstName"]); //will be undefined
person["firstName"] = "Tony";
person["lastName"] = "Stark";
console.log(person);
console.log(person["firstName"]);
//-------------------------Object Literals----------------------------------
var person1 = {
    firstName: "Tony",
    lastName: "Stank",
    address: {
        street: "Paiper Street",
        house: "Stank Tower",
        state: "NYC"
    }
};
console.log(person1);
// -----------------------JSON AND OBJECT LITERALS-----------------------------
var req = {};
console.log(req);
var req = {
    firstName: "Tony",
    lastName: "Stank",
    address: {
        street: "Papier Street",
        house: "Stank Tower",
        state: "NYC"
    }
};
var req = {
    name: "Tony Stark",
    getName: function () {
        console.log(this);
        return this.name;
    }
};
console.log(req === null || req === void 0 ? void 0 : req.getName());
//also we can use
person.address = new Object();
person.address.street = "Baker";
person.address.house = "Stark Tower";
console.log(person.firstName);
console.log(person.address);
function log(a) {
    console.log(a);
}
log({ greet: "hi" });
console.log(function () {
    console.log("hello anysnomus function as first order which is value that can be assigned to a variable");
    return 1;
}());
function getThis() {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>");
    // console.log(this);
}
console.log("1");
// new getThis();
function logX_prev_version_Js(x) {
    x = x || "Default  x in old JS";
    console.log(x);
}
function logX(x) {
    if (x === void 0) { x = "Default x latest JS version"; }
    console.log(x);
}
logX_prev_version_Js();
logX();
// ---------------------------arguments array or spread---------------------
function ySpread(x, y, z) {
    console.log(arguments);
    console.log(x, y, z);
}
ySpread(1, 2, 3);
function z(x, y) {
    var cords = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        cords[_i - 2] = arguments[_i];
    }
    console.log(x, y, z);
    console.log(cords);
}
z("hello", "world", 0, 3, "x", "y", "z", 4, 5, 6, 7, 8, 9);
//--------------------------------closure---------------------------------------
function greetFunc(whatToSay) {
    var variablXfromGreetFunc = "variablXfromGreetFunc";
    return function (name) {
        console.log(whatToSay, name, variablXfromGreetFunc);
    };
}
//1 way to call
var sayHi = greetFunc("Hello");
sayHi("Tony");
//2 way to call
greetFunc("Hola")("Tony");
