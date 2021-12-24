import {NgModule} from '@angular/core';
import {AppHeaderModule} from "./app-header/app-header.module";
import {AppFooterModule} from "./app-footer/app-footer.module";
import {AppButtonModule} from "@shared/components/app-button/app-button.module";
import {AppTableModule} from "@shared/components/app-table/app-table.module";
import {AppFieldModule} from "@shared/components/app-field/app-field.module";


@NgModule({
  exports: [
    AppHeaderModule,
    AppFooterModule,
    AppButtonModule,
    AppTableModule,
    AppFieldModule
  ],
})
export class SharedComponentsModule {
}
