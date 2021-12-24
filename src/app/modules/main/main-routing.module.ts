import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "@modules/main/common/home/home.component";
import {MineComponent} from "@modules/main/common/mine/mine.component";
import {CabinetComponent} from "@modules/main/common/cabinet/cabinet.component";
import {AgentListComponent} from "@modules/main/common/agent-list/agent-list.component";
import {SpendHypeComponent} from "@modules/main/common/spend-hype/spend-hype.component";
import {BuyComponent} from "@modules/main/common/buy/buy.component";
import {ComingSoonComponent} from "@modules/main/common/coming-soon/coming-soon.component";
import {ConnectGuard} from "@guards/connect.guard";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        runGuardsAndResolvers: 'always'
    },
    {
        path: 'mine-hype',
        component: MineComponent,
        runGuardsAndResolvers: 'always'
    },
    {
        path: 'cabinet',
        canActivate: [ConnectGuard],
        component: CabinetComponent,
        runGuardsAndResolvers: 'always'
    },
    {
        path: 'hype-agent',
        component: AgentListComponent,
        runGuardsAndResolvers: 'always'
    },
    {
        path: 'spend-hype',
        component: SpendHypeComponent,
        runGuardsAndResolvers: 'always'
    },
    {
        path: 'buy-hype',
        component: BuyComponent,
        runGuardsAndResolvers: 'always'
    },
    {
        path: 'coming',
        component: ComingSoonComponent,
        runGuardsAndResolvers: 'always'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {
}
