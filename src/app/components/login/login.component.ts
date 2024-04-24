import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserLogin } from '../../interfaces/user.login.interface';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'login-easy-todo',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
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
    debugger;
    this._http.login(this.userLogin).subscribe((res: any) => {
      this.res = res;
    });
  }

  /**Agregar validaciones internas propias */
  validateUserLogin(userLogin: UserLogin) {
    this.userLogin.email = this.loginForm.value.email || '';
    this.userLogin.password = this.loginForm.value.password || '';
    return true;
  }
}
