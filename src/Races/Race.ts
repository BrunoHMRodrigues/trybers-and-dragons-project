abstract class Race {
  private _name: string;
  private _dexterity: number;

  // protected static instances = 0;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;

    // Race.instances += 1;
  }

  public get name(): string {
    return this._name;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  public abstract get maxLifePoints(): number;
}

export default Race;
