import { Component, OnInit, Injectable } from '@angular/core';
import { ToolbarElements } from './../../models/toolbars-elements-interface/toolbar-elements';

@Component({
  selector: 'app-toolbar-component',
  templateUrl: './toolbar-component.component.html',
  styleUrls: ['./toolbar-component.component.scss']
})

@Injectable({
  providedIn: 'root'
})

export class ToolbarComponent implements OnInit {

  selectedElement: ToolbarElements;
  width: number;
  toolbarWidth: { width: string; }

  constructor() {
    this.width = 66;
    this.toolbarWidth = {
      'width': `${this.width}` + 'px'
    }
  }

  ngOnInit() {
  }

}
