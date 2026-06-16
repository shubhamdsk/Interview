import { Component, computed, signal } from '@angular/core';
import { UserComponent } from "./components/user/user.component";
import { InputOutputComponent } from "./components/input-output/input-output.component";

@Component({
  selector: 'app-root',
  imports: [UserComponent, InputOutputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Interview';
  // writable signal
  readonly itemCount = signal(2);
  readonly pricePerItem = signal(500);

  // computed signal
  readonly totalPrice = computed(() => {
    return this.itemCount() * this.pricePerItem();
  })

  increaseQuantity(): void {
    this.itemCount.update((item) => item + 1);
  }

  decreaseQuantity(): void {
    this.itemCount.update((item) => Math.max(0, item - 1));
  }

}
