import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

import 'rxjs/add/operator/toPromise';

import { environment } from 'environments/environment';

@Injectable()
export class BlogApiService {

  private baseUrl: string;

  constructor(http: Http) {
    this.baseUrl = environment.apiEndpoint;
  }

  private responseHandle = function (data: any) {
    return;
  }

  private errorHanlde = function (e: any) {
    return;
  }

  feedMeOTBill = function () {
    return 'OT24h';
  }

}
