import { Component, OnInit, Injectable } from '@angular/core';
import { ToolbarElements } from './../../models/toolbars-elements-interface/toolbar-elements';

@Component({
  selector: 'app-fill-in-page',
  templateUrl: './fill-in-page.component.html',
  styleUrls: ['./fill-in-page.component.scss']
})

@Injectable({
  providedIn: 'root',
})

export class FillInPageComponent implements OnInit, ToolbarElements {

  img: string;
  name: string;
  constructor() {
    this.name = 'fill in';
    this.img = 'portrait';
  }

  ngOnInit() {}

}
