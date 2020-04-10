import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { ModerationService } from 'src/app/service/moderation.service';
import { Account } from 'src/app/service/shared/account';

@Component({
  selector: 'app-mod-contact',
  templateUrl: './mod-contact.component.html',
  styleUrls: ['./mod-contact.component.scss']
})
export class ModContactComponent implements OnInit {
  public currentUser = new Account();
  contactEmails: any[];

  constructor(
    public router: Router,
    private authService: AuthService,
    private moderationService: ModerationService
  ) { }

  ngOnInit(): void {
    this.authService.getUserData().subscribe(res => {
      this.currentUser = res.response;

      this.checkPermissions();
    })
  }

  checkAccessPage (array, key, value) {
    return array.some(object => object[key] === value);
  }

  checkPermissions() {
    if (this.checkAccessPage(this.currentUser.access.pages, 'page', 'contact')) {
      
      this.moderationService.contactEmails().subscribe(res => {
        this.contactEmails = res;
        console.log(this.contactEmails);
      })

    } else {
      this.router.navigate(['dashboard']);
    }
  }

}
