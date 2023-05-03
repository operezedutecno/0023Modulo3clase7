// console.log("Funciones Cadenas de Caracteres")
var nombreApellido = prompt("Ingrese su nombre y apellido")

//ReplaceAll
console.log(nombreApellido.replaceAll(" ",""))
console.log(nombreApellido.replaceAll("O","1"))
console.log(nombreApellido.replaceAll("Carlos","Luis"))
console.log(nombreApellido.replaceAll("é","e").replaceAll("í","i"))

//Replace
console.log(nombreApellido.replace("Carlos","Luis"));


//Trim
console.log(nombreApellido.trim());

//TrimStart
console.log(nombreApellido.trimStart());

//TrimEnd
console.log(nombreApellido.trimEnd());




var numero = prompt("Ingrese un número");

var numero2 = 1_500_000
console.log(numero2);


if(numero > 1_000_000) {
    alert("El número es mayor a 1 millón")
} else {
    alert("El número es menor o igual a 1 millón")
}














