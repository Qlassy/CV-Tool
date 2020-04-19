import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar-component/toolbar-component.component';
import { ToolbarContainerComponent } from './toolbar/toolbar-container/toolbar-container.component';
import { RouterModuleModule } from './router-module.module';
import { SharedModule } from './shared.module';
import { FillInPageComponent } from './pages/fill-in-page/fill-in-page.component';
import { GallerieComponent } from './pages/gallerie/gallerie.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { TemplateSelectorComponent } from './pages/template-selector/template-selector.component';
import { ViewPageComponent } from './pages/view-page/view-page.component';


@NgModule({
   declarations: [
      AppComponent,
      ToolbarComponent,
      ToolbarContainerComponent,
      FillInPageComponent,
      GallerieComponent,
      SettingsComponent,
      TemplateSelectorComponent,
      ViewPageComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatIconModule,
      RouterModuleModule,
      SharedModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   exports: []
})
export class AppModule { }
