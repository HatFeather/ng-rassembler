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

@NgModule({
  declarations: [
    RassemblyComponent,
    RassemblyDirective,
    RassemblerService,
  ],
  imports: [

  ],
  exports: [
    RassemblyComponent,
    RassemblyDirective,
    RassemblerService,
  ]
})
export class NgRassemblerModule { }
