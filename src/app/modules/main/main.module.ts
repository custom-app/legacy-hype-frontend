import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {HomeModule} from "@modules/main/common/home/home.module";
import {MineModule} from "@modules/main/common/mine/mine.module";
import {CabinetModule} from "@modules/main/common/cabinet/cabinet.module";
import {AgentListModule} from "@modules/main/common/agent-list/agent-list.module";
import {SpendHypeModule} from "@modules/main/common/spend-hype/spend-hype.module";
import {BuyModule} from "@modules/main/common/buy/buy.module";
import {ComingSoonModule} from "@modules/main/common/coming-soon/coming-soon.module";


@NgModule({
    imports: [
        CommonModule,
        MainRoutingModule, HomeModule, MineModule, CabinetModule, AgentListModule, SpendHypeModule, BuyModule, ComingSoonModule
    ],
})
export class MainModule {
}
