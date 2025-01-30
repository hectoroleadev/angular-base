import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DBZService {
  public characters: Character[] = [];

  constructor() {
    const character1: Character = { id: uuid(), name: 'Goku', power: 100 };
    const character2: Character = { id: uuid(), name: 'Vegeta', power: 1 };

    this.characters.push(character1);
    this.characters.push(character2);
  }

  addCharacter(character: Character): void {
    const newCharacter: Character = { ...character, id: uuid() };

    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
