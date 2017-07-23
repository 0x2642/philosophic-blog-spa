import { Component } from '@angular/core';
import { UtilService } from "app/shared/util.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor (private utilService: UtilService) {
    utilService.updateTitle('App');
   }


}
