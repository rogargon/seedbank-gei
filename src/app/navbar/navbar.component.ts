import { Component, OnInit } from '@angular/core';
import { AuthenticationBasicService } from '../login-basic/authentication-basic.service';
import {UserService} from "../user/user.service";
import {User} from "../login-basic/user";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isCollapsed: boolean;
  user: User;

  constructor(private authenticationService: AuthenticationBasicService,
              private userService: UserService) {
    this.user = this.userService.getUser();
  }

  ngOnInit(): void {
    this.isCollapsed = true;
  }

  isLogged(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  isRole(role: string): boolean {
    return this.authenticationService.isRole(role);
  }
}
