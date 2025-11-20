const output = document.getElementById("output");
const startBtn = document.getElementById("startBattle");
const resetBtn = document.getElementById("reset");

// 

function log(text) {
  output.textContent += text + "";
}

class Character {
  constructor(name, health, power) {
    this.name = name;
    this.health = health;
    this.power = power;
  }



  takeDamage(amount) {
    this.health -= amount;
    if (this.health < 0) this.health = 0;
    log(`${this.name} получил ${amount} урона. Здоровье: ${this.health}`);
  }

  attack(target) {
    log(`${this.name} атакует ${target.name} с силой ${this.power}`);
    target.takeDamage(this.power);
  }
}

class Warrior extends Character {
  constructor(name, health, power, armor) {
    super(name, health, power);
    this.armor = armor;
  }

  takeDamage(amount) {
    const reduced = amount - this.armor;
    const finalDamage = reduced > 0 ? reduced : 0;

    this.health -= finalDamage;
    if (this.health < 0) this.health = 0;

    log(`${this.name} (Воин) получил ${finalDamage} урона после брони. Здоровье: ${this.health}`);
  }
}

class Mage extends Character {
  constructor(name, health, power, mana) {
    super(name, health, power);
    this.mana = mana;
  }

  attack(target) {
    if (this.mana <= 0) {
      log(`${this.name} не может атаковать — нет маны!`);
      return;
    }


    this.mana--;
    log(`${this.name} (Маг) выпускает заклинание! Мана: ${this.mana}`);
    super.attack(target);
  }
}

let hero, warrior, mage;
function createObjects() {
  hero = new Character("Naruto", 100, 10);
  warrior = new Warrior("Sasuke", 150, 15, 5);
  mage = new Mage("Hinata", 80, 20, 3);
}
// 


startBtn.addEventListener("click", () => {
  output.textContent = "";
  createObjects();

  log("=== Объекты созданы ===");
  log(JSON.stringify(hero));
  log(JSON.stringify(warrior));

  log(JSON.stringify(mage));

  log("=== Битва ===");
  hero.attack(warrior);
  warrior.attack(mage);
  mage.attack(warrior);
  mage.attack(warrior);

  mage.attack(warrior);
  mage.attack(warrior);
});


resetBtn.addEventListener("click", () => {
  output.textContent = "";
  log("Очищено. Нажмите 'Начать битву'.");
});
