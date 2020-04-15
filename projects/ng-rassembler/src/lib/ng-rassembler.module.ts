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
} from './directives';

@NgModule({
  declarations: [
    RassemblerComponent,
    RassemblyComponent,
    LinearRassemblyComponent,
    RassemblyContentDirective,
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    RassemblerComponent,
    RassemblyComponent,
    LinearRassemblyComponent,
    RassemblyContentDirective,
  ],
  entryComponents: [
    
  ],
})
export class NgRassemblerModule { }
