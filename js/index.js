    let AUTO = 1000;
    let MOTO = 500;
    let CAMIONETA = 2000;

    let inicio;
    do {
    inicio = prompt(` Bienvenido a su cotizador de Seguros elige una opción:
            \n 1- Deseo adquirir un seguro para mi Vehiculo
            \n 2- Me robaron el vehiculo
            \n 3- Pagar mi poliza
            \n Para finalizar ingresar "SALIR"`);
    switch (inicio) {
        case "1":
        // Pregunto que tipo de vehiculo tiene
        let vehiculo = prompt(`Cual es su vehiculo? 
                            \n 1 -Auto
                            \n 2 -Moto
                            \n 3 -Camioneta 
                            \n Para Salir ingresar "ESC"`);
        if (vehiculo === "1") {
            alert(`La cotización de un auto es de $${AUTO} Y usted pagara mensualmente 100$`);
        } else if (vehiculo === "2") {
            alert(`La cotización de una moto es de $${MOTO} Y usted pagara mensualmente 50$`);
        } else if (vehiculo === "3") {
            alert(`La cotización de una camioneta es de $${CAMIONETA}Y usted pagara mensualmente 150$`);
        } else if (vehiculo === "ESC") {
            break;
        } else {
            // Notifico que la opcion es invalida
            alert("Opción inválida.");
        }
        break;
        case "2":
        // Le pedimos que denuncie que vehiculo le robaron
        let robo = prompt(`Cual es su vehiculo? 
                    \n 1 -Auto
                    \n 2 -Moto
                    \n 3 -Camioneta
                    \n Para Salir ingresar "ESC"`);
        if (robo === "1") {
            alert(`El seguro le pagará el valor de $${AUTO} por su auto`);
        } else if (robo === "2") {
            alert(`El seguro le pagará el valor de $${MOTO} por su moto`);
        } else if (robo === "3") {
            alert(`El seguro le pagará el valor de $${CAMIONETA} por su camioneta`);
        } else if (robo === "ESC") {
            break;
        } else {
            // Notifico que la opcion es invalida
            alert("Opción inválida.");
        }
        break;
        case "3":
        // Le pedimos que pague su poliza
        alert("Gracias por pagar su póliza.");
        break;
        case "SALIR":
        // Le agradecemos por usar el programa
        alert("Gracias por usar nuestro programa.");
        break;
        default:
        // Notifico que la opcion es invalida
        alert("Opción inválida.");
        break;
    }
    } while (inicio !== "SALIR");