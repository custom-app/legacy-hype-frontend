import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppTableComponent} from './app-table.component';
import {MaterialModule} from "@shared/material/material.module";


@NgModule({
    declarations: [
        AppTableComponent
    ],
    imports: [
        CommonModule, MaterialModule
    ],
    exports: [AppTableComponent]
})
export class AppTableModule {
}
