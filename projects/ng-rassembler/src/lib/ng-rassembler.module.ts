import {
  NgModule,
} from '@angular/core';

import {
  RassemblyComponent,
} from './components';

import {
  RassemblyDirective,
} from './directives';

import {
  RassemblerService,
} from './services';
import { LinearRassemblyComponent } from './components/linear-rassembly/linear-rassembly.component';

@NgModule({
  declarations: [
    RassemblyComponent,
    LinearRassemblyComponent,
    RassemblyDirective,
    RassemblerService,
  ],
  imports: [

  ],
  exports: [
    RassemblyComponent,
    LinearRassemblyComponent,
    RassemblyDirective,
    RassemblerService,
  ]
})
export class NgRassemblerModule { }
