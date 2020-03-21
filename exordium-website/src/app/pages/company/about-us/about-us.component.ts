import { Component, OnInit } from '@angular/core';

import {
  jarallax,
  jarallaxElement
} from 'jarallax';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jarallaxElement();
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.6
    });
  }

}
