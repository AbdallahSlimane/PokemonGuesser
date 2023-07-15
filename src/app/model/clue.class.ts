export class Clue {
  showAttack: boolean;
  showEvolution: boolean;
  showType1: boolean;
  showType2: boolean;
  showLegendary: boolean;
  showAnswer: boolean;

  constructor() {
    this.showAttack = false;
    this.showEvolution = false;
    this.showType1 = false;
    this.showType2 = false;
    this.showLegendary = false;
    this.showAnswer = false;
  }

  revealNext() {
    if (!this.showType1) {
      this.showType1 = true;
    } else if (!this.showType2) {
      this.showType2 = true;
    } else if (!this.showEvolution) {
      this.showEvolution = true;
    } else if (!this.showLegendary) {
      this.showLegendary = true;
    } else if (!this.showAttack) {
      this.showAttack = true;
    } else {
      this.showAnswer = true;
    }
  }
}
