import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'src/app/service/shared/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentUser = new User();

  constructor(
    private authService: AuthService
  ) { 
    this.authService.currentUser().subscribe(res => {
      this.currentUser = res.response;
    })
  }

  ngOnInit(): void {
  }

}
