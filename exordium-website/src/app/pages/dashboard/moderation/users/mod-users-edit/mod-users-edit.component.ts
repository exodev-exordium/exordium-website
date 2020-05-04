import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from 'src/app/service/user.service';
import { ModerationService } from 'src/app/service/moderation.service';

import { Countries } from 'src/app/service/variables/countries.var';
import { Permissions } from 'src/app/service/variables/permissions.var';

@Component({
  selector: 'app-mod-users-edit',
  templateUrl: './mod-users-edit.component.html',
  styleUrls: ['./mod-users-edit.component.scss']
})
export class ModUsersEditComponent implements OnInit {
  // User Autentication
  currentUser: any;

  // Country and Permission Variables
  countries: any;
  permissions = [];
  titles = [];

  // Editing User
  editUser: any;
  editUserPermissions = [];
  editUserTitle = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private moderationService: ModerationService,
  ) { }

  ngOnInit(): void {
    this.countries = new Countries().countries;
    this.permissions = new Permissions().roles;
    this.titles = new Permissions().titles;

    this.userService.getUserDataBasic().subscribe(res => {
      this.currentUser = res.response;

      this.checkPermissions();
    });
  }

  checkAccessPage(array, key, value) {
    return array.some(object => object[key] === value);
  }

  checkPermissions() {
    if (this.checkAccessPage(this.currentUser.access.pages, 'page', 'users')) {
      this.route.paramMap.subscribe(params => {
        this.moderationService.getUser(params.get('id')).subscribe(res => {
          this.editUser = res;
          console.log(this.editUser);

          this.editUserPermissions = this.editUser.access.roles.map((item) => {
            return item.role
          });
          console.log(this.editUserPermissions);

          this.editUserTitle = this.editUser.title;
        });
      });
    } else {
      this.router.navigate(['dashboard']);
    }
  }

}
