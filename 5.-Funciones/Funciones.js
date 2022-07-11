// Funciones

document.write("<br> <hr> <br> <b> Funciones </b><br>");

// pregunta = prompt("¿que tal?");

// if (pregunta == "bien"){
//     alert("que bien");
// }
// else{
//     alert("que mal");
// };


    
function saludar(){
    alert("hola");
}

    //  Saludar 10 veces

        // saludar();
        // saludar();
        // saludar();
        // saludar();
        // saludar();
        // saludar();
        // saludar();
        // saludar();
        // saludar();
        // saludar();
    

    // Saludar 10 veces
    
        // for(i = 0; i < 10; i++){
        //     saludar();
        // }

        function siete(){
            alert("7");
            return "<br> La funcion se ha mostrado con exito <br>"
        }

        siete = siete();

        document.write(siete); 

        function suma(suma1, suma2){
            let res = suma1 + suma2;
            document.write("<br> La suma de " + suma1 + " + " + suma2 + " es " + res + "<br><br>");
        }

        suma(12,45)

        suma(89,-15)

        suma(3)

        function resta(resta1, resta2){
            let res = resta1 - resta2;
            return res;
        }

        document.write(resta(7,2))

        let Varresta = resta(7,9);
         
        document.write("<br><br>" + Varresta + "<br><br>");
