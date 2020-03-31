import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import * as jQuery from 'jquery';
let $ = jQuery;

@Component({
  selector: 'app-header-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.scss']
})
export class PrimaryHeaderComponent implements OnInit {
  windowScrolled: boolean;

  constructor(
    @Inject (DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    this.addMargin();
    this.stickyTop();
  }

  @HostListener("window:resize", [])
  onResize() {
    this.addMargin();
    this.stickyTop();
  }

  addMargin() {
        // Invert Margin
        let navHeight = $('nav.navbar').outerHeight();

        $('nav.navbar').parent().css({
          "min-height": `${navHeight}px`
        });
    
        // Spacing for AboutNav
        $('.aboutNav').css("top", `${navHeight}px`);
  }

  stickyTop() {
    // Stick to the top
    let windowWidth = $(window).width();

    $('nav').css({
      "top": 0,
      "max-width": `${windowWidth}px`
    });
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;

      if (!$('nav.navbar').hasClass("scrolled")) {
        $('nav.navbar').addClass("position-fixed scrolled");
      }

    } else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = true;

      if ($('nav.navbar').hasClass("scrolled")) {
        $('nav.navbar').removeClass("position-fixed scrolled");
      }
    }
  }

}
