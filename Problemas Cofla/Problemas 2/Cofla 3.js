function sumar(){
    num1 = prompt("Cual es el primer numero quieres sumar?")
    num2 = prompt("Cual es el segundo numero quieres sumar?")
    resultado = parseInt(num1) + parseInt(num2)
    alert("El resultado es: " + resultado)
}
function restar(){
    num1 = prompt("Cual es el primer numero quieres restar?")
    num2 = prompt("Cual es el segundo numero quieres restar?")
    resultado = parseInt(num1) - parseInt(num2)
    alert("El resultado es: " + resultado)
}
function Multiplicar(){
    num1 = prompt("Cual es el primer numero quieres Multiplicar?")
    num2 = prompt("Cual es el segundo numero quieres Multiplicar?")
    resultado = parseInt(num1) * parseInt(num2)
    alert("El resultado es: " + resultado)
}
function Dividir(){
    num1 = prompt("Cual es el primer numero quieres Dividir?")
    num2 = prompt("Cual es el segundo numero quieres Dividir?")
    resultado = parseInt(num1) / parseInt(num2)
    resultado = Math.trunc(resultado)
    resto = parseInt(num1) % parseInt(num2)
    alert("El resultado es: " + resultado + " y el resto es " + resto)
}

var accion = prompt("Que accion quieres hacer? (Sumar/Resta/Multiplicar/Dividir)")
accion = accion.toLowerCase()

console.log(accion)

switch (accion){

    case 'suma':
        sumar()
        break;

    case 'resta':
        restar()
        break;

    case 'multiplica':
        Multiplicar()
        break;

    case 'divide':
        Dividir()
        break;
    }

// if (accion == "Sumar"||accion == "sumar") {
//     restar()
// }



