import {
  NgModule,
} from '@angular/core';

import {
  LinearRassemblyComponent, RassemblyComponent,
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
  entryComponents: [
    RassemblyComponent,
    LinearRassemblyComponent,
  ],
})
export class NgRassemblerModule { }
