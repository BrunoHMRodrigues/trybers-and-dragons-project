import Race from './Race';
import racesData from './data/racesData';

const { ELF_HP } = racesData;

class Elf extends Race {
  private _maxLifePoints: number;
  private static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = ELF_HP;

    Elf._instances += 1;
  }

  public static createdRacesInstances(): number {
    return Elf._instances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;