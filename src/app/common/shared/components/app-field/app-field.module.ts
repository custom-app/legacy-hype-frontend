import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "@shared/material/material.module";
import {AppFieldComponent} from "@shared/components/app-field/app-field.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [AppFieldComponent],
  imports: [
    CommonModule, MaterialModule, FormsModule, TranslateModule, ReactiveFormsModule
  ],
  exports: [
    AppFieldComponent
  ],
})
export class AppFieldModule { }
