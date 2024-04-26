import { Routes } from '@angular/router';
import { EditUserComponent } from './components/user/edit.project/edit.user.component';
import { ListUserComponent } from './components/user/list.project/list.user.component';
import { LoginPageComponent } from './pages/login/login.page.component';
import { authGuardsGuard } from './guards/auth.guards.guard';
import { AutorizaComponent } from './pages/autoriza/autoriza.component';

export const routes: Routes = [
    /* la idea aca es modularizar como si fuera el bakc igual, por capacidades de negocio , 
    que probablemente se convertiran luego y luego en microfrontends*/
    {
        path:"app",
        canActivate:[authGuardsGuard],
        component:AutorizaComponent ,
        children :[
            {
                path:"projects",
                component: ListUserComponent,
                
            }
        ],
        
    },
    {
        path:"",
        component: LoginPageComponent
    }
    
 
];
