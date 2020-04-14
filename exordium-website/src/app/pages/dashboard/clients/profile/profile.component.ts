import { Component, OnInit, Input } from '@angular/core';
import { jarallax } from 'jarallax';
import { AuthService } from 'src/app/service/auth.service';
import { Account } from 'src/app/service/shared/account';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public currentUser = new Account();

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.6
    });

    this.authService.getUserData().subscribe(res => {
      this.currentUser = res.response;
    })
  }

  displayRole(websiteRole) {
    const role = [{ role: websiteRole }];
    const apiRoles = this.currentUser.access.roles;

    var result = role.some(function (obj1) {
      return apiRoles.some(function (obj2) {
        return obj1.role == obj2.role;
      });
    });

    console.log(apiRoles)
    return result;
  }

  displayConnected (service) {
    // function for displaying whether github and discord have been connected
  }

}
