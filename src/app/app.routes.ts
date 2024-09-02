import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { LoginGuard } from './guard/login.guard';
import { AuthGuard } from './guard/auth.guard';
import { RegsiterComponent } from './regsiter/regsiter.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: AuthComponent, canActivate: [LoginGuard] },
  { path: 'register', component: RegsiterComponent },
  { path: '**', redirectTo: 'login' },
];
