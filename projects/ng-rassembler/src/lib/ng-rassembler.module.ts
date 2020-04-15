import {
  NgModule,
} from '@angular/core';

import {
  RassemblerComponent,
  RassemblyComponent,
  LinearRassemblyComponent,
} from './components';

import {
  RassemblyDirective,
} from './directives';

@NgModule({
  declarations: [
    RassemblerComponent,
    RassemblyComponent,
    LinearRassemblyComponent,
    RassemblyDirective,
  ],
  imports: [

  ],
  exports: [
    RassemblerComponent,
    RassemblyComponent,
    LinearRassemblyComponent,
    RassemblyDirective,
  ],
  entryComponents: [
    RassemblyComponent,
    LinearRassemblyComponent,
  ],
})
export class NgRassemblerModule { }
