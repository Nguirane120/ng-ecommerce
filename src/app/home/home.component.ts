import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  username: any;
  constructor(private authService: AuthServiceService) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((data) => {
      console.log(data);
      this.username = data;
    });
  }
}
