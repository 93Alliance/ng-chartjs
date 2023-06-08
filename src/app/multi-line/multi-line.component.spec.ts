import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiLineComponent } from './multi-line.component';

describe('MultiLineComponent', () => {
  let component: MultiLineComponent;
  let fixture: ComponentFixture<MultiLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
