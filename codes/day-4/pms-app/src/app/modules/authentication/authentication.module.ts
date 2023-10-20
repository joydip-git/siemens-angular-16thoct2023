import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PasswordValidatorDirective } from './directives/password-validator.directive';
import { RouterModule, Routes } from '@angular/router';
import { AUTH_SERVICE } from 'src/app/config/constants';

const authRoutes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegistrationComponent
      },
      {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'prefix'
      }
    ]
  }
]


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    PasswordValidatorDirective
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule.forChild(authRoutes)
  ],
  exports: [RegistrationComponent],
  providers: [
    {
      provide: AUTH_SERVICE.SERVICE_TOKEN,
      useClass: AUTH_SERVICE.SERVICE_TYPE
    }
  ]
})
export class AuthenticationModule { }
