import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../model/user';
import { UserService } from '../../service/user-service/user.service';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  user = signal<User[]>([]);
  isLoading = signal(false);
  errorMessage = signal('');

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
    this.isLoading.set(true);
    this.errorMessage.set('');

    this.userService.getUser().subscribe({
      next: (response) => {
        this.user.set(response);
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error(error);
        this.errorMessage.set(error);
        this.isLoading.set(false);
      }
    });
  }
}