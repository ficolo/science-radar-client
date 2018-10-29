import { ActivatedRoute } from '@angular/router';
import { StatsService } from "./../stats.service";
import { Component, OnInit, Input } from "@angular/core";
import * as Highcharts from "highcharts/highstock";


@Component({
  selector: "science-radar-basic-stats-chart",
  templateUrl: "./basic-stats-chart.component.html",
  styleUrls: ["./basic-stats-chart.component.css"]
})
export class BasicStatsChartComponent implements OnInit {
  dataSetName = "";
  Highcharts = Highcharts;
  chartOptions = {
    chart: {
      zoomType: "x"
    },
    title: {
      text:
        ""
    },

    subtitle: {
      text: "DESDE 2010 A 2017"
    },
    credits: {
      enabled: false
    },
    yAxis: {
      title: {
        text: ""
      },
      gridLineWidth: 1
    },
    xAxis: {
      gridLineWidth: 1,
      categories: []
    },
    series: [
      {
        name: "# Publicaciones por mes",
        data: []
      },
      {
        name: "# Autores únicos por mes",
        data: []
      },
      {
        name: "# Referencias únicas por mes / 10",
        data: []
      },
      {
        name: "# Keywords únicas",
        data: []
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

  constructor(private stats: StatsService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(map => {
      this.dataSetName = map.get("id");
      this.chartOptions.title.text = `Métricas bibliográficas para las publicaciones relacionadas con ${this.dataSetName.toUpperCase()}`;
      this.stats.getBasicStatsChart(this.dataSetName).subscribe(basicStatsChart => {
        this.chartOptions.xAxis.categories = basicStatsChart["labels"];
        this.chartOptions.series[0].data = basicStatsChart["series"][0]["data"];
        this.chartOptions.series[1].data = basicStatsChart["series"][1]["data"];
        this.chartOptions.series[2].data = basicStatsChart["series"][2]["data"];
        this.chartOptions.series[3].data = basicStatsChart["series"][3]["data"];
        this.chart = this.chartOptions;
      });
    });

  }

  ngOnInit() {

  }
}
