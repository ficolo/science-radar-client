import { ActivatedRoute } from "@angular/router";
import { StatsService } from "./../stats.service";
import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts/highstock";

@Component({
  selector: "science-radar-interdisciplinarity-analysis",
  templateUrl: "./interdisciplinarity-analysis.component.html",
  styleUrls: ["./interdisciplinarity-analysis.component.css"]
})
export class InterdisciplinarityAnalysisComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions = {
    chart: {
      zoomType: "x"
    },
    title: {
      text: ""
    },

    subtitle: {
      text: "DESDE 2010 A 2017"
    },
    credits: {
      enabled: false
    },
    yAxis: [
      {
        title: {
          text: "Número de términos únicos por mes"
        }
      },
      {
        title: {
          text: "Número de clusters DBSCAN incremental"
        },
        opposite: true
      }
    ],
    xAxis: {
      categories: [],
      plotBands: []
    },
    series: [
      {
        type: "column",
        name: "Número de términos únicos",
        data: [],
        regression: true,
        regressionSettings: {
          type: "polynomial",
          color: "rgba(223, 183, 83, .9)",
          dashStyle: "dash"
        }
      },
      {
        name: "Número de clusters DBSCAN",
        data: [],
        yAxis: 1
      }
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom"
            }
          }
        }
      ]
    }
  };
  chart: {};
  dataSetName = "";

  constructor(private stats: StatsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(map => {
      this.dataSetName = map.get("id");
      this.stats
        .getInterdisciplinarityAnalysis(this.dataSetName)
        .subscribe(analysis => {
          this.chartOptions.title.text = `${this.dataSetName.toUpperCase()}: interdisciplinaridad de las referencias`;
          this.chartOptions.xAxis.categories = analysis["labels"];
          this.chartOptions.series[0].data = analysis["data"]["terms"];
          this.chartOptions.series[1].data = analysis["data"]["clusters"];
          this.chart = this.chartOptions;
        });
    });
  }
}
