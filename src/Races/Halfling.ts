import Race from './Race';
import racesData from './data/racesData';

const { HALFLING_HP } = racesData;

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = HALFLING_HP;

    Halfling._instances += 1;
  }

  public static createdRacesInstances(): number {
    return Halfling._instances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;