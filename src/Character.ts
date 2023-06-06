import Archetype, { Mage } from './Archetypes';
import Energy, { EnergyType } from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

const minValue = 1;
const maxValue = 10;
const minDamage = 1;

class Character implements Fighter {
  private _name: string;
  // private _race: Race = new Elf();
  private _race: Race;
  // private _archetype: Archetype = new Mage();
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: { type_: EnergyType, amount: number };

  constructor(
    name: string,
  ) {
    this._name = name;
    this._dexterity = getRandomInt(minValue, maxValue);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = Math.floor(this._race.maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(minValue, maxValue);
    this._defense = getRandomInt(minValue, maxValue);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(minValue, maxValue), 
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  attack(enemy: Fighter | SimpleFighter): void {
    const damage: number = this._strength;
    enemy.receiveDamage(damage);
  }

  special?(enemy: Fighter): void;

  levelUp(): void {
    const lifePointsIncrease = getRandomInt(minValue, maxValue);
    const previousMaxLifePoints = this._maxLifePoints;
    const newMaxLifePoints = previousMaxLifePoints + lifePointsIncrease;
    const maxRacialLifePoints = this._race.maxLifePoints;

    this._maxLifePoints = (newMaxLifePoints >= maxRacialLifePoints)
      ? maxRacialLifePoints : newMaxLifePoints;

    this._lifePoints += (this._maxLifePoints - previousMaxLifePoints);

    this._strength += getRandomInt(minValue, maxValue);
    this._dexterity += getRandomInt(minValue, maxValue);
    this._defense += getRandomInt(minValue, maxValue);

    this._energy = {
      ...this._energy,
      amount: 10,
    };
  }

  receiveDamage(attackPoints: number): number {
    const calcDamage: number = attackPoints - this._defense;
    const finalDamage: number = (calcDamage <= 0) ? minDamage : calcDamage;

    this._lifePoints -= finalDamage;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }
}

export default Character;