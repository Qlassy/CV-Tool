import { CvSettingsComponent } from './../cv-settings/cv-settings.component';
import { GallerieComponent } from './../../pages/gallerie/gallerie.component';
import { SettingsComponent } from '../../pages/settings/settings.component';
import { ViewPageComponent } from '../../pages/view-page/view-page.component';
import { Component, OnInit, Injectable } from '@angular/core';
import { FillInPageComponent } from '../../pages/fill-in-page/fill-in-page.component';
import { TemplateSelectorComponent } from './../../pages/template-selector/template-selector.component';
import { ToolbarElements } from '../../models/toolbars-elements-interface/toolbar-elements';

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
    public view: ViewPageComponent,
    public settings: SettingsComponent,
    public selector: TemplateSelectorComponent,
    public gallerie: GallerieComponent,
    public cvSettings: CvSettingsComponent
  ) {}

  ngOnInit() {
    this.selectedElement = this.fillIn;
  }

  selectElement(element: ToolbarElements) {
    if (element !== this.cvSettings) {
      this.selectedElement = element;
      this.cvSettings.isSelected = false;
    }
  }

}
