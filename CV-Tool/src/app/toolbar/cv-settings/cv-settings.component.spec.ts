/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CvSettingsComponent } from './cv-settings.component';

describe('CvSettingsComponent', () => {
  let component: CvSettingsComponent;
  let fixture: ComponentFixture<CvSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toggleSelected() should change isSelected value', () => {
    component.isSelected = false; // could be set to true or false, it only needs to be initialized
    const previousValue = component.isSelected;

    component.toggleSelected();
    expect(previousValue).not.toEqual(component.isSelected);
  });
});
