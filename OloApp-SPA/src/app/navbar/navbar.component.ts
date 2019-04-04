import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // kapag kukuha tayo info sa template
  // gawa tayo var: type = {};
  // object variable yan.
  modelOLO: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    // login method is returning as observable
    // if tatawagin need mag subscribe
    // next function means method is succesful.
    // next if succesful.
    // else error duh
    this.authService.login(this.modelOLO)
    .subscribe(() => {
      console.log('Logged in');
    },
      error => {
        console.log('failed to login');
      });
  }

  // taga check kung nalagay na sa localstorage yung token.
  // via response from the post.
  // check da service.
  loggedIn() {
    const token = localStorage.getItem('token');
    // !! returns a true or false value
    // kung meron sa token, return true
    // else false.
    return !!token;
  }
  logOut() {
    localStorage.removeItem('token');
    console.log('Logged out');
  }
}
