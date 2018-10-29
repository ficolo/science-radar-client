import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoAuthorshipNetworkComponent } from './co-authorship-network.component';

describe('CoAuthorshipNetworkComponent', () => {
  let component: CoAuthorshipNetworkComponent;
  let fixture: ComponentFixture<CoAuthorshipNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoAuthorshipNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoAuthorshipNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
