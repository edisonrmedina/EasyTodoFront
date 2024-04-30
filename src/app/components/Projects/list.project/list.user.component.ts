import { Component, Inject, OnDestroy, OnInit, inject } from '@angular/core';
import { Project } from '../../../interfaces/project.interfce';
import { UserService } from '../user.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Task } from '../../../interfaces/task.interface';
import { CommonModule } from '@angular/common';
import { SecurcityManagerService } from '../../../seguridad/exploresManager/securcity-manager.service';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-list.user',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './list.user.component.html',
  styleUrl: './list.user.component.css'
})
export class ListUserComponent implements OnInit , OnDestroy {
    proyectsList!: Project[];
    tasks : Task[] = [];
    storage = inject(SecurcityManagerService);
    router = inject(Router);

    private idUsuario!:string;
    
    constructor(private _http: UserService, private activeRoute: ActivatedRoute) {
      
    }
 
  ngOnInit(): void {
    //pudimos haber tomado el token del localStorage
    this.activeRoute.queryParams.subscribe(params  => {
      this.idUsuario = params['idUsuario'];
      debugger;

        this._http.getProjectsUsers(this.idUsuario,).subscribe(
        (data: Project[]) => {
          debugger
        this.proyectsList = data;
        data.forEach(project => {
          this.tasks.push(...project.Tareas);
        });
        },
        error => console.log(error),
        () => console.log('Completed'),
        );  

//        this.router.navigate(['/']);
      
    
      
    });
  }

  ngOnDestroy(): void {
    // this.router.navigate(['/']);
  }
}

