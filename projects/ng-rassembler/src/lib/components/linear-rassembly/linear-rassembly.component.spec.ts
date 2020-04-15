import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearRassemblyComponent } from './linear-rassembly.component';

describe('LinearRassemblyComponent', () => {
  let component: LinearRassemblyComponent;
  let fixture: ComponentFixture<LinearRassemblyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinearRassemblyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearRassemblyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
