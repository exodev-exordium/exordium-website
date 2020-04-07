import { Component, OnInit } from '@angular/core';
import { jarallax, jarallaxElement } from 'jarallax';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.jarallaxInit();
  }

  jarallaxInit() {
    jarallaxElement();
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.6
    });
  }

}
