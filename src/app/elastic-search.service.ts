import { environment } from "./../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ElasticSearchService {
  queryTemplate = {
    _source: [
      "title",
      "authorString",
      "journalInfo",
      "pubYear",
      "fullTextUrlList",
      "abstractText"
    ],
    query: {
      multi_match: {
        query: "",
        fields: ["title", "keywords", "annotations.prefLabel", "abstractText"]
      }
    },
    size: 10
  };

  constructor(private httpClient: HttpClient) {}

  query(text, datasetName) {
    const query = this.queryTemplate;
    query.query.multi_match.query = text;
    return this.httpClient.post(
      `${environment.elasticSearchUrl}${datasetName}/_search`,
      query
    );
  }
}
