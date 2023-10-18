import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../validators/password-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // userName = new FormControl('enter username', Validators.required)
  // password = new FormControl('enter password', [Validators.required, passwordValidator])

  // loginFrm = new FormGroup({
  //   userName: new FormControl('enter username',Validators.required),
  //   password: new FormControl('enter password', [Validators.required, passwordValidator])
  // })

  loginFrm: FormGroup;

  constructor(private builder: FormBuilder) {
    this.loginFrm = this.builder.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, passwordValidator]]
    })
  }

  get userName() {
    return this.loginFrm.get('userName')
  }
  get password() {
    return this.loginFrm.get('password')
  }
  submit() {
    // const uname = this.userName.value
    // const pwd = this.password.value
    // const uname = this.loginFrm.get('userName')
    // const pwd = this.loginFrm.get('password')
    const uname = this.userName?.value
    const pwd = this.password?.value
    console.log(uname, pwd)

    console.log(this.loginFrm)
  }
}
