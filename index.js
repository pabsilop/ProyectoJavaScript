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

let opt = readline.question('|1 - Zona Usuario| |2 - Zona Admin|');
console.log(opt);


switch (opt) {

    case '1':
        
        let opt2 = readline.question('|1 - Depositar Vehículo|')

        switch (opt2) {
            case '1':
                console.log(User.imprimirPlazasDisponibles(parking))
                break;
            case '2':

                break;
            case '3':

                break;
            case '4':

                break;
        }

        break;
    case '2':

        break;
}


main();