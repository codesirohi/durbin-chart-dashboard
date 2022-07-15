import { PieComponent } from './../../Charts/pie/pie.component';
import { DoughnutComponent } from './../../Charts/doughnut/doughnut.component';
import { LineComponent } from './../../Charts/line/line.component';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('container', {read: ViewContainerRef, static: true})
  container!: ViewContainerRef;

  constructor() {}

  ngOnInit(): void {
  }

  //adding charts in the view
  createComponent(){
    this.container.clear();
    this.container.createComponent(LineComponent)
    this.container.createComponent(DoughnutComponent)
    this.container.createComponent(PieComponent)
  }



}
