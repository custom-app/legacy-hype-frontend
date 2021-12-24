import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpendHypeComponent } from './spend-hype.component';
import {TranslateModule} from "@ngx-translate/core";
import {MaterialModule} from "@shared/material/material.module";
import {SharedModule} from "@shared/shared.module";



@NgModule({
  declarations: [
    SpendHypeComponent
  ],
  imports: [
    CommonModule, TranslateModule, MaterialModule, SharedModule
  ]
})
export class SpendHypeModule { }
