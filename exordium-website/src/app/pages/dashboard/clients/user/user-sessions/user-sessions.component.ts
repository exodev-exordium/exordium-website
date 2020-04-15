import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-sessions',
  templateUrl: './user-sessions.component.html',
  styleUrls: ['./user-sessions.component.scss']
})
export class UserSessionsComponent implements OnInit {
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
