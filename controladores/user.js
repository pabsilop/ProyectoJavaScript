const tipoVehiculo = require('../modelos/tipoVehiculo');

let numTurismos=0;
let numCaravanas=0;
let numMotocicletas=0;

function contarPlazasDisponibles(parking){
    //Cuenta los número de plazas libres en el parking por tipo de vehículo y si está libre
    for(plaza in parking.plazas){
        console.log(parking.plazas[plaza].tipoVehiculo)
        console.log(parking.plazas[plaza].matricula)
        numTurismos=parking.plazas[plaza].tipoVehiculo==tipoVehiculo.TURISMO && parking.plazas[plaza].matricula == 'none' ? numTurismos++ : numTurismos;
        numCaravanas=parking.plazas[plaza].tipoVehiculo==tipoVehiculo.CARAVANAS && parking.plazas[plaza].matricula == 'none' ? numCaravanas++ : numCaravanas;
        numMotocicletas=parking.plazas[plaza].tipoVehiculo==tipoVehiculo.MOTOCICLETAS && parking.plazas[plaza].matricula == 'none' ? numMotocicletas++ : numMotocicletas;
    }

}

function depositarVehiculo(parking, vehiculo){
    contarPlazasDisponibles(parking);
}

function imprimirPlazasDisponibles(parking){
    contarPlazasDisponibles(parking);
    return `Plazas de Turismos = ${numTurismos} || Plazas de Motocicletas = ${numMotocicletas} || Plazas de Caravanas = ${numCaravanas}`;
}

module.exports = {contarPlazasDisponibles : contarPlazasDisponibles, imprimirPlazasDisponibles: imprimirPlazasDisponibles};
