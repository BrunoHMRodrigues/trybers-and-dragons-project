import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(player1: Fighter, player2: Fighter) {
    super(player1, player2);
    this.fight();
  }

  override fight(): number {
    const enemy = this.opponent;

    while (this.player.lifePoints !== -1 && enemy.lifePoints !== -1) {
      this.player.attack(enemy);
      if (enemy.lifePoints !== -1) {
        enemy.attack(this.player);
      }
    }

    return super.fight();
  }
}

export default PVP;
