import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http: HttpClient) { }
  login(values:any){
    console.log(values);
    return this.http.get('http://localhost:3000/login');
  }
}
