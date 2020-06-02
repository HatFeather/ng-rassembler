import {
  NgModule,
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

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
    CommonModule,
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
