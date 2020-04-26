import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-security',
  templateUrl: './user-security.component.html',
  styleUrls: ['./user-security.component.scss']
})
export class UserSecurityComponent implements OnInit {
  public currentUser;

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUserDataBasic().subscribe(res => {
      this.currentUser = res.response;
    });
  }
}
