import { Component, OnInit, Injectable } from '@angular/core';
import { ToolbarElements } from './../../models/toolbars-elements-interface/toolbar-elements';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.scss']
})

@Injectable({
  providedIn: 'root'
})


export class GallerieComponent implements OnInit, ToolbarElements {

  name: string;
  img: string;
  constructor() {
    this.name = 'Gallerie';
    this.img = 'folder_open';
  }

  ngOnInit() {
  }

}
