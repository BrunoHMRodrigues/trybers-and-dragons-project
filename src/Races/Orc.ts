import Race from './Race';
import racesData from './data/racesData';

const { ORC_HP } = racesData;

class Orc extends Race {
  private _maxLifePoints: number;
  private static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = ORC_HP;

    Orc._instances += 1;
  }

  public static createdRacesInstances(): number {
    return Orc._instances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;