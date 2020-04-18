import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FillInPageComponent } from './pages/fill-in-page/fill-in-page.component';
import { ToolbarComponent } from './toolbar/toolbar-component/toolbar-component.component';
import { ToolbarContainerComponent } from './toolbar/toolbar-component/toolbar-container/toolbar-container/toolbar-container.component';
import { ViewPageComponent } from './pages/view-page/view-page/view-page.component';

const routes: Routes = [
  { path: 'fill-in', component: FillInPageComponent},
  { path: 'view', component: ViewPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ToolbarContainerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    RouterModule
  ]
})
export class AppModule { }
