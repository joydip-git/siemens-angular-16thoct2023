import { Component, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../../validators/password-validator'
import { User } from '../../models/user';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { AUTH_SERVICE } from 'src/app/config/constants';
import { AuthServiceContract } from '../../models/auth-service-contract';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {

  loginFrm: FormGroup;
  errorMessage = ''
  private loginSubscription?: Subscription;

  constructor(
    private builder: FormBuilder,
    @Inject(AUTH_SERVICE.SERVICE_TOKEN) private authSvc: AuthServiceContract
  ) {
    this.loginFrm = this.builder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, passwordValidator]]
    })
  }
  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe()
  }

  get username() {
    return this.loginFrm.get('username')
  }
  get password() {
    return this.loginFrm.get('password')
  }

  submit() {
    const user: User = <User>this.loginFrm.value
    this.loginSubscription = this.authSvc.authenticate(user).subscribe({
      next: (resp) => {
        if (resp.data != null) {
          this.errorMessage = ''
          //save the token
          localStorage.setItem('token', resp.data)
        } else {
          this.errorMessage = resp.message
        }
      },
      error: (err) => {
        this.errorMessage = err.message
      },
      complete: () => {
        //redirect to the origially request
      }
    })
  }
}
