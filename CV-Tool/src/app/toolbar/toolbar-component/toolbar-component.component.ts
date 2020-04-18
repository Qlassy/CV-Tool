import { Component, OnInit } from '@angular/core';
import { ToolbarElements } from './../../models/toolbars-elements-interface/toolbar-elements';

@Component({
  selector: 'app-toolbar-component',
  templateUrl: './toolbar-component.component.html',
  styleUrls: ['./toolbar-component.component.scss']
})
export class ToolbarComponent implements OnInit {

  selectedElement: ToolbarElements;

  constructor() { }

  ngOnInit() {
  }

}
