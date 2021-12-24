import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyComponent } from './buy.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {SharedModule} from "@shared/shared.module";
import {MaterialModule} from "@shared/material/material.module";



@NgModule({
  declarations: [
    BuyComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, TranslateModule, SharedModule, MaterialModule
  ]
})
export class BuyModule { }
