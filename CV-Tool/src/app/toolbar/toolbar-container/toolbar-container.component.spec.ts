/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ToolbarContainerComponent } from './toolbar-container.component';
import { FillInPageComponent } from '../../pages/fill-in-page/fill-in-page.component';
import { ViewPageComponent } from '../../pages/view-page/view-page.component';
import { SettingsComponent } from '../../pages/settings/settings.component';
import { TemplateSelectorComponent } from '../../pages/template-selector/template-selector.component';
import { GallerieComponent } from '../../pages/gallerie/gallerie.component';
import { CvSettingsComponent } from '../cv-settings/cv-settings.component';
import { not } from '@angular/compiler/src/output/output_ast';

describe('ToolbarContainerComponent', () => {
  let component: ToolbarContainerComponent;
  let fixture: ComponentFixture<ToolbarContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit() should set fillIn as the selected element', () => {
    const fillIn = TestBed.get(FillInPageComponent);
    component.fillIn = fillIn;
    expect(component.selectedElement).toBeNull;
    component.ngOnInit();
    expect(component.selectedElement).toEqual(fillIn);
  });

  it('selectElement should change selectedElement accordingly', () => {
    component.fillIn = TestBed.get(FillInPageComponent);
    component.view = TestBed.get(ViewPageComponent);
    component.settings = TestBed.get(SettingsComponent);
    component.selector = TestBed.get(TemplateSelectorComponent);
    component.gallerie = TestBed.get(GallerieComponent);
    component.cvSettings = TestBed.get(CvSettingsComponent);

    const pages = [
      component.fillIn,
      component.view,
      component.settings,
      component.selector,
      component.gallerie,
      component.cvSettings
    ];

    for(let i = 0; i < pages.length; i++) {
      component.selectElement(pages[i]);
      if (pages[i] !== component.cvSettings) {
        expect(component.selectedElement).toEqual(pages[i]);
      } else {
        expect(component.selectedElement).not.toEqual(pages[i]);
      }
    }
  });
});
