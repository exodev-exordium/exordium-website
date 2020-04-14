import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthService } from 'src/app/service/auth.service';
import { Account } from 'src/app/service/shared/account';

import * as jQuery from 'jquery';
let $ = jQuery;

@Component({
  selector: 'app-nav-dashboard',
  templateUrl: './nav-dashboard.component.html',
  styleUrls: ['./nav-dashboard.component.scss']
})
export class NavDashboardComponent implements OnInit {
  // User Signed in?
  signedIn: boolean;
  currentUser = new Account();
  hasManagement: boolean;

  // Managment Access Roles
  moderationAccessRoles: any[] = [{ role: "moderator"}, { role: "administrator"}, { role: "developer"}];

  constructor(
    @Inject (DOCUMENT) private document: Document,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if (this.authService.isSignedIn === true) {
      this.signedIn = true;

      this.authService.getUserData().subscribe(res => {
        this.currentUser = res.response;

        if (this.checkRoles(this.moderationAccessRoles, this.currentUser.access.roles)) {
          this.hasManagement = true;
        }

      })

      this.framing();

    } else {
      this.signedIn = false;
    }
  }

  // Signout access button
  signout() {
    console.log('Signed out.');
    this.authService.signout();
  }

  // checkRoles
  checkRoles (webRoles, apiRoles) {
    var result = webRoles.some(function(obj1){
      return apiRoles.some(function(obj2){
        return obj1.role == obj2.role;
      });
    });
    
    return result;
  }

  // Check what pages we have access to
  checkAccessPage (array, key, value) {
    return array.some(object => object[key] === value);
  }

  @HostListener("window:resize", [])
  onResize () {
    if (this.authService.isSignedIn === true) {
      this.framing();
    }
  }
  framing() {
    let windowWidth = $(window).width();

    // Dashboard Navbar Height
    let dashboardNavHeight = $('.nav-dashboard-wrapper').outerHeight();

    // Dashboard Menu Framing
    $('.nav-dashboard-wrapper').parent().css({
      "min-height": `${dashboardNavHeight}px`
    });

    // Transparent
    $('.nav-dashboard-wrapper.nav-dashboard-transparent').parent().css({
      "margin-bottom": `-${dashboardNavHeight}px`
    });

    // Dashboard Nav
    $('.nav-dashboard-wrapper').css({
      "max-width": `${windowWidth}px`
    });

  }

}
