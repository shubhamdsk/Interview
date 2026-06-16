import { Component, signal } from '@angular/core';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-input-output',
  imports: [ChildComponent],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.scss'
})
export class InputOutputComponent {
  readonly name = signal<string>('Shubham');

  handleCounter(value: number): void {
    console.log({ value });
  }
}
