// - Crear un minisistema que nos permita registrar
// alumnos que estan presentes (P) y los ausentes (A)
// en clase

// - Pasados los 30 dias mostrar la situacion final
// de todos los alumnos (numeor total de presentes
//  y de ausentes)

// Se puede tener un maximo de 10% de ausencias por
// semestre, si se tienen mas aclarar que estas
// suspendido



// alumnos = prompt("Cuantos alumnos hay?")

// function alumno(){
//     alumnos = prompt("Cuantos alumnos hay?")
//     if alumnos = 
// }

try {
    alumnos = prompt("Cuantos alumnos hay?")
    alumnos = parseInt(alumnos)
} catch (e) {
    console.error(e)
}

diasTotales = prompt("Cuantos dias ha habiado de clases?")

nombresAlumnos = [];

for (i = 0; i < alumnos; i++) {
    nombresAlumnos[i] = [prompt(`Nombre del ${i+1}º alumno`),0]
}

// document.write(`Los alumons matriculados son ${nombresAlumnos}`)

const Asistencia = (nombre,p) => {
    let presentes = prompt(`Ha asistido el dia ${dia+1} ${nombre}? (P/A)`)
    if (presentes == "p" || presentes == "P") {
        nombresAlumnos[i][1]++
    }
}

for (dia = 0 ; dia < 5 ; dia++){
    for (i = 0; i < alumnos; i++) {
        Asistencia(nombresAlumnos[i][0])
    }
}



for (i = 0; i < alumnos; i++) {
    document.write(`<br><br>El alumno ${nombresAlumnos[i][0]} tiene ${nombresAlumnos[i][1]} asistencias y tiene ${diasTotales - nombresAlumnos[i][1]} faltas. `)
    if (nombresAlumnos[i][1]/diasTotales <= 0.9) {
        document.write(`El alumno ${nombresAlumnos[i][0]} esta suspendido por falta de asistencia`)
    }
}

// for (a = 0; a < 1; a++) {
        
//     }

// document.write(nombresAlumnos);


