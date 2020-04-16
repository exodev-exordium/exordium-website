import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss']
})
export class UserOverviewComponent implements OnInit {
  public currentUser;

  constructor(
    public authService: AuthService,
    public userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUserDataAdvanced().subscribe(res => {
      this.currentUser = res.response;

      console.log(this.currentUser)
    });
  }
  
}
