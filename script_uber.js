class Uber{
    constructor(driverFare,distanceFare,distanceCover){
        this.driverFare = driverFare;
        this.distanceFare = distanceFare;
        this.distanceCover = distanceCover;
    }
    getfare()
    {
        // return [this.driverFare+this.distanceFare*this.distanceCover];
        return `Totalfare for your journey is
${this.driverFare+this.distanceFare*this.distanceCover}`;
    }
}
let fare= new Uber(5,10,50);
console.log(fare.getfare());