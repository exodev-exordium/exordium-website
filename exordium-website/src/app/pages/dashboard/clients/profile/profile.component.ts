import { Component, OnInit } from '@angular/core';
import { jarallax } from 'jarallax';
import { AuthService } from 'src/app/service/auth.service';
import { Account } from 'src/app/service/shared/account';

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

}
