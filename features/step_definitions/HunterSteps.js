const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { caçador } = require("./../../app");
const Traveler = require("./../../models/Traveler")


/** GIVEN */
Given('um Hunter de nome {string}', function (string) {
    caçador.nome = string
});

Given('ele sempre começa a viagem com {int} refeições', function (int) {
    caçador.food = int
});

Given('ele sempre começa a viagem saudável', function () {
    caçador.isHealthy = true
});

/** WHEN */
When('o Hunter sair para caçar {int} vezes', function (int) {
    for(let i=0; i<int ; i++){
        caçador.hunt()
    }

});

When('o Hunter parar para comer {int} vezes', function (int) {
    for(let i=0; i<int ; i++){
        caçador.eat()
    }
});


When('a quantidade de refeições for inferior a {int}', function (int) {
    assert(caçador.food < int)
});

When('lhe pediram para dar suas {int} refeições', function (int) {
    caçador.giveFood(Traveler, int)
    });

/** THEN */

Then('a quantidade de refeições deverá ser igual a {int}', function (int) {
    assert.strictEqual(caçador.food, int);
});

Then('o Hunter não ficará doente', function () {
    assert.strictEqual(caçador.isHealthy, true);
});


Then('o Hunter ficará doente', function () {
    assert.strictEqual(caçador.isHealthy, false);

});

