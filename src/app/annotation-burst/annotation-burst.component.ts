import { ActivatedRoute } from "@angular/router";
import { StatsService } from "./../stats.service";
import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts/highstock";

@Component({
  selector: "science-radar-annotation-burst",
  templateUrl: "./annotation-burst.component.html",
  styleUrls: ["./annotation-burst.component.css"]
})
export class AnnotationBurstComponent implements OnInit {
  dataSetName = "";
  Highcharts = Highcharts;
  chartOptions = {
    chart: {
      type: "columnrange",
      inverted: true
    },


    title: {
      text: "Temperature variation by month"
    },
    xAxis: {
      categories: [],
      min: 0,
      max: 20
    },

    yAxis: {
      type: "datetime",
      tickInterval: 24 * 3600 * 1000 * 30 * 3,
      labels: {
        rotation: 0
      },
      title: {
        text: "Dates"
      }
    },

    plotOptions: {
      columnrange: {}
    },

    legend: {
      enabled: false
    },
    tooltip: {
      formatter: function() {
        console.log(this);
        return (
          "<b>" +
          this.x +
          "</b> started at <b>" +
          Highcharts.dateFormat("%b '%y", this.point.low) +
          "</b> and ended at <b>" +
          Highcharts.dateFormat("%b '%y", this.point.high) +
          "</b>"
        );
      }
    },
    series: [
      {
        name: "Burst",
        data: []
      }
    ],
    exporting: {
      width: 1200,
  }
  };
  chart = {};

  constructor(private stats: StatsService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(map => {
      this.dataSetName = map.get("id");
      this.chartOptions.title.text = `Annotation bursts in ${this.dataSetName.toUpperCase()} related publications`;
      this.stats.getBursts(this.dataSetName).subscribe(bursts => {
        if (bursts["categories"].length < this.chartOptions.xAxis.max) {
          this.chartOptions.xAxis.max = bursts["categories"].length - 1;
        }
        this.chartOptions.xAxis.categories = bursts["categories"];
        this.chartOptions.series[0].data = bursts["ranges"];
        this.chart = this.chartOptions;
      });
    });
  }

  ngOnInit() {}
}
