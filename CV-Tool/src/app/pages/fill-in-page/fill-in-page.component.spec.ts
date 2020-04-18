/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FillInPageComponent } from './fill-in-page.component';

describe('FillInPageComponent', () => {
  let component: FillInPageComponent;
  let fixture: ComponentFixture<FillInPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillInPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
