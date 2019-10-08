import { Component, OnInit } from '@angular/core';

const SAMPLE_BARCHART_DATA: any[] = [
  {data:[24,13,13,45,65,75], label: 'Q3 Sales'},
  {data:[34,43,13,55,15,35], label: 'Q4 Sales'},
];
const SAMPLE_BARCHART_LABELS: string[] = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6'];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  
  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: string[] = SAMPLE_BARCHART_LABELS;
  public barChartType: string = 'bar';
  public barChartLegend: boolean = false;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,    
    responsive: true
  } 

  constructor() { }

  ngOnInit() {
  }

}
