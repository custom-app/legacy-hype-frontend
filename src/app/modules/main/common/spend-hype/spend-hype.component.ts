import {Component, OnInit, AfterViewInit} from '@angular/core';
import {IEntity} from "@models/interfaces/entity.interface";
import {AppComingDialogModule} from "@shared/components/app-coming-dialog/app-coming-dialog.module";
import {DialogService} from "@services/dialog/dialog.service";
import {AppComingDialogComponent} from "@shared/components/app-coming-dialog/app-coming-dialog.component";

@Component({
  selector: 'app-spend-hype',
  templateUrl: './spend-hype.component.html',
  styleUrls: ['./spend-hype.component.scss']
})
export class SpendHypeComponent implements OnInit, AfterViewInit {

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
