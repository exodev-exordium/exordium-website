import { Component, OnInit } from '@angular/core';
import { jarallax } from 'jarallax';
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

  ngOnInit(): void {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.6
    });

    this.authService.getUserData().subscribe(res => {
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
