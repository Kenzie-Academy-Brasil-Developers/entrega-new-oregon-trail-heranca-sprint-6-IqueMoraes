const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const Traveler = require("./../../models/Traveler")
const { medico } = require("./../../app");
const { carroca } = require("./../../app");

let passengers = [];
let paciente = new Traveler()
let pacienteSaudavel = new Traveler



/** GIVEN */
Given('um Doctor de nome {string}', function (string) {
    medico.name = string;
});
Given('ele já inicia a viagem saudável', function () {
    medico.isHealthy = true;
});

Given('um traveler de nome {string} com a saúde prejudicada', function (string) {
    paciente.isHealthy = false;
});

Given('um traveler de nome {string} com boa saúde', function (string) {
    pacienteSaudavel.isHealthy = true;

  });

/** WHEN */

When('um dos travelers de nome <name> que está com saúde <isHealthy>', function (dataTable) {
    let data = dataTable.hashes();

    data.forEach(viajante => {
        viajante.isHealthy = 'true';
        let values          = Object.values(viajante);
        let newPassenger    = new Traveler(...values);
        passengers.push(newPassenger);
    });

});


When('{string} se torna paciente do Medico ele', function (string) {
    paciente.name = string;
    medico.heal(paciente);
});

When('{string} se encontra com o Medico ele', function (string) {
    pacienteSaudavel.name = string;
    medico.heal(pacienteSaudavel);
  });

/** THEN */

Then('todos os {int} passageiros estarão saudáveis', function (int) {
    for(let i=0; i<passengers.length; i++){
        assert.strictEqual(passengers[i].isHealthy, true)
    }
});


Then('terá sua saúde recuperada', function () {
    assert.strictEqual(paciente.isHealthy, true)
});

Then('se manterá saudável', function () {
    assert.strictEqual(paciente.isHealthy, true)
});