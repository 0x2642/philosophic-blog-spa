import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { environment } from 'environments/environment';

@Injectable()
export class UtilService {

  constructor(private titleService: Title) { }

  updateTitle(title: string) {
    let defaultTitle: string = environment.blogTitle;

    this.titleService.setTitle(title ? title + ' - ' + defaultTitle : defaultTitle);
  }

}
