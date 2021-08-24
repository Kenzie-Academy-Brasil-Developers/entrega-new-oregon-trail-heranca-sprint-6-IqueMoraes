class Wagon {
    constructor(capacidade){
        this.capacity = capacidade;
        this._passengers = []
    }
    set passengers(traveler){
        this._passengers.push(traveler);
    }
    get passengers(){
        return this._passengers;
    }
    getAvailableSeatCount = ()=>{
        return this.capacity - this.passengers.length
    }

    join = (traveler) => {
        return this.getAvailableSeatCount() > 0 ? this.passengers=traveler : console.log("There's no empty seat on this Wagon")
    }

    shouldQuarantine = () => {
        const isAnyoneSick = () =>{
            let isDangerous = false
            this.passengers.forEach( item =>{
             return item._healthy === false ? isDangerous = true : isDangerous = false
               
            })

            return isDangerous
        }

       return isAnyoneSick()

    }

    totalFood = () =>{
        const allSuplies = this.passengers.reduce((acc, traveler) => {
            acc += traveler._food;
            return acc
        },0)

        return allSuplies
    }

}

module.exports = Wagon;