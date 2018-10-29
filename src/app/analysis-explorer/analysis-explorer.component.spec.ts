import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisExplorerComponent } from './analysis-explorer.component';

describe('AnalysisExplorerComponent', () => {
  let component: AnalysisExplorerComponent;
  let fixture: ComponentFixture<AnalysisExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
