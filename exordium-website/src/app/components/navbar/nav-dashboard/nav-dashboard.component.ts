import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';
import { Account } from 'src/app/service/shared/account';

import * as jQuery from 'jquery';
const $ = jQuery;

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
  moderationAccessRoles: any[] = [{ role: 'moderator'}, { role: 'administrator'}, { role: 'developer'}];

  constructor(
    @Inject (DOCUMENT) private document: Document,
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    if (this.authService.isSignedIn === true) {
      this.signedIn = true;

      this.userService.getUserDataBasic().subscribe(res => {
        this.currentUser = res.response;

        if (this.checkRoles(this.moderationAccessRoles, this.currentUser.access.roles)) {
          this.hasManagement = true;
        }

      });

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
  checkRoles(webRoles, apiRoles) {
    const result = webRoles.some(obj1 => {
      return apiRoles.some(obj2 => {
        return obj1.role === obj2.role;
      });
    });

    return result;
  }

  // Check what pages we have access to
  checkAccessPage(array, key, value) {
    return array.some(object => object[key] === value);
  }

  @HostListener('window:resize', [])
  onResize() {
    if (this.authService.isSignedIn === true) {
      this.framing();
    }
  }
  framing() {
    const windowWidth = $(window).width();

    // Dashboard Navbar Height
    const dashboardNavHeight = $('.nav-dashboard-wrapper').outerHeight();

    // Dashboard Menu Framing
    $('.nav-dashboard-wrapper').parent().css({
      'min-height': `${dashboardNavHeight}px`
    });

    // Transparent
    $('.nav-dashboard-wrapper.nav-dashboard-transparent').parent().css({
      'margin-bottom': `-${dashboardNavHeight}px`
    });

    // Dashboard Nav
    $('.nav-dashboard-wrapper').css({
      'max-width': `${windowWidth}px`
    });

  }

}
