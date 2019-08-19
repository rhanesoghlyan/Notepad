import {Chart} from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import {Observable, Subject, timer} from 'rxjs';
import {switchMap, takeUntil} from 'rxjs/operators';
import {Component, Input, OnInit} from '@angular/core';

import {StatisticalAnalysisService} from '@core/services/api/statistical-analysis.service';
import {ChartDataType} from '@core/constants/chart-data.constants';
import {DateService} from '@core/services';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input()
  public title: string = '';
  @Input()
  public yAxisTitle: string = '';
  @Input()
  public seriesName: string = '';
  @Input()
  public chartDataType: string = ChartDataType.GISTS;

  public dates: Array<string> = [];
  public chart: Chart;

  private unsubscribe$: Subject<void> = new Subject<void>();
  private refreshInterval$: Observable<string> = timer(0, 5000)
    .pipe(
      takeUntil(this.unsubscribe$),
      switchMap(() => {
        return this.statisticalAnalysisService.getRecentlyCreatedDists(DateService.getDate(), 100);
      })
    );

  constructor(private statisticalAnalysisService: StatisticalAnalysisService) {
  }

  ngOnInit() {
    this.chartInit();
    this.updateChartData();
  }

  public chartInit(): void {
    const chart = new Chart(this.getOptionsOfChart());

    this.chart = chart;
    chart.ref$.subscribe(console.log);
  }

  public addPoint(createdGistsPerFiveSecond: number): void {
    if (this.chart) {
      this.chart.addPoint(createdGistsPerFiveSecond);
    }
  }

  private getOptionsOfChart(): Highcharts.Options {
    return {
      chart: {
        type: 'line'
      },
      title: {
        text: this.title
      },
      credits: {
        enabled: false
      },
      yAxis: {
        title: {
          text: this.yAxisTitle
        },
        allowDecimals: false
      },
      xAxis: {
        categories: this.dates,
        title: {
          text: 'Datetime'
        },
      },
      series: [
        {
          type: 'line',
          name: this.seriesName,
          data: []
        }
      ]
    };
  }

  private updateChartData(): void {
    this.unsubscribe$.next();

    this.refreshInterval$.subscribe((data) => {
      this.dates.push(DateService.getMinutesAndSeconds());
      this.addPoint(this.chartDataType === ChartDataType.FILES ? this.getCountOfFiles(data) : data.length);
    });
  }

  private getCountOfFiles(gists): number {
    let countOfFiles = 0;

    for (const gist of gists) {
      countOfFiles += Object.keys(gist.files).length;
    }

    return countOfFiles;
  }
}
