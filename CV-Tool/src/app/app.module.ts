import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar-component/toolbar-component.component';
import { ToolbarContainerComponent } from './toolbar/toolbar-container/toolbar-container.component';
import { RouterModuleModule } from './router-module.module';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ToolbarContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    RouterModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
