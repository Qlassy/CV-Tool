import { ToolbarElements } from '../../models/toolbars-elements-interface/toolbar-elements';
import { Component, OnInit, Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})

@Injectable({
  providedIn: 'root',
})

export class SettingsComponent implements OnInit, ToolbarElements{

  img: string;
  name: string;
  constructor() {
    this.name = 'settings';
    this.img = 'settings';
  }

  ngOnInit() {}
}
