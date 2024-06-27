import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
