import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  readonly name = input<string>();
  readonly numberCounter = signal<number>(0);
  readonly counter = output<number>();

  ngOnInit() {
    console.log('Input Signal value:', this.name());
  }

  increaseCounter():void {
    this.numberCounter.update((num) => num + 1);
    this.counter.emit(this.numberCounter());
  }
}
