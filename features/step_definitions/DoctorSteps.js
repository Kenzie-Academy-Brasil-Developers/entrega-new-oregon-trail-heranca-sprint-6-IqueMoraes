const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const Traveler = require("./../../models/Traveler")
const { medico } = require("./../../app");
const { carroca } = require("./../../app");

let passengers = [];
/** GIVEN */
Given('um Doctor de nome {string}', function (string) {
    medico.name = string
});
Given('ele já inicia a viagem saudável', function () {
    medico.ishealthy = true
});

/** WHEN */

When('um dos travelers de nome <name> que está com saúde <isHealthy>', function (dataTable) {
    let data = dataTable.hashes();

    data.forEach(viajante => {
        viajante.isHealthy = 'true'
        let values          = Object.values(viajante)
        let newPassenger    = new Traveler(...values);
        passengers.push(newPassenger);
    });

});


/** THEN */

Then('todos os {int} passageiros estarão saudáveis', function (int) {
    for(let i=0; i<passengers.length; i++){
        assert.strictEqual(passengers[i].isHealthy, true)
    }
});