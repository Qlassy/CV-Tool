import { ToolbarElements } from './../../../models/toolbars-elements-interface/toolbar-elements';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss']
})

@Injectable({
  providedIn: 'root',
})


export class ViewPageComponent implements OnInit, ToolbarElements {

  img: string;
  name: string;
  constructor() {
    this.name = 'view';
    this.img = 'picture_as_pdf';
  }

  ngOnInit() {}

}
