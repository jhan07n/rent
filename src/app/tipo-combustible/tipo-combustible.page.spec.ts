import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCombustiblePage } from './tipo-combustible.page';

describe('TipoCombustiblePage', () => {
  let component: TipoCombustiblePage;
  let fixture: ComponentFixture<TipoCombustiblePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoCombustiblePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoCombustiblePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
