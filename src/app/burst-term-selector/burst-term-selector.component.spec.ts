import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurstTermSelectorComponent } from './burst-term-selector.component';

describe('BurstTermSelectorComponent', () => {
  let component: BurstTermSelectorComponent;
  let fixture: ComponentFixture<BurstTermSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurstTermSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurstTermSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
