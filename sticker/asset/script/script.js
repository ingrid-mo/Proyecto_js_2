document.querySelector("button").addEventListener("click", addition);


function addition (){
    
let valueA = document.getElementById("value1");
let valueB = document.getElementById("value2");
let valueC = document.getElementById("value3");


let value1 = parseInt(valueA.value);
let value2 = parseInt(valueB.value);
let value3 = parseInt(valueC.value);

if (typeof value1 !== 'number' || isNaN(value1)) {
    value1 = 0;
  }
  if (typeof value2 !== 'number' || isNaN(value2)) {
    value2 = 0;
  }
  if (typeof value3 !== 'number' || isNaN(value3)) {
    value3 = 0;
  }



let result = value1 + value2 + value3 

let parr = document.getElementById ("parr")

console.log(parr)

if (result > 10) {
parr.textContent= "Superaste el limite de stickers";
parr.style.color ="red"
} else {
   parr.textContent = ` Llevas ${result} stickers `
   parr.style.color = "green"
}

}

// value1 = typeof value1 === 'number' && !isNaN(value1) ? value1 : 0;
// value2 = typeof value2 === 'number' && !isNaN(value2) ? value2 : 0;
// value3 = typeof value3 === 'number' && !isNaN(value3) ? value3 : 0;
// es un operador terniario osea un if resumido

//condicion ? valor si es verdadero : si el valor es falso
//el signo de pregunta es como si le estuviera cuestionando si es falso  
//parr.textContent = "llevas " + result + " stickers"; esto es concadenacion 
//parr.textContent = ` Llevas ${result} stickers ` y esto interpolacion