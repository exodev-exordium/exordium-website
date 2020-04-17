import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { jarallax } from 'jarallax';

@Component({
  selector: 'app-user-cover',
  templateUrl: './user-cover.component.html',
  styleUrls: ['./user-cover.component.scss']
})
export class UserCoverComponent implements OnInit {
  public currentUser;

  constructor(
    public userService: UserService
    ) { }

  ngOnInit(): void {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.6
    });

    this.userService.getUserDataBasic().subscribe(res => {
      this.currentUser = res.response;
    });
  }

  displayRole(websiteRole) {
    const role = [{ role: websiteRole }];
    const apiRoles = this.currentUser.access.roles;

    return role.some(obj1 => {
      return apiRoles.some(obj2 => {
        return obj1.role === obj2.role;
      });
    });
  }

  displayConnected(service) {
    // function for displaying whether github and discord have been connected
  }

}
