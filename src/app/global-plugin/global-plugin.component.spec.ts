import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalPluginComponent } from './global-plugin.component';

describe('GlobalPluginComponent', () => {
  let component: GlobalPluginComponent;
  let fixture: ComponentFixture<GlobalPluginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalPluginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
