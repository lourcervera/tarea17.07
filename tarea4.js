// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y
//devuelve como resultado una cadena de texto que indica si el número es par o impar.
// Mostrar por pantalla el resultado devuelto por la función.



// function verificarParidad(numero) {
//    if(isNaN(numero)){alert("por favor ingrese un numero")}
//     else if (numero % 2 == 0) {
//       return "El número es par.";
//     } else {
//       return "El número es impar.";
//     }
//   }
  
//   // Ejemplo de uso
//   let numero = parseInt(prompt("Ingrese un número entero:"));
//   let resultado = verificarParidad(numero);
//   console.log(resultado);


const paridad = function(numero){
    if(isNaN(numero)){
        alert("Debe ingresar un número")
    }else if(numero % 2 == 0){
        return("El número es par")
    }else{
        return("El número es impar")
    }
}

console.log (paridad())

// 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
//  A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas,
//  sólo por minúsculas o por una mezcla de ambas.

const cadenaDeTexto=function(texto){
    if (texto==texto.toUpperCase){
        return("la cadena de texto esta formada solo por mayusculas")}
        else if(texto == texto.toLowerCase){
            return("la cadena de texto esta formada solo por minusculas")
        }
        else return("la cadena de texto esta formada por mayusculas y minusculas")

    }



// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
// luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)


let lado1=parseInt(prompt("ingrese el valor del lado 1 del rectangulo"))
let lado2=parseInt(prompt("ingrese el valor del lado 2 del rectangulo"))

const perimetro= function (lado1, lado2){
     if(isNaN(lado1) || isNaN(lado2))
       return (2*(lado1+lado2))}



console.log(perimetro(lado1,lado2))


// 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
// la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 
// del número elegido por el usuario.




function tablaDeMultiplicar(
    numero = parseInt(prompt("Ingrese el valor de la tabla a calcular")),
    vueltas = parseInt(prompt("del 1 al cuanto?"))
  ) {
    if (isNaN(numero) || isNaN(vueltas)) {
      return alert("Debe ingresar un número");
    }
  
    document.write(`Tabla del ${numero}<br>`);
    for (let index = 1; index <= vueltas; index++) {
      document.write(`${numero} x ${index} = ${numero * index}<br>`); //2 x 1 = 2
    }
  }
