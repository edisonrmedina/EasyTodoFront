import { Component, Inject, OnInit } from '@angular/core';
import { Project } from '../../../interfaces/project.interfce';
import { UserService } from '../user.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-list.user',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './list.user.component.html',
  styleUrl: './list.user.component.css'
})
export class ListUserComponent implements OnInit {
    proyectsList!: Project[];
    private idUsuario!:string;
    

    constructor(private _http: UserService, private activeRoute: ActivatedRoute) {
      
    }
  ngOnInit(): void {
    //pudimos haber tomado el token del localStorage
    this.activeRoute.queryParams.subscribe(params  => {
      this.idUsuario = params['idUsuario'];
      this._http.getProjectsUsers(this.idUsuario,).subscribe(
        (data: Project[]) => {
        this.proyectsList = data;
        },
        error => console.log(error),
        () => console.log('Completed'),
        );
    });
  }
}
