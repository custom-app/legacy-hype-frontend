import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TranslateModule } from "@ngx-translate/core";
import { MaterialModule } from '@shared/material/material.module';
import { SharedModule } from "@shared/shared.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule, TranslateModule, MaterialModule, SharedModule, RouterModule
  ]
})
export class HomeModule { }
