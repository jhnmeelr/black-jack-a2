import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'player-hand-component',
  templateUrl: './player-hand.component.html'
})
export class PlayerHandComponent {
  @Input() state;

  getSuit(card) {
      if (card.suit === 'D') {
          return `<div class="suit diamonds"></div>`;
      } else if (card.suit === 'C') {
          return `<div class="suit clubs"></div>`;
      } else if (card.suit === 'S') {
          return `<div class="suit spades"></div>`;
      } else {
          return `<div class="suit hearts"></div>`;
      }
  }
}
