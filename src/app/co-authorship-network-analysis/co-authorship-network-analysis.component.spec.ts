import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoAuthorshipNetworkAnalysisComponent } from './co-authorship-network-analysis.component';

describe('CoAuthorshipNetworkAnalysisComponent', () => {
  let component: CoAuthorshipNetworkAnalysisComponent;
  let fixture: ComponentFixture<CoAuthorshipNetworkAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoAuthorshipNetworkAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoAuthorshipNetworkAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
