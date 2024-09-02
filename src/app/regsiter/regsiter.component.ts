import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-regsiter',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './regsiter.component.html',
  styleUrl: './regsiter.component.css',
})
export class RegsiterComponent {
  name = '';
  email = '';
  password = '';
  erroMesage = '';
  private authService = inject(AuthServiceService);
  private route = inject(Router);
  register() {
    if (this.email == '' || this.password == '') {
      this.erroMesage = 'Please fill in all fields';
    } else {
      this.authService
        .register(this.name, this.email, this.password)
        .subscribe(() => {
          this.route.navigate(['/login']);
        });
    }
  }
}
