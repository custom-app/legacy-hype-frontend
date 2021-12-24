import { NgModule } from '@angular/core';
import { MaterialModule } from '@shared/material/material.module';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { TranslateModule } from '@ngx-translate/core';
import {AppComingDialogModule} from "@shared/components/app-coming-dialog/app-coming-dialog.module";


@NgModule({
  exports: [SharedComponentsModule, MaterialModule, TranslateModule, AppComingDialogModule]
})
export class SharedModule { }
