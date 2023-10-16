import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coleta',
  templateUrl: './coleta.component.html',
  styleUrls: ['./coleta.component.css']
})
export class ColetaComponent implements OnInit {

  rangeValues = [8,17]

  constructor() { }

  ngOnInit(): void {
  }



}
