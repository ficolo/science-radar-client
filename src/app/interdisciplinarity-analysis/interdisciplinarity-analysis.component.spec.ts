import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterdisciplinarityAnalysisComponent } from './interdisciplinarity-analysis.component';

describe('InterdisciplinarityAnalysisComponent', () => {
  let component: InterdisciplinarityAnalysisComponent;
  let fixture: ComponentFixture<InterdisciplinarityAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterdisciplinarityAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterdisciplinarityAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
