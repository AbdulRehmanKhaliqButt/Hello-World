import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homerouting',
  templateUrl: './homerouting.component.html',
  styleUrls: ['./homerouting.component.css']
})
export class HomeroutingComponent implements OnInit {
archives=[
  {year:2017,month:1},
  {year:2017,month:2},
  {year:2017,month:3}
];
  constructor() { }

  ngOnInit() {
  }

}
