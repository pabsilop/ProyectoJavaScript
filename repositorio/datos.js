const Plaza = require('../modelos/plaza');
const tipoVehiculo = require('../modelos/tipoVehiculo');
const Parking = require('../modelos/parking');

let datos = [];
let numPlazas=45;

function init() {
    let counter = 0;
    //Rellena turismos
    for (let i = 0; i < 16; i++) {
        counter++
        let plaza = counter;
        datos.push(new Plaza(tipoVehiculo.TURISMO, plaza,"none"))
    }
    //Rellena motocicletas
    for (let i = 0; i < 16; i++) {
        counter++
        let plaza = counter;
        datos.push(new Plaza(tipoVehiculo.MOTOCICLETAS, plaza,"none"))
    }
    //Rellena caravanas
    for (let i = 0; i < 16; i++) {
        counter++
        let plaza = counter;
        datos.push(new Plaza(tipoVehiculo.CARAVANAS, plaza,"none"))
    }
}

function createParking(){
    init();
    return  new Parking(datos,numPlazas);
}

module.exports = {createParking : createParking};
