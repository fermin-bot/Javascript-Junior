// Maquina que deje pasar solo a mayores de edad y la primera persona que pase despues de las 2 am no paga

    time = prompt("¿Que hora es?")

    free = false;

    const validarCliente = (time) => {
        
    let edad = prompt("¿Cuantos años tienes?")

    if (edad >= 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert("Puedes pasar y es gratis enhorabuena")
                free = true;
        }
        else {
            alert(`Son las ${time} puedes pasar y te toca pagar, son 5 euros`)
        }
    }
        else
            alert("No puedes pasar bobi, fuera de aqui")
    }

    validarCliente();  

    