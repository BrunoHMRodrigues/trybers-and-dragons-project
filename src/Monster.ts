import { SimpleFighter } from './Fighter';

const DEFAULT_HP = 85;
const DEFAULT_STRENGTH = 63;

class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = DEFAULT_HP;
    this._strength = DEFAULT_STRENGTH;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  attack(enemy: SimpleFighter): void {
    const damage: number = this._strength;
    enemy.receiveDamage(damage);
  }

  receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }
}

export default Monster;