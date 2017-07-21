import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  declarations: []
})
export class SharedModule { }
