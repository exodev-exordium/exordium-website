import { Component, OnInit } from '@angular/core';
import {
  jarallax,
  jarallaxElement,
  jarallaxVideo
} from 'jarallax';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jarallaxElement();
    
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.2
    });
  }

}
