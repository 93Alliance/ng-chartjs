import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetOptionComponent } from './reset-option.component';

describe('ResetOptionComponent', () => {
  let component: ResetOptionComponent;
  let fixture: ComponentFixture<ResetOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
