import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private http = inject(HttpClient);
  readonly url = 'http://127.0.0.1:8000/api';

  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.userSubject.next(JSON.parse(storedUser));
    }
  }

  loginUser(email: string, password: string) {
    return this.http.post(`${this.url}/login`, { email, password }).pipe(
      map((response: any) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.username));
        this.userSubject.next(response.username);
        return response;
      })
    );
  }

  register(name: String, email: String, password: String) {
    return this.http.post(`${this.url}/register`, {
      email: email,
      password: password,
      name: name,
    });
  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }
}
