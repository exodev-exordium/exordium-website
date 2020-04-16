import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-connections',
  templateUrl: './user-connections.component.html',
  styleUrls: ['./user-connections.component.scss']
})
export class UserConnectionsComponent implements OnInit {
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
