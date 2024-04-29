import { HttpClient } from '@angular/common/http';
import {  Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { NetworkManagerServiceService } from '../commons/network/network.manager.service';
import { User } from '../interfaces/user.interface';
import { UserLogin } from '../interfaces/user.login.interface';
import { AuthResponse } from '../interfaces/auth.response.interface';
import { UserRegister } from '../interfaces/user.register.interface';
import { SecurcityManagerService } from '../seguridad/exploresManager/securcity-manager.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private _netWork = inject(NetworkManagerServiceService);
  private storage = inject(SecurcityManagerService);

  constructor(private http: HttpClient) { }
  
  login(user:UserLogin): Observable<AuthResponse> {
    // Cambia la URL a la correcta
      return this._netWork.post('http://localhost:5181/api/v1/auth',user);
  }

  register(user:UserRegister) {
    return this._netWork.post('http://localhost:5181/api/v1/users',user);
  }

  logout() {
    this.storage.eliminar('token');
    this.storage.eliminar('idUsuario');
  }

}
