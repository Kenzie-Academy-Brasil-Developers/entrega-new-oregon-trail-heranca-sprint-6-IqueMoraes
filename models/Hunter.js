const Traveler  = require("./Traveler");

class Hunter extends Traveler{
    // constructor(name){
    //     super(name);
    //     this._food = 1;
    //     this._healthy = true;
    // }

    constructor(name){
        super(name, true, 2)
    }
    hunt(){
        console.log('chegou aqui')
        this.food += 5;
        console.log(this.food)

    }
    eat(){
        if(this.food >= 2){
            console.log("hunter comeu")
            this.food -= 2;
        }else{
            this.food = 0;
            this.ishealthy = false
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
