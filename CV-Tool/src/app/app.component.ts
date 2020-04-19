import { Component, Injectable } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar-component/toolbar-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable({
  providedIn: 'root'
})

export class AppComponent {
  title = 'CV-Tool';

  router: {
    position: string
    left: string
  };

  constructor(public toolbarComponent: ToolbarComponent) {
    this.router = {
      'position': 'absolute',
      'left': `${toolbarComponent.width}` + 'px'
    }
  }
}
