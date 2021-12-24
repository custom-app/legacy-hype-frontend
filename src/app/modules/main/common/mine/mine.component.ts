import {AfterViewInit, Component, OnInit} from '@angular/core';
import {IEntity} from "@models/interfaces/entity.interface";
import {AppDialogComponent} from "@shared/components/app-dialog/app-dialog.component";
import {DialogService} from "@services/dialog/dialog.service";
import {AppComingDialogModule} from "@shared/components/app-coming-dialog/app-coming-dialog.module";
import {AppComingDialogComponent} from "@shared/components/app-coming-dialog/app-coming-dialog.component";

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.scss']
})
export class MineComponent implements OnInit, AfterViewInit {
  data: IEntity[] = [
    {target: 'Person', order: 'You need to post a link to my ass makeup course on any social networks. For each' +
          ' person who buys the course using your link, you will receive', contact: 'Viber', reward: '100 H'},
    {target: 'Person', order: 'You need to post a link to my ass makeup course on any social networks. For each' +
          ' person who buys the course using your link, you will receive', contact: 'Viber', reward: '100 H'},
    {target: 'Person', order: 'You need to post a link to my ass makeup course on any social networks. For each' +
          ' person who buys the course using your link, you will receive', contact: 'Viber', reward: '100 H'},
    {target: 'Person', order: 'You need to post a link to my ass makeup course on any social networks. For each' +
          ' person who buys the course using your link, you will receive', contact: 'Viber', reward: '100 H'},
    {target: 'Person', order: 'You need to post a link to my ass makeup course on any social networks. For each' +
          ' person who buys the course using your link, you will receive', contact: 'Viber', reward: '100 H'},
    {target: 'Person', order: 'You need to post a link to my ass makeup course on any social networks. For each' +
          ' person who buys the course using your link, you will receive', contact: 'Viber', reward: '100 H'},
    {target: 'Person', order: 'You need to post a link to my ass makeup course on any social networks. For each' +
          ' person who buys the course using your link, you will receive', contact: 'Viber', reward: '100 H'},
    {target: 'Person', order: 'You need to post a link to my ass makeup course on any social networks. For each' +
          ' person who buys the course using your link, you will receive', contact: 'Viber', reward: '100 H'},
    {target: 'Person', order: 'You need to post a link to my ass makeup course on any social networks. For each' +
          ' person who buys the course using your link, you will receive', contact: 'Viber', reward: '100 H'},
    {target: 'Person', order: 'You need to post a link to my ass makeup course on any social networks. For each' +
          ' person who buys the course using your link, you will receive', contact: 'Viber', reward: '100 H'},
    {target: 'Person', order: 'You need to post a link to my ass makeup course on any social networks. For each' +
          ' person who buys the course using your link, you will receive', contact: 'Viber', reward: '100 H'},
    {target: 'Person', order: 'You need to post a link to my ass makeup course on any social networks. For each' +
          ' person who buys the course using your link, you will receive', contact: 'Viber', reward: '100 H'},
  ];

  columns: string[] = ['target', 'order', 'contact', 'reward'];
  constructor(private _dialog: DialogService) { }

  ngOnInit(): void {
  }

  click() {
    this._dialog.open<AppDialogComponent, {title: string}>(
      {
        data: {
          title: 'register your promocode',
        }
      },
      AppDialogComponent
    ).subscribe()
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
