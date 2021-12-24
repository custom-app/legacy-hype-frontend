import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppButtonComponent } from './app-button.component';
import {MaterialModule} from "@shared/material/material.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    AppButtonComponent
  ],
  exports: [
    AppButtonComponent
  ],
  imports: [
    CommonModule, MaterialModule, RouterModule
  ]
})
export class AppButtonModule { }
