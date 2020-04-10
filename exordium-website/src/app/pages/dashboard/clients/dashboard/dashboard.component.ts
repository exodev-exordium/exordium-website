import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Account } from 'src/app/service/shared/account';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public currentUser = new Account();

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.getUserData().subscribe(res => {
      this.currentUser = res.response;
    })
  }

}
