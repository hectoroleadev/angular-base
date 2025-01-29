import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>counter : {{ count }}</h3>

    <button (click)="increment()">+1</button>
    <button (click)="reset()">reset</button>
    <button (click)="decrement()">-1</button>
  `,
})
export class CounterComponent {
  count: number = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }
}
