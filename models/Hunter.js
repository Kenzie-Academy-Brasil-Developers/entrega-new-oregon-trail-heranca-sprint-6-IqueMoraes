const Traveler  = require("./Traveler");

class Hunter extends Traveler{
    // constructor(name){
    //     super(name);
    //     this._food = 2;
    //     this._healthy = true;
    // }

    constructor(name){
        super(name, true, 2)
    }
    hunt(){
        this.food += 5;

    }
    eat(){
        if(this.food >= 2){
            this.food -= 2;
        }else{
            this.food = 0;
            this.isHealthy = false
        }

    }

    giveFood(traveler, numOfFoodUnits){
        if(numOfFoodUnits > this.food){
            console.log(`O caçador dispões de ${this.food} unidades de comida. Não é possível fazer a doação`)
        }else{
            this.food -= numOfFoodUnits;
            traveler.food += numOfFoodUnits;
        }
    }
}

module.exports = Hunter;
