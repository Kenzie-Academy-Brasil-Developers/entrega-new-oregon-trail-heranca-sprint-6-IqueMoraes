const Traveler  = require("./models/Traveler");
const Wagon     = require("./models/Wagon");
const Hunter     = require("./models/Hunter");
const Doctor     = require("./models/Doctor");

let viajante = new Traveler();
let carroca = new Wagon();
let caçador = new Hunter();
let medico = new Doctor();

let viajanteSergio = new Traveler('Sergio');
let viajanteSimone = new Traveler('Simone');
let viajanteSamuel = new Traveler('Samuel');
let viajanteSandra = new Traveler('Sandra');
let viajanteJoão   = new Traveler('João');
let viajanteDiego  = new Traveler('Diego');
let viajanteDiana  = new Traveler('Diana');

module.exports = {
    viajante,
    carroca,
    caçador,
    medico,
}