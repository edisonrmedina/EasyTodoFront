import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { UserLogin } from '../interfaces/user.login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  login(user:UserLogin): Observable<User[]> {
    // Cambia la URL a la correcta
    return this.http.get<User[]>('http://localhost:5100/api/v1/user');
  }
}
