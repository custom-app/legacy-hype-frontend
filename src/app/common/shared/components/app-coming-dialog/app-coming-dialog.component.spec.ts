import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComingDialogComponent } from './app-coming-dialog.component';

describe('AppComingDialogComponent', () => {
  let component: AppComingDialogComponent;
  let fixture: ComponentFixture<AppComingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComingDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
