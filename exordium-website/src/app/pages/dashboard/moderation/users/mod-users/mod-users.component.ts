import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from 'src/app/service/user.service';
import { ModerationService } from 'src/app/service/moderation.service';
import { Countries } from 'src/app/service/variables/countries.var';
import { Permissions } from 'src/app/service/variables/permissions.var';

@Component({
  selector: 'app-mod-users',
  templateUrl: './mod-users.component.html',
  styleUrls: ['./mod-users.component.scss']
})
export class ModUsersComponent implements OnInit {
  // User Autentication
  currentUser: any;

  // Users Table
  users: any[];
  loadingIndicator = true;
  selected = [];
  selectedRoles = [];
  columnMode = ColumnMode;
  selectionType = SelectionType;

  permissionAccess = [];

  constructor(
    public router: Router,
    public userService: UserService,
    private moderationService: ModerationService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.permissionAccess = new Permissions().roles;

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
      this.moderationService.getUsers().subscribe(res => {
        this.users = res;
        console.log(this.users);
        this.loadingIndicator = false;
      });
    } else {
      this.router.navigate(['dashboard']);
    }
  }

  onSelect({selected}) {
    console.log(`Select Event: `, selected, this.selected); 
    this.selectedRoles = this.selected[0].access.roles.map((item) => {
        return item.role
    });
    console.log('Roles: ', this.selectedRoles);
  }

  onView(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

}
