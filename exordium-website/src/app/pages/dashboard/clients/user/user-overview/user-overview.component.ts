import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

import { Countries } from 'src/app/service/variables/countries.var';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss']
})
export class UserOverviewComponent implements OnInit {
  currentUser: any;
  countries: any;
  selectedCountry: any;

  constructor(
    public authService: AuthService,
    public userService: UserService
  ) { }

  ngOnInit() {
    this.countries = new Countries().countries;

    this.userService.getUserDataAdvanced().subscribe(res => {
      this.currentUser = res.response;
    });
  }

}
