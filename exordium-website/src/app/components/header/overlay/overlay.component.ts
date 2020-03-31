import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // should stick the the top of the window
  // should have the first section underneath it (margin-bottom: -#px )
  
  // as the window scrolls down it should have bg-primary-3 as the background

}
