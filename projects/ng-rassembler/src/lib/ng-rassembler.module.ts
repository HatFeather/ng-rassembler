import {
  NgModule,
} from '@angular/core';

import {
  RassemblyComponent,
  LinearRassemblyComponent,
} from './components';

import {
  RassemblyDirective,
} from './directives';

import {
  Rassembler,
} from './services';

@NgModule({
  declarations: [
    RassemblyComponent,
    LinearRassemblyComponent,
    RassemblyDirective,
    Rassembler,
  ],
  imports: [

  ],
  exports: [
    RassemblyComponent,
    LinearRassemblyComponent,
    RassemblyDirective,
    Rassembler,
  ]
})
export class NgRassemblerModule { }
