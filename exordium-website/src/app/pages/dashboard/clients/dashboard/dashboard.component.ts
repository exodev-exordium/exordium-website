import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Account } from 'src/app/service/shared/account';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public currentUser = new Account();

  constructor(
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUserDataBasic().subscribe(res => {
      this.currentUser = res.response;
    });
  }

}
