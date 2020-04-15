import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-logs',
  templateUrl: './user-logs.component.html',
  styleUrls: ['./user-logs.component.scss']
})
export class UserLogsComponent implements OnInit {
  public currentUser;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getUserData().subscribe(res => {
      this.currentUser = res.response;
    });
  }
}
