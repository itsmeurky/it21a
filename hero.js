class Hero{
      #health;

    constructor (name,health,attack){
        this.name = name;
        this.#health = health;
        this.attack = attack;
        this.item = [];
    }

    
    getHealth(){
        return this.#health;
    }

    getName(){
        console.log(this.name);
    }

    getAttack(){
        return this.attack;
    }

getStats(){
    console.log("/n");
    console.log("Name:" + this.name);
    console.log("Health:" + this.#health);
    console.log("Attack:" + this.attack);
}
    addItem(item){
        this.item.push(item);
    }
    totalAttack(){
        return this.attack + this.item.reduce((sum,i)=> sum + i.bonusAttack,0);
    }
} 
class Warrior extends Hero{
    useAbility(){
        console.log(`${this.name}uses power Strike`);
    }
}   

class Mage extends Hero{
    constructor(name,health,attack,mana){
        super(name,health,attack);
        this.mana = mana;

    }
    useAbility(){
        console.log(`${this.name}'casts Fireball`);
    }
}

class Item{
    constructor(name,bonusAttack){
        this.name = name;
        this.bonusAttack = bonusAttack;
    }
}
const sword = new Item("Sword",5);
const staff = new Item("Staff",10);

const Thorin = new Warrior("Thorin",100,10);
Thorin.getName();
console.log("");
 Thorin.addItem(sword);
 console.log(Thorin.totalAttack());
 Thorin.addItem(sword);
 console.log(Thorin.totalAttack());
 Thorin.addItem(sword);
 console.log(Thorin.totalAttack());
 Thorin.addItem(sword);
console.log(Thorin.totalAttack());

//const Gandalf = new Mage("Gandalf",80,8,50);
//Gandalf.useAbility();
//Gandalf.getStats();

function performanceAbility(hero){
    console.log("");
    hero.useAbility();
}

//performanceAbility(Thorin);
//performanceAbility(Gandalf);