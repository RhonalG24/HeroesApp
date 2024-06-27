import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onLogin():void{
    this.authService.login('user', 'pass')
      .subscribe( user => {
        if( !user ) return;
        this.router.navigate(['/']);
      })
  }
}
