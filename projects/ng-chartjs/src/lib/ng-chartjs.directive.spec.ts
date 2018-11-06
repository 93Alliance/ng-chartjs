import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgChartjsDirective } from './ng-chartjs.directive';

describe('NgxChartjsComponent', () => {
  let component: NgChartjsDirective;
  let fixture: ComponentFixture<NgChartjsDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgChartjsDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgChartjsDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
