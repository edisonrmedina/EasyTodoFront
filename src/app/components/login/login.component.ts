import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserLogin } from '../../interfaces/user.login.interface';
import { LoginService } from '../../services/login.service';
import { AuthResponse } from '../../interfaces/auth.response.interface';
import { NavigationExtras, Router } from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { UserRegister } from '../../interfaces/user.register.interface';
import { SecurcityManagerService } from '../../seguridad/exploresManager/securcity-manager.service';

@Component({
  selector: 'login-easy-todo',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  private router = inject(Router);
  private storage =  inject(SecurcityManagerService);
  constructor(private _http: LoginService) {}
  registered = false;

  //TODO: change language and pass encryption

  userLogin: UserLogin = {
    email: '',
    contrasena: '',
  };
  userRegister : UserRegister = {
    email: '',
    contrasena: '',
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    contrasena: new FormControl('', [Validators.required]),
  });

  res!: any;

  login() {
    if (!this.loginForm.valid) return;

    if (!this.validateUserLogin(this.userLogin)) {
      return;
    }

    if(!this.registered){
      this._http.login(this.userLogin).subscribe((res: AuthResponse) => {
        debugger;
        this.res = res;
        if (!res.token)
          return

        this.storage.asignar('token', res.token);
        this.storage.asignar('idUsuario',res.idUsuario);
        const navigationExtras: NavigationExtras = {
          queryParams: {
            idUsuario: res.idUsuario
          }
        };
        
        this.router.navigate(['app/projects'], navigationExtras);
      });
    }else{
      //seria bueno preparar un proceso de onBoarding
      this._http.register(this.userLogin).subscribe((res:User)=> {
        //crear token
        console.log(res);

      }
    )
    }
    

  }

  /**Agregar validaciones internas propias */
  validateUserLogin(userLogin: UserLogin) {
    this.userLogin.email = this.loginForm.value.email || '';
    this.userLogin.contrasena = this.loginForm.value.contrasena || '';
    return true;
  }

  changeToRegistered() {
    this.registered = !this.registered;
  }

}
