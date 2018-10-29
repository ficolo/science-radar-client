import { ActivatedRoute } from "@angular/router";
import { StatsService } from "./../stats.service";
import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts/highstock";

@Component({
  selector: "science-radar-summary-chart",
  templateUrl: "./summary-chart.component.html",
  styleUrls: ["./summary-chart.component.css"]
})
export class SummaryChartComponent implements OnInit {
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
          text: "Authors"
        }
      },
      {
        title: {
          text: "Clusters"
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
        name: "Authors growth",
        data: [],
        regression: true,
        regressionSettings: {
          type: "polynomial",
          color: "rgba(223, 183, 83, .9)",
          dashStyle: "dash"
        }
      },
      {
        name: "Interdisciplinariety growth",
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
      this.stats.getSummaryChart(this.dataSetName).subscribe(summaryChart => {
        this.chartOptions.title.text = `${this.dataSetName.toUpperCase()}: comportamiento del frente de investigación`;
        this.chartOptions.xAxis.categories = summaryChart["labels"];
        this.chartOptions.series[0].data =
          summaryChart["data"]["authorsGrowth"];
        this.chartOptions.series[1].data =
          summaryChart["data"]["interdisciplinarietyGrowth"];
        summaryChart["data"]["burstDetection"].forEach(burst => {
          const plotBand = {
            from: summaryChart["labels"].indexOf(burst["start"]),
            to: summaryChart["labels"].indexOf(burst["end"]),
            color: "rgba(68, 170, 213, .2)",
            label: {
              text: burst["label"],
              verticalAlign: "top",
              textAlign: "left",
              rotation: 90,
              align: "left"
            }
          };
          this.chartOptions.xAxis.plotBands.push(plotBand);
        });
        this.chart = this.chartOptions;
      });
    });
  }
}
