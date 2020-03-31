import { Component, OnInit } from '@angular/core';
import { jarallax, jarallaxElement } from 'jarallax';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.jarallaxInit();
  }

  jarallaxInit() {
    jarallaxElement();
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.4
    });
  }

}
