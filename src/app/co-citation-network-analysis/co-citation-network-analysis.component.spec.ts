import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoCitationNetworkAnalysisComponent } from './co-citation-network-analysis.component';

describe('CoCitationNetworkAnalysisComponent', () => {
  let component: CoCitationNetworkAnalysisComponent;
  let fixture: ComponentFixture<CoCitationNetworkAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoCitationNetworkAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoCitationNetworkAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
