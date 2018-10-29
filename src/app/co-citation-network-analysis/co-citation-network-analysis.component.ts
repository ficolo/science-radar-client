import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Component, OnInit, ViewChild } from "@angular/core";
import * as Highcharts from "highcharts/highstock";
import { StatsService } from "../stats.service";
import { MatSlider } from "@angular/material";
import { HighchartsChartComponent } from "highcharts-angular";

@Component({
  selector: "science-radar-co-citation-network-analysis",
  templateUrl: "./co-citation-network-analysis.component.html",
  styleUrls: ["./co-citation-network-analysis.component.css"]
})
export class CoCitationNetworkAnalysisComponent implements OnInit {
  @ViewChild(HighchartsChartComponent)
  chartElem;
  Highcharts = Highcharts;
  chart = null;
  update = false;
  disabledSlider = false;
  seriesTemplate = [
    {
      name: "Last year",
      data: []
    },
    {
      name: "2 to 10 years old",
      data: []
    },
    {
      name: "10+ years old",
      data: []
    }
  ];
  data: Array<any> = [];
  timePoints = [];
  selectedDate = 0;
  chartOptions = {
    colors: ["#000051", "#8e99f3", "#e8eaf6"],
    chart: {
      type: "bubble",
      plotBorderWidth: 1,
      zoomType: "xy"
    },

    title: {
      text: "Co-citation network dynamics"
    },

    xAxis: {
      gridLineWidth: 1,
      title: {
        text: "Hub/Authority score"
      }
      /*plotLines: [
        {
          color: "black",
          dashStyle: "dot",
          width: 2,
          value: 65,
          label: {
            rotation: 0,
            y: 15,
            style: {
              fontStyle: "italic"
            },
            text: "Cited by count"
          },
          zIndex: 3
        }
      ]*/
    },

    yAxis: {
      startOnTick: false,
      endOnTick: false,
      title: {
        text: "Cited by"
      },
      maxPadding: 0.2
      /*plotLines: [
        {
          color: "black",
          dashStyle: "dot",
          width: 2,
          value: 50,
          label: {
            align: "right",
            style: {
              fontStyle: "italic"
            },
            text: "Safe sugar intake 50g/day",
            x: -10
          },
          zIndex: 3
        }
      ]*/
    },

    tooltip: {
      useHTML: true,
      headerFormat: "<table>",
      pointFormat:
        '<tr><th colspan="2"><h3>{point.title}</h3></th></tr>' +
        "<tr><th>Publication year:</th><td>{point.year}</td></tr>" +
        "<tr><th>Hub/Authority score:</th><td>{point.x}</td></tr>" +
        "<tr><th>Cited by:</th><td>{point.y}</td></tr>" +
        "<tr><th>Co-citation degree:</th><td>{point.z}</td></tr>",
      footerFormat: "</table>",
      followPointer: true
    },

    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: "{point.pmid}"
        }
      }
    },

    series: [
      {
        name: "Last year",
        data: []
      },
      {
        name: "2 to 10 years old",
        data: []
      },
      {
        name: "10+ years old",
        data: []
      }
    ]
  };
  chartLoaded = new Observable<any>();
  lastYearReferences = [];
  lastDecadeReferences = [];
  oldReferences = [];
  dataSetName = "";

  constructor(private stats: StatsService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.paramMap.subscribe(map => {
      this.dataSetName = map.get("id");
      this.chartElem.chartInstance.subscribe(chart => {
        this.chart = chart;
        this.stats.getCoCitationChart(this.dataSetName).subscribe(data => {
          this.data = data;
          this.data.forEach(range =>
            this.timePoints.push(range["name"].split(" to ")[1])
          );
          this.updateChart(0);
        });
      });
    });
  }

  sliderChanged(event) {
    this.updateChart(event["value"]);
  }

  getLabel = value => {
    return this.timePoints[value];
  };

  updateChart(index) {
    const years = [];
    const refByYear = {};
    if (
      this.lastYearReferences.length > 0 ||
      this.lastDecadeReferences.length > 0 ||
      this.oldReferences.length > 0
    ) {
      this.lastYearReferences = [];
      this.lastDecadeReferences = [];
      this.oldReferences = [];
    }
    this.data[index]["data"].forEach(reference => {
      if (!years.includes(reference["year"])) {
        years.push(reference["year"]);
        refByYear[reference["year"]] = [];
      }
      refByYear[reference["year"]].push(reference);
    });
    years.sort();
    const lastYear = years[years.length - 1];
    years.forEach(year => {
      const age = lastYear - year;
      if (age <= 1) {
        this.lastYearReferences = this.lastYearReferences.concat(
          refByYear[year]
        );
      } else if (age >= 2 && age <= 10) {
        this.lastDecadeReferences = this.lastDecadeReferences.concat(
          refByYear[year]
        );
      } else {
        this.oldReferences = this.oldReferences.concat(refByYear[year]);
      }
    });
    this.chartOptions.series[0].data = this.lastYearReferences;
    this.chartOptions.series[1].data = this.lastDecadeReferences;
    this.chartOptions.series[2].data = this.oldReferences;
    this.update = true;
  }

  play() {
    this.disabledSlider = true;
    this.timePoints.forEach((value, index) => {
      this.autoUpdate(index);
    });
    let counter = this.selectedDate;
    const interval = setInterval(_ => {
      counter++;
      if (counter === this.timePoints.length) {
        clearInterval(interval);
        this.disabledSlider = false;
      } else {
        this.selectedDate = counter;
        this.updateChart(counter);
        console.log(counter);
      }
    }, 250);
  }

  autoUpdate(index) {
    setTimeout(function() {}, 500);
  }
}
