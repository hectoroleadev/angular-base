import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroes: string[] = ['spiderman', 'batman', 'hulk', 'worder woman'];
  public heroDeleted?: string;

  deleteLastHero(): void {
    this.heroDeleted = this.heroes.pop();
  }
}
