import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from './app-header.component';
import { TranslateModule } from "@ngx-translate/core";
import {MaterialModule} from "@shared/material/material.module";



@NgModule({
  declarations: [AppHeaderComponent],
  imports: [ CommonModule, RouterModule, TranslateModule, MaterialModule ],
  exports: [AppHeaderComponent]
})
export class AppHeaderModule { }
