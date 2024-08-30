import { Component, inject, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  email = '';
  password = '';
  erroMesage = '';
  private authService = inject(AuthServiceService);
  private router = inject(Router);

  login() {
    this.authService
      .loginUser(this.email, this.password)
      .subscribe((user: any) => {
        if (user.status == 200) {
          this.router.navigate(['/home']);
        } else if (user.status == 401) {
          this.erroMesage = user.message;
        }
      });
  }
}
