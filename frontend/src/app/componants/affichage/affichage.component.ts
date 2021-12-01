import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { LoginService } from './../../services/auth/login.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {

  listUser :Array<User> = []
  UserSubs: Subscription = new Subscription();

  constructor(public loginService:LoginService) {
    this.loginService.get()
    this.UserSubs = this.loginService.userSubject.subscribe((rsp) => {
      this.listUser = rsp;
    })
    this.loginService.emitUserSubject()
  }

  ngOnInit(): void {
  }

}
