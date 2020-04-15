import { Directive } from '@angular/core';
import { RassemblyComponent } from '../components';

@Directive({
  selector: '[rassembly]'
})
export class RassemblyDirective {

  constructor(
    public host: RassemblyComponent,
  ) { }

}
