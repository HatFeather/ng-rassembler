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

@NgModule({
  declarations: [
    RassemblyComponent,
    LinearRassemblyComponent,
    RassemblyDirective,
  ],
  imports: [

  ],
  exports: [
    RassemblyComponent,
    LinearRassemblyComponent,
    RassemblyDirective,
  ],
})
export class NgRassemblerModule { }
