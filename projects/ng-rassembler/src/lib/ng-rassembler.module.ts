import {
  NgModule,
} from '@angular/core';

import {
  LinearRassemblyComponent,
} from './components';

import {
  RassemblyDirective,
} from './directives';

@NgModule({
  declarations: [
    LinearRassemblyComponent,
    RassemblyDirective,
  ],
  imports: [

  ],
  exports: [
    LinearRassemblyComponent,
    RassemblyDirective,
  ],
})
export class NgRassemblerModule { }
