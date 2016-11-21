import { Component } from '@angular/core';

import { BlackJackGame } from '../../models/BlackJackGame';

export type InternalStateType = {
  [key: string]: any
};

@Component({
  moduleId: module.id,
  selector: 'board-component',
  templateUrl: './board.component.html'
})
export class BoardComponent {
  state;

  constructor(public game: BlackJackGame) {}

  ngOnInit() {
    this.state = this.game.toJson();
  }

  updateState() {
    this.state = this.game.toJson();
  }

  addChip(value) {
    this.game.addChip(value);
    this.updateState();
  }

  clearBet() {
    this.game.clearBet();
    this.updateState();
  }

  placeLastBet() {
    if (this.game.lastBet) {
      this.game.placeLastBet();
      this.game.deal();
      this.updateState();
    }
  }

  deal() {
    if (this.game.bet != 0) {
      this.game.deal();
      this.updateState();
    }
  }

  doubleBet() {
    if (this.game.cash >= this.game.bet) {
      this.game.doubleBet();
      this.updateState();
    }
  }

  stay() {
    this.game.stay();
    this.updateState();
  }

  hit() {
    this.game.hit();
    this.updateState();
  }

  newBet() {
    this.game.newBet();
    if (!this.game.cash && !this.game.bet) {
      this.game.giveMoreCash();
      this.updateState();
    } else {
      this.updateState();
    }
  }

  getMoreCash() {
    this.game.getMoreCash();
    this.updateState();
  }

}
