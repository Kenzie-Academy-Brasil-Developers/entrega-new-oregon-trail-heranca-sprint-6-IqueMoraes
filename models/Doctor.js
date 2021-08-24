const Traveler = require("./Traveler");

class Doctor extends Traveler{
    // constructor(name){
    //     super(name);
    //     this._food = 1;
    //     this.isHealthy = true;

    // }

    constructor(name, value, number){
        super(name, value, '1')
    }

    heal(traveler){
        return traveler.isHealthy = true;
    }
}

module.exports = Doctor;