import {
  NgModule,
} from '@angular/core';

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

  ],
  exports: [
    RassemblerComponent,
    RassemblyComponent,
    LinearRassemblyComponent,
    RassemblyContentDirective,
  ],
  entryComponents: [
    RassemblyComponent,
    LinearRassemblyComponent,
  ],
})
export class NgRassemblerModule { }
