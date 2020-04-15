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
import { RassemblerDirective } from './directives/rassembler.directive';

@NgModule({
  declarations: [
    RassemblerComponent,
    RassemblyComponent,
    LinearRassemblyComponent,
    RassemblyDirective,
    RassemblerDirective,
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
