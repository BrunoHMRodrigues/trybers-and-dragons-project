import Race from './Race';
import racesData from './data/racesData';

const { DWARF_HP } = racesData;

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = DWARF_HP;

    Dwarf._instances += 1;
  }

  public static createdRacesInstances(): number {
    return Dwarf._instances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;