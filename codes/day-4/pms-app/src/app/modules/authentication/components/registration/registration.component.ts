import { Component, OnDestroy } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnDestroy {

  username = ''
  password = ''
  errorMessage = ''

  private regSubscription?: Subscription;

  constructor(private authSvc: AuthService) { }

  ngOnDestroy(): void {
    this.regSubscription?.unsubscribe()
  }

  submit() {
    this.regSubscription = this.authSvc.register(<User>{ username: this.username, password: this.password }).subscribe({
      next: (resp) => {
        if (resp.data != null) {
          this.errorMessage = ''
          window.alert(resp.message)
        } else {
          this.errorMessage = resp.message
        }
      },
      error: (err) => this.errorMessage = err.message,
      complete: () => {
        //redirect user to login component
      }
    })
  }
}
