import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { NetworkManagerServiceService } from '../../commons/network/network-manager-service.service';
import { User } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private networkManager  = inject(NetworkManagerServiceService);
  private _http = Inject(HttpClient);
  getUsers(): Observable<User[]>{
    return this.networkManager.get('http://localhost:5181/api/v1/users') as Observable<User[]>;
  }

}
