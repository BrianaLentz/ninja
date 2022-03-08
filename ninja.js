class Ninja{
    constructor(name){
        this.name = name
        this.health = 100
        this.speed = 3
        this.strength = 3
    }
    sayName(){
        console.log(`${this.name}`)
    }
    showstats(){
        console.log(`${this.name}`,`${this.strength}`, `${this.speed}`, `${this.health}`)
    }
    drinkSake(){
        this.health +=10
        console.log("mmmm yummy sake")
        console.log(`${this.health} health`)
    }
}
class Sensei extends Ninja{
    constructor(name){
        super(name)
        this.health = 200
        this.speed = 10
        this.strength = 10
        this.wisdom = 10
    }
    speakWisdom(){
        super.drinkSake()
        console.log("You are the wisest of them all!")
    }
}
const superSensei = new Sensei("Ron");
superSensei.speakWisdom();
