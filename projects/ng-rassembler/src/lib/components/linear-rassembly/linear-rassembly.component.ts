import {
  Component,
  Injector,
} from '@angular/core';

import { RassemblyComponent } from '../rassembly';

@Component({
  selector: 'ng-linear-rassembly',
  templateUrl: './linear-rassembly.component.html',
  styleUrls: ['./linear-rassembly.component.scss'],
  providers: [
    {
      provide: RassemblyComponent,
      useExisting: LinearRassemblyComponent
    }
  ],
})
export class LinearRassemblyComponent extends RassemblyComponent {

  constructor(
    injector: Injector
  ) {
    super(injector);
  }
  
}
