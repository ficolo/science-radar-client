import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts/highstock";
import { StatsService } from "../stats.service";

@Component({
  selector: "science-radar-co-authorship-network-analysis",
  templateUrl: "./co-authorship-network-analysis.component.html",
  styleUrls: ["./co-authorship-network-analysis.component.css"]
})
export class CoAuthorshipNetworkAnalysisComponent implements OnInit {
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
          text: "Número de vértices"
        }
      },
      {
        title: {
          text: "Coeficiente de clustering"
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
        name: "Número de vértices",
        data: [],
        regression: true,
        regressionSettings: {
          type: "polynomial",
          color: "rgba(223, 183, 83, .9)",
          dashStyle: "dash"
        }
      },
      {
        name: "Coeficiente de clustering",
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
  vertexNumber = 0;
  edgeNumber = 0;

  constructor(private stats: StatsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(map => {
      this.dataSetName = map.get("id");
      this.stats.getCoAuthorshipAnalysis(this.dataSetName).subscribe(analysis => {
        this.chartOptions.title.text = `${this.dataSetName.toUpperCase()}: comportamiento red de coautoría`;
        this.chartOptions.xAxis.categories = analysis["labels"];
        this.chartOptions.series[0].data =
          analysis["data"]["vertex"];
        this.chartOptions.series[1].data =
          analysis["data"]["clustering"];
        this.chart = this.chartOptions;
        this.vertexNumber = analysis["data"]["vertexNumber"];
        this.edgeNumber = analysis["data"]["edgeNumber"];
      });
    });
  }
}
