import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Node, Link } from "./d3";

@Injectable({
  providedIn: "root"
})
export class StatsService {
  constructor(private httpClient: HttpClient) {}

  getInfo(datasetName): Observable<any> {
    return this.httpClient.get(`./assets/data/${datasetName}/info.json`);
  }
  getBasicStats(datasetName): Observable<any> {
    return this.httpClient.get(`./assets/data/${datasetName}/basic-stats.json`);
  }

  getBasicStatsChart(datasetName): Observable<any> {
    return this.httpClient.get(
      `./assets/data/${datasetName}/basic-stats-chart.json`
    );
  }

  getTops(datasetName): Observable<any> {
    return this.httpClient.get(`./assets/data/${datasetName}/tops.json`);
  }

  getSummaryChart(datasetName): Observable<any> {
    return this.httpClient.get(
      `./assets/data/${datasetName}/summary-chart.json`
    );
  }

  getCoAuthorshipChart(datasetName): Observable<any> {
    return this.httpClient.get(
      `./assets/data/${datasetName}/co-authorship-network.json`
    );
  }

  getCoAuthorshipAnalysis(datasetName): Observable<any> {
    return this.httpClient.get(
      `./assets/data/${datasetName}/co-authorship-analysis.json`
    );
  }

  getInterdisciplinarityAnalysis(datasetName): Observable<any> {
    return this.httpClient.get(
      `./assets/data/${datasetName}/interdisciplinarity-analysis.json`
    );
  }

  getCoCitationChart(datasetName): Observable<any> {
    return this.httpClient.get(
      `./assets/data/${datasetName}/co-citation-network-analysis.json`
    ).pipe(map((result: Array<any>) => {
      result.forEach(element => {
        element["data"].forEach(reference => {

            Object.defineProperty(
              reference,
              "x",
              Object.getOwnPropertyDescriptor(reference, "hubScore")
            );
            delete reference["hubScore"];
            Object.defineProperty(
              reference,
              "y",
              Object.getOwnPropertyDescriptor(reference, "citedByCount")
            );
            delete reference["citedByCount"];
            Object.defineProperty(
              reference,
              "z",
              Object.getOwnPropertyDescriptor(reference, "degree")
            );
            delete reference["degree"];
        });
      });
      return result;
    }));
  }
  getBursts(datasetName): Observable<any> {
    return this.httpClient.get(
      `./assets/data/${datasetName}/bursts.json`
    ).pipe(map(result => {
      const categories = [];
      const ranges = [];
      const labels = result ["labels"];
      result["bursts"].forEach(burst => {
        let begin = labels[burst["begin"]].split("-");
        begin = Date.UTC(parseInt(begin[0], 10), parseInt(begin[1], 10), 0);
        let end = labels[burst["end"]].split("-");
        end = Date.UTC(parseInt(end[0], 10), parseInt(end[1], 10), 0);
        categories.push(burst["label"]);
        ranges.push([begin, end]);
      });
      return {categories: categories, ranges: ranges};
    }));
  }
}
