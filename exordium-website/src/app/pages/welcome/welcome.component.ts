import { Component, OnInit } from '@angular/core';

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

    jarallaxElement();
    
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.2
    });
  }

}
