import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'chip-component',
  templateUrl: './chip.component.html'
})
export class ChipComponent {
  @Input() state;
  @Input() value;
  @Output() chipClicked = new EventEmitter();

  localState = {
    active: false
  };

  handleChipClick(value) {
    if (!this.state.gameCycle.deal) {
        this.chipClicked.emit(value);
    }
  }

  handleChipMouseDown() {
    this.localState.active = true;
  }

  handleChipMouseUp() {
    this.localState.active = false;
  }
}
