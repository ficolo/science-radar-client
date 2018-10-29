import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicStatsChartComponent } from './basic-stats-chart.component';

describe('BasicStatsChartComponent', () => {
  let component: BasicStatsChartComponent;
  let fixture: ComponentFixture<BasicStatsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicStatsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicStatsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
