// Bucles y Iteraciones

// Hacer hasta que num sea menor o igual a 4
// Ejecuta el codigo de dentro de los corchetes
// si num es menor o igual a 4 y vuelve a el 
// principio del bucle y vuelve a preguntar 
// si num es menor o igual a 4 hasta q acabe siendolo

let num = 0;

document.write("<hr> <b>bucle while</b> <br> <br>");

while (num <= 4) {
    document.write(num + "<br>");
    num++;
}

document.write("<hr> <b>bucle while con break</b> <br> <br>");


let nume = 0;

while (nume < 1000) { 
    document.write(nume + "<br>");
    nume++;  
    if (nume > 10){
        break;
    }
    
}

// Hace la instruccion del "do" y cuando la 
// acaba se pregunta si se quiere seguir 
// ejecutando el codigola condicion del 
// while entonces si cumple la condicion 
// vuelve a ejecutar el do asi hasta que al 
// final deje de cumplirse


document.write("<hr> <b>bucle do-while</b> <br> <br>");

let num2 = 0 ;

do{
    document.write(num2 + "<br>");
    num2++;
}
while(num2 <= 4);

document.write("<hr> <b>bucle for</b> <br> <br>");

document.write("<hr> <b>for de aumento</b> <br> <br>");

for (let i = 0; i <= 4; i++) {
    document.write(i + "<br>");
}

document.write("<hr> <b>for de decremento</b> <br> <br>");

for (let a = 4; a <= 0; a--) {
    document.write(a + "<br>");
}

document.write("<hr> <b>for in (da las posiciones de cada elmento dentro del array)</b> <br> <br>");

let animales = ["perro","gato","pez","vaca"];

for (animal in animales){
    document.write(animal + "<br>");
}

// for in es un bucle que recorre un array y saca el numero de sus posiciones

document.write("<hr> <b>for in pero con frutas y dando la posicion y el nombre de dentro de la cadena</b> <br> <br>");

let frutas0 = ["manzana","pera","uva"];

for (piezaDeFruta in frutas0){
    document.write(piezaDeFruta + frutas0[piezaDeFruta] + "<br>");
}

document.write("<hr> <b>for of (da la informacion de cada elmento dentro del array)</b> <br> <br>");

for (animal of animales){
    document.write(animal + "<br>");
}

document.write("<hr> <b>for of</b> es un bucle que recorre una cadena y saca la informacion de los elementos <br> <br> <b>for in</b> es una herramienta mas potente ya que saca la misma informacion que for of pero tambien recorre las caracteristicas y metadatos <br>");

let velocistas = ["Juan","Pedro","Juan"];

velocistas.edad = 20 ;

document.write("<br> <b> for in </b><br><br>")

for (nombre in velocistas){
    document.write(nombre + " " + velocistas[nombre] + "<br>");
} 

document.write("<br> <b> for of </b><br><br>")

for (nombre of velocistas){
    document.write(nombre + "<br>");
}


document.write("<br> <b> escribir caracteristicas de los arrays</b><br><br>")

document.write(velocistas.edad + "<br>" + "<hr> <br>");

// Arrays Multiples

document.write("<br> <b> Arrays Multiples (Un array es parte de otro) </b><br><br>")

let array1 = ["Juan","Pedro","Pepe"];

let array2 = ["Maria","Sara",array1];

for (arrays in array2){                                     // Recorro las posiciones del array2 que que tiene un array en la posicion 2
    if (arrays == 2){                                       // Cuando llega a la posicion 2 cambia y empieza a recorrer el array1
        for (nombre in array1){                             // Recorro el array1
            document.write(array1[nombre] + "<br>");        // Y escribe lo que hay en el array1
        }
    }
    else{                                                   // Mientras la posicion no sea 2 escribe lo que hay en el array2
        document.write(array2[arrays] + "<br>");            // Y escribe lo que hay en el array2
    }
}

document.write("<hr> <br>  <b>Break y Continue</b> <br>");

// Break y Continue (Uso de etiquetas)

// Se rompe el bucle interior del bucle principal. Y el document.write esta antes por lo que escribe el primer nombre 

document.write("<br><b>Break Bucle interior</b><br>Se rompe el bucle interior del bucle principal. Y el document.write esta antes por lo que escribe el primer nombre  <br> <br>");
document.write("Este break afecta y acabe al bucle en el que se ha ejecutado, que es el bucle interior que recorre el array 1 pero al estar debajo de el documemnent.write se escribe el primer nombre del array 1<br><br>")

for (arrays in array2){                 
    if (arrays == 2){                   
        for (nombre in array1){
            document.write(array1[nombre] + "<br>");        
        break;                                          // Este break afecta y acabe al bucle en el que se ha ejecutado, que es el bucle interior que recorre el array 1 pero al estar debajo de el documemnent.write se escribe el primer nombre del array 1
        }
    }
    else{
        document.write(array2[arrays] + "<br>");
    }
}

// Se rompe el bucle principal y ya no escribe mas nombres

document.write("<br> <b> Break Bucle interior</b><br>Se rompe el bucle interior del bucle principal. Y el document.write esta antes por lo que escribe el primer nombre  <br> <br>");
document.write("El break si se pone la etiqueta y se le añade un nombre se puede determinar a q bucle afect el break y aqui se determina que afecte al bucle general <br><br>");

forRancio:
for (arrays in array2){     
    if (arrays == 2){
        for (nombre in array1){
            document.write(array1[nombre] + "<br>");
            break forRancio;                            // El break si se pone la etiqueta y se le añade un nombre se puede determinar a q bucle afect el break y aqui se determina que afecte al bucle general
        }
    }
    else{
        document.write(array2[arrays] + "<br>");
    }
}

document.write("<br><b>Break Bucle interior</b><br>Se rompe el bucle interior del bucle principal. Y el document.write esta antes por lo que escribe el primer nombre  <br> <br>");
document.write("Este break afecta y acabe al bucle en el que se ha ejecutado, que es el bucle interior que recorre el array 1 pero al estar debajo de el documemnent.write se escribe el primer nombre del array 1<br><br>")

for (arrays in array2){                 
    if (arrays == 2){                   
        for (nombre in array1){
            document.write(array1[nombre] + "<br>");        
            continue;                                       // Este break afecta y acabe al bucle en el que se ha ejecutado, que es el bucle interior que recorre el array 1 pero al estar debajo de el documemnent.write se escribe el primer nombre del array 1
        }
    }
    else{
        document.write(array2[arrays] + "<br>");
    }
}

// Se rompe el bucle principal y ya no escribe mas nombres

document.write("<br> <b> Break Bucle interior</b><br>Se rompe el bucle interior del bucle principal. Y el document.write esta antes por lo que escribe el primer nombre  <br> <br>");
document.write("El break si se pone la etiqueta y se le añade un nombre se puede determinar a q bucle afecta el break y aqui se determina que afecte al bucle general <br><br>");

forRancio2:
for (arrays in array2){     
    if (arrays == 2){
        for (nombre in array1){
            document.write(array1[nombre] + "<br>");
            continue forRancio2;                            // El break si se pone la etiqueta y se le añade un nombre se puede determinar a q bucle afect el break y aqui se determina que afecte al bucle general
        }
    }
    else{
        document.write(array2[arrays] + "<br>");
    }
}