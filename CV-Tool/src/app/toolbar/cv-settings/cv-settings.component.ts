import { Component, OnInit, Injectable } from '@angular/core';
import { ToolbarElements } from './../../models/toolbars-elements-interface/toolbar-elements';

@Component({
  selector: 'app-cv-settings',
  templateUrl: './cv-settings.component.html',
  styleUrls: ['./cv-settings.component.scss']
})

@Injectable({
  providedIn: 'root'
})

export class CvSettingsComponent implements OnInit, ToolbarElements {

  name: string;
  img: string;
  isSelected: boolean;

  constructor() {
    this.name = 'CV settings';
    this.img = 'list_alt';
    this.isSelected = false;
  }

  ngOnInit() {
  }

  toggleSelected(): void {
    this.isSelected = !this.isSelected;
  }

}
