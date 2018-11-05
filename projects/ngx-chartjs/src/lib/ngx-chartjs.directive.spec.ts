import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxChartjsDirective } from './ngx-chartjs.directive';

describe('NgxChartjsComponent', () => {
  let component: NgxChartjsDirective;
  let fixture: ComponentFixture<NgxChartjsDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxChartjsDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxChartjsDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
