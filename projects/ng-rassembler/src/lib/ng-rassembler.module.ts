import {
  NgModule,
} from '@angular/core';

import {
  BrowserModule
} from '@angular/platform-browser';

import {
  RassemblerComponent,
  RassemblyComponent,
  LinearRassemblyComponent,
} from './components';

import {
  RassemblyContentDirective,
  RassemblyDirective,
} from './directives';

@NgModule({
  declarations: [
    RassemblerComponent,
    RassemblyComponent,
    LinearRassemblyComponent,
    RassemblyContentDirective,
    RassemblyDirective,
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    RassemblerComponent,
    RassemblyComponent,
    LinearRassemblyComponent,
    RassemblyContentDirective,
    RassemblyDirective,
  ],
  entryComponents: [
    
  ],
})
export class NgRassemblerModule { }
