import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { NetworkManagerServiceService } from '../commons/network/network-manager-service.service';
import { User } from '../interfaces/user.interface';
import { UserLogin } from '../interfaces/user.login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _netWork = inject(NetworkManagerServiceService);
  
  constructor(private http: HttpClient) { }
  
  login(user:UserLogin): Observable<User[]> {
    // Cambia la URL a la correcta
    let a = this.http.get('http://localhost:5181/api/v1/users'
    ).subscribe(
      resp => console.log(resp)
    );
    console.log(a);
    return this._netWork.post('http://localhost:5100/api/v1/auth/',user) as Observable<User[]>;
  }
}
