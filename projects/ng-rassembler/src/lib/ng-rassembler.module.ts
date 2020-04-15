<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { NgRassemblerComponent } from './ng-rassembler.component';

@NgModule({
  declarations: [
    NgRassemblerComponent
  ],
  imports: [
  ],
  exports: [
    NgRassemblerComponent
  ]
=======
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
>>>>>>> tmp
})
export class NgRassemblerModule { }
