export class Ticket{
    constructor(matricula, fecha, pin,idPlaza){
        this.matricula=matricula;
        this.fecha=fecha;
        this.pin=pin;
        this.idPlaza=idPlaza;
    }
    toString(){
        return `Matrícula del vehículo: ${this.matricula} || Fecha de entrada: ${this.fecha} || Pin: ${this.pin} || Número de plaza: ${this.idPlaza}`; 
    }
}
 