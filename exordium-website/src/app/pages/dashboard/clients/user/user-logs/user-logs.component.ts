import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-logs',
  templateUrl: './user-logs.component.html',
  styleUrls: ['./user-logs.component.scss']
})
export class UserLogsComponent implements OnInit {
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
