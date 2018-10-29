import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoCitationNetworkComponent } from './co-citation-network.component';

describe('CoCitationNetworkComponent', () => {
  let component: CoCitationNetworkComponent;
  let fixture: ComponentFixture<CoCitationNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoCitationNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoCitationNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
