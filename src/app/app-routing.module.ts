import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModule } from '@modules/main/main.module';
import {MainLayoutComponent} from "@layouts/main/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    loadChildren: (): Promise<MainModule> =>
      import('@modules/main/main.module').then((m: { MainModule: MainModule }): MainModule => m.MainModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
