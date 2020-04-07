import { Component, OnInit } from '@angular/core';
import { jarallax, jarallaxElement } from 'jarallax';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.jarallaxInit();
  }

  jarallaxInit() {
    jarallaxElement();
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.6
    });
  }

}
