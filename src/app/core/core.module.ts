import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogApiService } from './blog-api.service';
import { LoggerService } from './logger.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [BlogApiService, LoggerService]
})
export class CoreModule { }
