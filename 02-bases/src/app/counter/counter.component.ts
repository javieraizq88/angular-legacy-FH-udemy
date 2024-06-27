import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public title: string = 'desde app.component.ts';
  public counter: number = 10;

  aumentar(value: number): void {
    this.counter += value;
  }
  disminuir(value: number): void {
    this.counter -= value;
  }

  reset(value: number): void {
    this.counter = value;
  }
}
