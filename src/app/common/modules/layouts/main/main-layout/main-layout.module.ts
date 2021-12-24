import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MainLayoutComponent} from './main-layout.component';
import {AppHeaderModule} from '@shared/components/app-header/app-header.module';
import {TranslateModule} from "@ngx-translate/core";
import {AppFooterModule} from "@shared/components/app-footer/app-footer.module";
import {MaterialModule} from "@shared/material/material.module";


@NgModule({
  declarations: [MainLayoutComponent],
  imports: [CommonModule, RouterModule, AppHeaderModule, AppFooterModule,TranslateModule, MaterialModule],
  exports: [MainLayoutComponent]
})
export class MainLayoutModule {
}
