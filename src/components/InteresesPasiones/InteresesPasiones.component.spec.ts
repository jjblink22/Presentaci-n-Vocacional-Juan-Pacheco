/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InteresesPasionesComponent } from './InteresesPasiones.component';

describe('InteresesPasionesComponent', () => {
  let component: InteresesPasionesComponent;
  let fixture: ComponentFixture<InteresesPasionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteresesPasionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteresesPasionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
