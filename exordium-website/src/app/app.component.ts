import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { map, filter, scan } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(private router: Router, private titleService: Title) {}

  ngOnInit() {

    this.router.events
      .pipe(
        filter((event: any) => event instanceof NavigationEnd),
        map(() => this.router)
      ).subscribe((event) => {
        const title = this.getTitle(this.router.routerState, this.router.routerState.root).join(' - ');
        this.titleService.setTitle(`Exordium - ${title}`);
      }
    );
  }

  getTitle(state, parent) {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }

    return data;
  }
}
