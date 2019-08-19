import {Chart} from 'angular-highcharts';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input()
  public title: string = '';

  public chart: Chart;

  constructor() {
  }

  ngOnInit() {
    this.chartInit();
  }

  public chartInit(): void {
    // TODO change static data to dinamic

    const chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: this.title
      },
      credits: {
        enabled: false
      },
      series: [
        {
          type: 'line',
          name: 'Time',
          data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 91.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }]
    });

    this.addPoint();
    this.addPoint();
    this.chart = chart;

    chart.ref$.subscribe(console.log);
  }

  public addPoint() {
    if (this.chart) {
      this.chart.addPoint(Math.floor(Math.random() * 10));
    }
  }

  public removePoint() {
    this.chart.removePoint(this.chart.ref.series[0].data.length - 1);
  }
}
