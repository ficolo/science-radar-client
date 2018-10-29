import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DatasetDashboardComponent } from "./dataset-dashboard/dataset-dashboard.component";
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatChipsModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatSliderModule,
  MatInput,
  MatInputModule,
  MatExpansionModule
} from "@angular/material";
import { LayoutModule } from "@angular/cdk/layout";
import { HomeComponent } from "./home/home.component";
import { AuthorComponent } from "./author/author.component";
import { AuthorListComponent } from "./author-list/author-list.component";
import { SummaryChartComponent } from "./summary-chart/summary-chart.component";
import { PaperComponent } from "./paper/paper.component";
import { PaperListComponent } from "./paper-list/paper-list.component";
import { TermComponent } from "./term/term.component";
import { TermListComponent } from "./term-list/term-list.component";
import { ChartModule } from "angular-highcharts";
import { BurstTermSelectorComponent } from "./burst-term-selector/burst-term-selector.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AnalysisExplorerComponent } from "./analysis-explorer/analysis-explorer.component";
import { HttpClientModule } from "@angular/common/http";
import { StatsService } from "./stats.service";
import { BasicStatsChartComponent } from "./basic-stats-chart/basic-stats-chart.component";
import { CoAuthorshipNetworkComponent } from "./co-authorship-network/co-authorship-network.component";
import { CoAuthorshipNetworkAnalysisComponent } from "./co-authorship-network-analysis/co-authorship-network-analysis.component";
import { D3Service, D3_DIRECTIVES } from "./d3";
import { GraphComponent } from "./visuals/graph/graph.component";
import { SHARED_VISUALS } from "./visuals/shared";
import { HighchartsChartModule } from "highcharts-angular";
import { CoCitationNetworkComponent } from './co-citation-network/co-citation-network.component';
import { CoCitationNetworkAnalysisComponent } from './co-citation-network-analysis/co-citation-network-analysis.component';
import { AnnotationBurstComponent } from './annotation-burst/annotation-burst.component';
import { ChangeViewButtonComponent } from './change-view-button/change-view-button.component';
import { InterdisciplinarityAnalysisComponent } from './interdisciplinarity-analysis/interdisciplinarity-analysis.component';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DatasetDashboardComponent,
    HomeComponent,
    AuthorComponent,
    AuthorListComponent,
    SummaryChartComponent,
    PaperComponent,
    PaperListComponent,
    TermComponent,
    TermListComponent,
    BurstTermSelectorComponent,
    AnalysisExplorerComponent,
    BasicStatsChartComponent,
    CoAuthorshipNetworkComponent,
    CoAuthorshipNetworkAnalysisComponent,
    GraphComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES,
    CoCitationNetworkComponent,
    CoCitationNetworkAnalysisComponent,
    AnnotationBurstComponent,
    ChangeViewButtonComponent,
    InterdisciplinarityAnalysisComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    ChartModule,
    MatChipsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatButtonToggleModule,
    HighchartsChartModule,
    MatSliderModule,
    MatExpansionModule
  ],
  providers: [StatsService, D3Service],
  bootstrap: [AppComponent]
})
export class AppModule {}
