import { Component } from '@angular/core';
import { MaterialModuleModule } from '../../modules/material.module/material.module.module';
import { LoginComponent } from '../../components/login/login.component';

@Component({
    selector: 'app-page-login',
    standalone: true,
    templateUrl: './login.page.component.html',
    styleUrl: './login.page.component.css',
    imports: [MaterialModuleModule,LoginComponent]
})
export class LoginPageComponent {

}
