const sabziPlus = document.querySelector(".Psabzi");
const sabziMinus = document.querySelector(".Msabzi");
const sumSabzi = document.querySelector(".sum_carr")
const kiloSabzi = document.querySelector(".kilo_carr")


const karPlus = document.querySelector(".Pkar");
const karMinus = document.querySelector(".Mkar");
const sumKar = document.querySelector(".sum_kar")
const kiloKar = document.querySelector(".kilo_kar")


const piyPlus = document.querySelector(".Ppiyoz");
const piyMinus = document.querySelector(".Mpiyoz");
const sumPiy = document.querySelector(".sum_on")
const kiloPiy = document.querySelector(".kilo_on")


const karamPlus = document.querySelector(".Pkaram");
const karamMinus = document.querySelector(".Mkaram");
const sumKaram = document.querySelector(".sum_karam")
const kiloKaram = document.querySelector(".kilo_karam")


const bodPlus = document.querySelector(".Pbod");
const bodMinus = document.querySelector(".Mbod");
const sumBod = document.querySelector(".sum_bod")
const kiloBod = document.querySelector(".kilo_bod")

const minusCost = document.querySelector(".minus_cost")
let mainCost = 200000;

let sabzi_sum = 5000;
let sabzi_kilo = 2;

let kar_sum = 7000;
let kar_kilo = 1;

let piy_sum = 4500;
let piy_kilo = 1;

let karam_sum = 5000;
let karam_kilo = 1;

let bod_sum = 10000;
let bod_kilo = 1;

 
sabziPlus.addEventListener("click", function () {
    sumSabzi.textContent = sabzi_sum = sabzi_sum + 5000;
    kiloSabzi.textContent = sabzi_kilo = sabzi_kilo + 1;
});   
sabziMinus.addEventListener("click",function () {
    sumSabzi.textContent = sabzi_sum = sabzi_sum - 5000;
    kiloSabzi.textContent = ssabzi_kilo = sabzi_kilo - 1;

})

