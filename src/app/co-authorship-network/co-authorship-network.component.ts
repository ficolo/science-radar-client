import { networks } from './data';
import { Component, OnInit, Input } from "@angular/core";
import APP_CONFIG from "../app.config";
import { Node, Link } from "../d3";
import { StatsService } from "../stats.service";

@Component({
  selector: "science-radar-co-authorship-network",
  templateUrl: "./co-authorship-network.component.html",
  styleUrls: ["./co-authorship-network.component.css"]
})
export class CoAuthorshipNetworkComponent implements OnInit {
  nodes: Node[] = [];
  links: Link[] = [];
  @Input() dataset = "zika";
  @Input() network = "coauthorship";

  constructor(private stats: StatsService) {
  }

  ngOnInit() {
    networks[this.dataset][this.network]["nodes"].forEach(node => {
      this.nodes.push(new Node(node["id"], node["label"]));
    });
    networks[this.dataset][this.network]["links"].forEach(link => {
      this.nodes[link["source"]].linkCount++;
      this.nodes[link["target"]].linkCount++;
      this.links.push(new Link(link["source"], link["target"]));
    });
  }
}
