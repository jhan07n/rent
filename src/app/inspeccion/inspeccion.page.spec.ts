import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspeccionPage } from './inspeccion.page';

describe('InspeccionPage', () => {
  let component: InspeccionPage;
  let fixture: ComponentFixture<InspeccionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspeccionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspeccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
