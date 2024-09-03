import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// export const API_URL = 'http://127.0.0.1:8000/api';

@Injectable({
  providedIn: 'root', // Assure que ApiClient est fourni au niveau de l'application
})
export class ApiClient {
  API_URL = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) {}

  private createHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.getAuthToken()}`,
    });
  }

  private getAuthToken(): string | null {
    return localStorage.getItem('token');
  }

  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.API_URL}/${endpoint}`, {
      headers: this.createHeaders(),
    });
  }

  post<T>(endpoint: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.API_URL}/${endpoint}`, body, {
      headers: this.createHeaders(),
    });
  }

  put<T>(endpoint: string, id: number, body: any): Observable<T> {
    return this.http.put<T>(`${this.API_URL}/${endpoint}/${id}`, body, {
      headers: this.createHeaders(),
    });
  }

  delete<T>(endpoint: string, id: number): Observable<T> {
    return this.http.delete<T>(`${this.API_URL}/${endpoint}/${id}`, {
      headers: this.createHeaders(),
    });
  }
}
