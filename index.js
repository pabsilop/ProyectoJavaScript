//Se importan las clases
import * as readline from 'readline-sync';
//const Plaza = require('./modelos/plaza');
import {Plaza} from './modelos/plaza.js';
//const tipoVehiculo = require('./modelos/tipoVehiculo');
import {tipoVehiculo} from './modelos/tipoVehiculo.js';
//const Datos = require('./repositorio/datos');
import {createParking} from './repositorio/datos.js';
//const User = require('./controladores/user');
import {contarPlazasDisponibles, imprimirPlazasDisponibles} from './controladores/user.js';
//const Parking = require('./modelos/parking');
import {Parking} from './modelos/parking.js';
//const Ticket = require('./modelos/ticket');
import {Ticket} from './modelos/ticket.js';


//Se inicializan los datos.
let parking = createParking();
let contrasenia="1234";
let opt = readline.question('|1 - Zona Usuario| |2 - Zona Admin|');
console.log(opt);


switch (opt) {

    case '1':
        
        let opt2 = readline.question('| 1 - Depositar Vehiculo | | 2 - Retirar Vehiculo | | 3 - Depositar Abonados | | 4 - Retirar Abonados |')

        switch (opt2) {
            case '1':
                console.log(imprimirPlazasDisponibles(parking));
               
                break;
            case '2':

                break;
            case '3':

                break;
            case '4':

                break;
            case '0':

                break;
        }

        break;
    case '2':
       let peticion= readline.question('Introduzca la contraseña de adminisitrador del programa\n')
        if(peticion==contrasenia){
            let opt3 = readline.question('| 1 - Estado del Parking | | 2 - Facturación | | 3 - Consulta de Abonados | | 4 - Abonos | | 5 - Calidad de Abonos |')
            switch (opt3) {
                case '1':
                    console.log(imprimirPlazasDisponibles(parking));
                   
                    break;
                case '2':
    
                    break;
                case '3':
    
                    break;
                case '4':
    
                    break;
                case '5':

                    break;
                case '0':

                    break;
            }
        }else{
            console.log("Contraseña de admin incorrecta, no puedes pasar")
        }
        
       
        break;
}


main();