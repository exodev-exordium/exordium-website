import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss']
})
export class UserOverviewComponent implements OnInit {
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
