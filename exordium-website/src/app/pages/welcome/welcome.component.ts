import { Component, OnInit } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';

import Typed from 'typed.js';
import {
  jarallax,
  jarallaxElement
} from 'jarallax';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.typedjsInit();
    this.jarallaxInit();
  }

  jarallaxInit() {
    jarallaxElement();
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.2
    });
  }

  typedjsInit() {
    var options = {
      strings: [
        'Secure Internet.^2000', 
        'Private Data.^2000',
        'Military Grade.^2000', 
        'Environmental.^2000', 
      ],
      loop: true,
      typeSpeed: 45
    };
    var typed = new Typed('.typed', options);
  }

}
