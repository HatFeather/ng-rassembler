import {
  NgModule
} from '@angular/core';

import {
  RassemblyComponent
} from './components';

import {
  RassemblyDirective
} from './directives';

@NgModule({
  declarations: [
    RassemblyComponent,
    RassemblyDirective,
  ],
  imports: [

  ],
  exports: [
    RassemblyComponent,
    RassemblyDirective,
  ]
})
export class NgRassemblerModule { }
