import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaionListLineComponent } from './staion-list-line.component';

describe('StaionListLineComponent', () => {
  let component: StaionListLineComponent;
  let fixture: ComponentFixture<StaionListLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaionListLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaionListLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
