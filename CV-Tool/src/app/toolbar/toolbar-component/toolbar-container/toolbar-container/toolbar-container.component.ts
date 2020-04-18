import { ViewPageComponent } from './../../../../pages/view-page/view-page/view-page.component';
import { Component, OnInit, Injectable } from '@angular/core';
import { FillInPageComponent } from './../../../../pages/fill-in-page/fill-in-page.component';
import { ToolbarElements } from './../../../../models/toolbars-elements-interface/toolbar-elements';

@Component({
  selector: 'app-toolbar-container',
  templateUrl: './toolbar-container.component.html',
  styleUrls: ['./toolbar-container.component.scss']
})

@Injectable({
  providedIn: 'root',
})

export class ToolbarContainerComponent implements OnInit {

  selectedElement: ToolbarElements;
  constructor(
    public fillIn: FillInPageComponent,
    public view: ViewPageComponent
  ) {}

  ngOnInit() {
    this.selectedElement = this.fillIn;
  }

  selectElement(element: ToolbarElements) {
    this.selectedElement = element;
  }

}
