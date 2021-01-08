import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { title } from 'process';


@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  Highcharts = Highcharts;
  chartOptions: {};


  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'area',
          backgroundColor:null,
          borderWidth: 0,
          margin: [2, 2, 2, 2],
          height:60,
      },
      title: {
          text: null
      },
      subtitle: {
          text: null
      },
      xAxis:{
        labels:{
          enabled:false,
        },
        title:{
          text: null,
        },
        startOnTick:false,
        endOnTick: false,
        tickOptions:[],
      },
      yAxis:{
        labels:{
          enabled:false,
        },
        title:{
          text: null,
        },
        startOnTick:false,
        endOnTick: false,
        tickOptions:[],
      },
      
      tooltip: {
          split: true,
          outside:true,
      },
      legend:{
        enabled:false,
      },
      credits: {
        enabled:false,
      },
      exporting: {
        enabled:false,
      },
      series: [{data:[71,78, 39, 66]}]
  }
    HC_exporting(this.Highcharts);
  }

}
