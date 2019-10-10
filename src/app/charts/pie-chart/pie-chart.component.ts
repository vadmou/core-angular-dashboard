import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  pieChartData: number[] = [350, 250, 100];
  pieChartLabels: string[] = ['first', 'second', 'third'];
  colors: any[] = [
    {
      backgroundColor: ['#26547', '#ff6b6b', '#ffd166'],
      borderColor: '#111'
    }
  ];
  pieChartType: string = 'pie';
  constructor() { }

  ngOnInit() {
  }

}
