import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRassemblerComponent } from './ng-rassembler.component';

describe('NgRassemblerComponent', () => {
  let component: NgRassemblerComponent;
  let fixture: ComponentFixture<NgRassemblerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgRassemblerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgRassemblerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
