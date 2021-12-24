import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppFooterComponent } from './app-footer.component';
import { MatIconModule } from "@angular/material/icon";
import { TranslateModule } from "@ngx-translate/core";


@NgModule({
  declarations: [AppFooterComponent],
  imports: [CommonModule, RouterModule, MatIconModule, TranslateModule],
  exports: [AppFooterComponent]
})
export class AppFooterModule { }
