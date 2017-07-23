import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilService } from './util.service';

import {
  MdInputModule,
  MdMenuModule,
  MdToolbarModule,
  MdListModule,
  MdGridListModule,
  MdButtonModule,
  MdIconModule,
  MdCardModule,
  MdProgressBarModule,
  MdDialogModule,
  MdSnackBarModule
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    MdMenuModule,
    MdToolbarModule,
    MdListModule,
    MdGridListModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdProgressBarModule,
    MdDialogModule,
    MdSnackBarModule
  ],
  exports: [
    CommonModule,
    MdInputModule,
    MdMenuModule,
    MdToolbarModule,
    MdListModule,
    MdGridListModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdProgressBarModule,
    MdDialogModule,
    MdSnackBarModule
  ],
  declarations: [],
  providers: [UtilService]
})
export class SharedModule { }
