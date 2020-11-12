import {Plaza} from '../modelos/plaza.js';
import {tipoVehiculo} from '../modelos/tipoVehiculo.js';
import {Parking} from '../modelos/parking.js'

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

export {createParking};
