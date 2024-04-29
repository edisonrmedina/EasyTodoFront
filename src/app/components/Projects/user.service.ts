import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { NetworkManagerServiceService } from '../../commons/network/network.manager.service';
import { User } from '../../interfaces/user.interface';
import { Project } from '../../interfaces/project.interfce';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private networkManager  = inject(NetworkManagerServiceService);
  private _http = Inject(HttpClient);
  getUsers(): Observable<User[]>{
    return this.networkManager.get('http://localhost:5181/api/v1/users') as Observable<User[]>;
  }
  getProjectsUsers(id:string): Observable<Project[]>{
    return this.networkManager.get('http://localhost:5181/api/v1/proyectos/proyectsUser?idUser='+id) as Observable<Project[]>;
  }

}
