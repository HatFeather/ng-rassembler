import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RassemblyComponent } from './rassembly.component';

describe('RassemblyComponent', () => {
  let component: RassemblyComponent;
  let fixture: ComponentFixture<RassemblyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RassemblyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RassemblyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
