/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ToolbarContainerComponent } from './toolbar-container.component';
import { FillInPageComponent } from '../../pages/fill-in-page/fill-in-page.component';

fdescribe('ToolbarContainerComponent', () => {
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
});
