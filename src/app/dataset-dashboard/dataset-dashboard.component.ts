import { ElasticSearchService } from "./../elastic-search.service";
import { Component, OnInit } from "@angular/core";
import { StatsService } from "../stats.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "science-radar-dataset-dashboard",
  templateUrl: "./dataset-dashboard.component.html",
  styleUrls: ["./dataset-dashboard.component.css"]
})
export class DatasetDashboardComponent implements OnInit {
  basicStats = {};
  tops = {};
  dataSetName = "";
  dataSetTitle = "";
  dataSetRange = "";
  startYear = 2010;
  endYear = 2017;
  keywords = [];
  europePMCUrl = "";
  query = "";
  searchResults = [];
  constructor(
    private stats: StatsService,
    private route: ActivatedRoute,
    private es: ElasticSearchService
  ) {
    this.route.paramMap.subscribe(
      something => (this.dataSetName = something.get("id"))
    );
  }
  ngOnInit(): void {
    this.stats.getInfo(this.dataSetName).subscribe(info => {
      this.dataSetTitle = info["title"];
      this.dataSetRange = info["range"];
      this.keywords = info["keywords"];
      this.europePMCUrl = info["url"];
    });
    this.stats
      .getBasicStats(this.dataSetName)
      .subscribe(stats => (this.basicStats = stats));
    this.stats.getTops(this.dataSetName).subscribe(tops => (this.tops = tops));
  }

  onQueryChange(event) {
    this.es.query(event, this.dataSetName).subscribe(results => {
      console.log(results["hits"]["hits"]);
      this.searchResults = results["hits"]["hits"];
      // results['hits']['hits'].forEach(element => {
      //   this.searchResults.push(element);
      // });
    });
  }

  getRowSpan(result) {
    if (result["_source"]["abstractText"] !== undefined && result["_source"]["abstractText"].length > 1500) {
      return 4;
    } else if (result["_source"]["abstractText"] !== undefined && result["_source"]["abstractText"].length > 200) {
      return 3;
    } else {
      return 2;
    }
  }
}
