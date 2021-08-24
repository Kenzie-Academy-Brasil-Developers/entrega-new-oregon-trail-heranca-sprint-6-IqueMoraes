class Traveler {
    // constructor(nome) {
    //     this.name = nome;
    //     this._food = 1;
    //     this._healthy = true;
    // }

    constructor(name, isHealthy = 'true', food = '1') {
        this.name = name;
        this._food = Number(food);
        this._isHealthy = Boolean(isHealthy);
    }

    set food(value){
        this._food = value;
    }
    get food(){
        return this._food;
    }

    set ishealthy(value){
        this._ishealthy = value;
    }
    get ishealthy(){
        return this._ishealthy;
    }

    hunt = () => {
        this.food += 2
    }

    eat = () => {
        return this.food > 0 ? this.food-- : this.ishealthy = false;
    }
}

module.exports = Traveler;