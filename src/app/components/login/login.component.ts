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
import { AuthResponse } from '../../interfaces/authResponse.interface';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'login-easy-todo',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private router = inject(Router);
  constructor(private _http: LoginService) {}

  //TODO: change language and pass encryption
  userLogin: UserLogin = {
    email: '',
    password: '',
  };

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  res!: any;

  login() {
    if (!this.loginForm.valid) return;

    if (!this.validateUserLogin(this.userLogin)) {
      return;
    }

    this._http.login(this.userLogin).subscribe((res: AuthResponse) => {
      debugger;
      this.res = res;
      if (!res.token)
        return
      localStorage.setItem('token', res.token); //idUsuario
      localStorage.setItem('idUsuario',res.idUsuario); //
      const navigationExtras: NavigationExtras = {
        queryParams: {
          idUsuario: res.idUsuario
        }
      };
      
      this.router.navigate(['app/projects'], navigationExtras);
    });

  }

  /**Agregar validaciones internas propias */
  validateUserLogin(userLogin: UserLogin) {
    this.userLogin.email = this.loginForm.value.email || '';
    this.userLogin.password = this.loginForm.value.password || '';
    return true;
  }
}
