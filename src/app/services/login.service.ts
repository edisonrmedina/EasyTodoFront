import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { UserLogin } from '../interfaces/user.login.interface';
import { NetworkManagerServiceService } from '../commons/network/network-manager-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _netWork = inject(NetworkManagerServiceService);
  
  constructor(private http: HttpClient) { }
  
  login(user:UserLogin): Observable<User[]> {
    // Cambia la URL a la correcta
    return this._netWork.get('http://localhost:5100/api/v1/user') as Observable<User[]>;
  }
}
