import { Component, inject } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private authService = inject(AuthServiceService);
  private router = inject(Router);

  onLogout() {
    this.authService.logoutUser();
    this.router.navigate(['/login']);
  }
}
