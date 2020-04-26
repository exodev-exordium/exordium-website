import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-connections',
  templateUrl: './user-connections.component.html',
  styleUrls: ['./user-connections.component.scss']
})
export class UserConnectionsComponent implements OnInit {
  public currentUser;

  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    console.log(location);
  }

  ngOnInit() {
    this.userService.getUserDataBasic().subscribe(res => {
      this.currentUser = res.response;
    });

    // Get Params
    this.route.queryParams.subscribe(params => {
      if (params) {
        if (params.discord) {
          this.userService.connectDiscord().subscribe(res => {
            console.log(res);
            //this.currentUser = res.response;
          });
        }
        if (params.github) {
          this.userService.connectGithub().subscribe(res => {
            console.log(res);
            //this.currentUser = res.response;
          });
        }
      }
    }); 
  }

}
