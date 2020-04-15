import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-connections',
  templateUrl: './user-connections.component.html',
  styleUrls: ['./user-connections.component.scss']
})
export class UserConnectionsComponent implements OnInit {
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
