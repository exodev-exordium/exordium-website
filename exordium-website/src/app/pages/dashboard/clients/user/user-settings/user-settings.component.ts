import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
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
