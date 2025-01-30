import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-characters',
  templateUrl: './add-characters.component.html',
})
export class AddCharactersComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character>;
  public character: Character;

  constructor() {
    this.character = { name: '', power: 0 };
    this.onNewCharacter = new EventEmitter();
  }

  saveCharacter(): void {
    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.cleanCharacter();
  }

  private cleanCharacter(): void {
    this.character = { name: '', power: 0 };
  }
}
