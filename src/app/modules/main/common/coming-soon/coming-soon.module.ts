import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComingSoonComponent } from './coming-soon.component';
import {TranslateModule} from "@ngx-translate/core";
import {MaterialModule} from "@shared/material/material.module";
import {SharedModule} from "@shared/shared.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    ComingSoonComponent
  ],
  imports: [
    CommonModule, TranslateModule, MaterialModule, SharedModule, RouterModule
  ]
})
export class ComingSoonModule { }
