import { Component, OnInit, Inject, HostListener, Host } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthService } from 'src/app/service/auth.service';

import * as jQuery from 'jquery';
const $ = jQuery;

@Component({
  selector: 'app-light-header',
  templateUrl: './light-header.component.html',
  styleUrls: ['./light-header.component.scss']
})
export class LightHeaderComponent implements OnInit {

    // User Signed in?
    signedIn: boolean;

    // Window being scrolled?
    windowScrolled: boolean;

    constructor(
      @Inject (DOCUMENT) private document: Document,
      private authService: AuthService
    ) { }

    ngOnInit(): void {
      this.checkSignedIn();

      // Header Options
      this.addFraming();
      this.stickyTop();

      $('.navbar-toggler').click(() => {
        $('nav.navbar').toggleClass('navbar-open');
      });
    }

    checkSignedIn() {
      if (this.authService.isSignedIn === true) {
        this.signedIn = true;
      } else {
        this.signedIn = false;
      }
    }

    addFraming() {
      // Main Navbar Height
      const mainNavHeight = $('nav.navbar').outerHeight();

      // Dashboard Navbar Height
      const dashboardNavHeight = $('.nav-dashboard-wrapper').outerHeight();

      // Main Nav Framing
      $('nav.navbar').parent().css({
        'min-height': `${mainNavHeight}px`
      });

      // About Nav Spacing
      $('.aboutNav').css({
        top: `${mainNavHeight}px`
      });

      // Dashboard Menu Framing
      $('.nav-dashboard-wrapper').parent().css({
        'min-height': `${dashboardNavHeight}px`
      });
    }

    stickyTop() {
      const windowWidth = $(window).width();

      // Main Nav
      $('nav.navbar').css({
        top: 0,
        'max-width': `${windowWidth}px`
      });

      // Dashboard Nav
      $('.nav-dashboard-wrapper').css({
        'max-width': `${windowWidth}px`
      });
    }

    @HostListener('window:resize', [])
    onResize() {
      this.addFraming();
      this.stickyTop();
    }

    @HostListener('window:scroll', [])
    onScroll() {
      if (window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
        this.windowScrolled = true;

        if (!$('nav.navbar').hasClass('scrolled')) {
          $('nav.navbar').addClass('position-fixed scrolled');
        }

        if (!$('.nav-dashboard-wrapper').hasClass('scrolled')) {
          $('.nav-dashboard-wrapper').addClass('position-fixed scrolled');
        }

      } else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
        this.windowScrolled = true;

        if ($('nav.navbar').hasClass('scrolled')) {
          $('nav.navbar').removeClass('position-fixed scrolled');
        }

        if ($('.nav-dashboard-wrapper').hasClass('scrolled')) {
          $('.nav-dashboard-wrapper').removeClass('position-fixed scrolled');
        }
      }
    }

  }

