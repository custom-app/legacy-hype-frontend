import {AfterViewInit, Component, OnInit} from '@angular/core';
import {IEntity} from "@models/interfaces/entity.interface";
import {AppComingDialogModule} from "@shared/components/app-coming-dialog/app-coming-dialog.module";
import {DialogService} from "@services/dialog/dialog.service";
import {AppComingDialogComponent} from "@shared/components/app-coming-dialog/app-coming-dialog.component";

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.scss']
})
export class AgentListComponent implements OnInit, AfterViewInit {
  data: IEntity[] = [
    {place: 1, wallet: '0x1ACBa046E29925e3f17fbaEd1DBd5ccb33cc3C8F', date: 'november, 5, 2021', earned: '980 339 H'},
    {place: 2, wallet: '0x1ACBa046E29925e3f17fbaEd1DBd5ccb33cc3C8F', date: 'november, 5, 2021', earned: '230 000 H'},
    {place: 3, wallet: '0x1ACBa046E29925e3f17fbaEd1DBd5ccb33cc3C8F', date: 'november, 5, 2021', earned: '980 339 H'},
    {place: 4, wallet: '0x1ACBa046E29925e3f17fbaEd1DBd5ccb33cc3C8F', date: 'november, 5, 2021', earned: '980 339 H'},
    {place: 5, wallet: '0x1ACBa046E29925e3f17fbaEd1DBd5ccb33cc3C8F', date: 'november, 5, 2021', earned: '430 000 H'},
    {place: 6, wallet: '0x1ACBa046E29925e3f17fbaEd1DBd5ccb33cc3C8F', date: 'november, 5, 2021', earned: '980 339 H'},
    {place: 7, wallet: '0x1ACBa046E29925e3f17fbaEd1DBd5ccb33cc3C8F', date: 'november, 5, 2021', earned: '940 139 H'},
    {place: 8, wallet: '0x1ACBa046E29925e3f17fbaEd1DBd5ccb33cc3C8F', date: 'november, 5, 2021', earned: '980 339 H'},
    {place: 9, wallet: '0x1ACBa046E29925e3f17fbaEd1DBd5ccb33cc3C8F', date: 'november, 5, 2021', earned: '180 639 H'},
    {place: 10, wallet: '0x1ACBa046E29925e3f17fbaEd1DBd5ccb33cc3C8F', date: 'november, 5, 2021', earned: '980 339 H'},
    {place: 11, wallet: '0x1ACBa046E29925e3f17fbaEd1DBd5ccb33cc3C8F', date: 'november, 5, 2021', earned: '980 339 H'},
    {place: 12, wallet: '0x1ACBa046E29925e3f17fbaEd1DBd5ccb33cc3C8F', date: 'november, 5, 2021', earned: '980 339 H'},
    {place: 13, wallet: '0x1ACBa046E29925e3f17fbaEd1DBd5ccb33cc3C8F', date: 'november, 5, 2021', earned: '980 339 H'},
    {place: 14, wallet: '0x1ACBa046E29925e3f17fbaEd1DBd5ccb33cc3C8F', date: 'november, 5, 2021', earned: '980 339 H'},
    {place: 15, wallet: '0x1ACBa046E29925e3f17fbaEd1DBd5ccb33cc3C8F', date: 'november, 5, 2021', earned: '980 339 H'}
  ];
  columns: string[] = ['place', 'wallet', 'date', 'earned'];
  constructor(private _dialog: DialogService) {


  }

  ngOnInit(): void {
  }


  ngAfterViewInit() {
    this._dialog.open<AppComingDialogComponent, {title: string}>(
        {
          disableClose: true,
          data: {
            title: 'Coming...',
          }
        },
        AppComingDialogComponent
    ).subscribe()
  }
}
