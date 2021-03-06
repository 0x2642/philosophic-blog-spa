import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from "@angular/router";

import { UtilService } from "app/shared/util.service";

import 'rxjs/add/operator/find';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private utilService: UtilService,
    private routerService: Router
  ) {
    utilService.updateTitle('App');
  }

  onPageLoading: boolean = false;

  ngOnInit() {
    this.routerService.events.find(e => e instanceof NavigationStart).subscribe(e => {
      this.onPageLoading = true;
      console.log(e.toString());
    });
    this.routerService.events.find(e => e instanceof NavigationEnd).subscribe(e => {
      this.onPageLoading = false;
      console.log(e.toString());
    });
  }
}
