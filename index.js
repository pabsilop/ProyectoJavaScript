//Se importan las clases
const readline = require('readline');
const Plaza = require('./modelos/plaza');
const tipoVehiculo = require('./modelos/tipoVehiculo');
const Datos = require('./repositorio/datos');
const User = require('./controladores/user');
const Admin = require('./controladores/admin');
const Parking = require('./modelos/parking');
const Ticket = require('./modelos/ticket');
const user = require('./controladores/user');
//Se inicializan los datos.
let parking = Datos.createParking();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let opt = 0;
let op2 = 0;

function setOpt(inputOpt){
    opt = inputOpt
}

function main(){


switch (1) {

    case 1:
        
        switch (1) {
            case 1:
                console.log(User.imprimirPlazasDisponibles(parking))
                break;
            case 2:

                break;
            case 3:

                break;
            case 4:

                break;
        }

        break;
    case 2:

        break;
}


}

main();