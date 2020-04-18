import { Component, OnInit, Injectable } from '@angular/core';
import { ToolbarElements } from './../../models/toolbars-elements-interface/toolbar-elements';

@Component({
  selector: 'app-template-selector',
  templateUrl: './template-selector.component.html',
  styleUrls: ['./template-selector.component.scss']
})

@Injectable({
  providedIn: 'root',
})

export class TemplateSelectorComponent implements OnInit, ToolbarElements {

  name: string;
  img: string;
  constructor() {
    this.name = 'selector';
    this.img = 'view_module';
  }

  ngOnInit() {
  }

}
