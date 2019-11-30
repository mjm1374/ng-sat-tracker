/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SateliteListComponent } from './satelite-list.component';

describe('SateliteListComponent', () => {
  let component: SateliteListComponent;
  let fixture: ComponentFixture<SateliteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SateliteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SateliteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
