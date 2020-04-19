import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FillInPageComponent } from './pages/fill-in-page/fill-in-page.component';
import { GallerieComponent } from './pages/gallerie/gallerie.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { TemplateSelectorComponent } from './pages/template-selector/template-selector.component';
import { ViewPageComponent } from './pages/view-page/view-page.component';
import { SharedModule } from './shared.module';

const routes: Routes = [
  { path: 'fill-in', component: FillInPageComponent},
  { path: 'view', component: ViewPageComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'selector', component: TemplateSelectorComponent},
  { path: 'gallerie', component: GallerieComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RouterModuleModule { }
