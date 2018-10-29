import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotationBurstComponent } from './annotation-burst.component';

describe('AnnotationBurstComponent', () => {
  let component: AnnotationBurstComponent;
  let fixture: ComponentFixture<AnnotationBurstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnotationBurstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotationBurstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
