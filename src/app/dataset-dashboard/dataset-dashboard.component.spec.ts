
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetDashboardComponent } from './dataset-dashboard.component';

describe('DatasetDashboardComponent', () => {
  let component: DatasetDashboardComponent;
  let fixture: ComponentFixture<DatasetDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasetDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatasetDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
