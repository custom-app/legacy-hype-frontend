import {APP_INITIALIZER, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {AppInitializerFactory, HttpLoaderFactory} from "./misk/app.initializer";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {LayoutsModule} from '@layouts/layouts.module';
import {SharedModule} from '@shared/shared.module';
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        BrowserAnimationsModule,
        LayoutsModule,
        SharedModule,
        HttpClientModule,
        RouterModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        {
            provide: APP_INITIALIZER,
            useFactory: AppInitializerFactory,
            multi: true,
            deps: [TranslateService]
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
