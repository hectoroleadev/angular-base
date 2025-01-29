import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  name: string = 'iroman';
  age: number = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `name : ${this.name}, age: ${this.age}`;
  }

  changeAge(age: number): void {
    this.age = age;
  }
  changeHero(name: string): void {
    this.name = name;
  }
}
