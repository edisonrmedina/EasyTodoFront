import { Routes } from '@angular/router';
import { EditUserComponent } from './components/user/edit.user/edit.user.component';
import { ListUserComponent } from './components/user/list.user/list.user.component';
import { LoginPageComponent } from './pages/login/login.page.component';

export const routes: Routes = [
    /* la idea aca es modularizar como si fuera el bakc igual, por capacidades de negocio , 
    que probablemente se convertiran luego y luego en microfrontends*/
    
    {
        path:"",
        component: LoginPageComponent
    },
    {
        path:'app/user',
        component:ListUserComponent
    },
    {
        path:'app/user/edit',
        component:EditUserComponent
    },
    // {
    //     path:'/app/project/',
    // },
    // {
    //     path:'/app/project/edit',
    // },
    // {
    //     path:'/app/user/edit',
    // },
    // {
    //     path:'/app/projects',
    // },
    

    
];
