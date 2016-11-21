import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dealer-hand-component',
  templateUrl: './dealer-hand.component.html',
})
export class DealerHandComponent {
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
