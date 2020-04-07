import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthService } from 'src/app/service/auth.service';

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

  constructor(
    @Inject (DOCUMENT) private document: Document,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if (this.authService.isSignedIn === true) {
      this.signedIn = true;
      this.framing();
    } else {
      this.signedIn = false;
    }
  }

  @HostListener("window:resize", [])
  onResize () {
    this.framing();
  }

  framing() {
    let windowWidth = $(window).width();

    // Dashboard Navbar Height
    let dashboardNavHeight = $('.nav-dashboard-wrapper').outerHeight();

    if (this.authService.isSignedIn === true) {
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

}
