//'use strict';






class Pokemon {



  constructor(name, type) {

    this.name = name;
    this.type = type;
    this.health = 100;

  }
  attack() {
    console.log('attack');
    this.health = this.health - 10;

  }
  doubleAttack() {
    this.attack();
    this.attack();
  }

}




const pikachu = new Pokemon('Pikachu', 'Electric');
console.log(pikachu);

const bulbasaur = new Pokemon('Bulbasaur', 'Electric');
console.log(bulbasaur);

pikachu.attack();

console.log(pikachu);
console.log(bulbasaur);

bulbasaur.doubleAttack();
