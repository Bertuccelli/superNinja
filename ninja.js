class Ninja {
    constructor(name, speed, strength){
        this.name = name;
        this.health = 100;
        this.speed = speed=3;
        this.strength = strength=3;
    }

    sayName() {
        console.log(this.name)
    }

    showStats() {
        console.log(this.name, this.strength, this.speed, this.health)
    }

    drinkSake() {
        this.health +=10;
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name, 10, 10)
        this.health = 200;
        this.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("There is not a monster more dangerous than a lack of compassion")
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();