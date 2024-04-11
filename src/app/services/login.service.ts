import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  login(values:any): Observable<User[]> {
    // Cambia la URL a la correcta
    return this.http.get<User[]>('http://localhost:5100/api/v1/user');
  }
}


interface User {
  UsuarioId: number;
  Nombre: string;
  Email: string;
  Contrasena: string;
  Proyectos: any[];
  Tareas: any[];
}