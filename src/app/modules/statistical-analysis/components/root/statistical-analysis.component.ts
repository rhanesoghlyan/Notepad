import {Component, OnInit} from '@angular/core';

import {ChartDataType} from '@core/constants/chart-data.constants';

@Component({
  selector: 'app-statistical-analysis',
  templateUrl: './statistical-analysis.component.html',
  styleUrls: ['./statistical-analysis.component.scss']
})
export class StatisticalAnalysisComponent implements OnInit {

  public chartDataType = ChartDataType;

  constructor() {
  }

  ngOnInit() {
  }

}
