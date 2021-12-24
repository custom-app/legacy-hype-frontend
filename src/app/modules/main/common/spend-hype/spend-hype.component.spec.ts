import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendHypeComponent } from './spend-hype.component';

describe('SpendHypeComponent', () => {
  let component: SpendHypeComponent;
  let fixture: ComponentFixture<SpendHypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpendHypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendHypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
