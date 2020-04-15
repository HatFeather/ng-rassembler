import {
  Component,
  ComponentFactoryResolver
} from '@angular/core';

import { RassemblyComponent } from '../rassembly';

@Component({
  selector: 'ng-linear-rassembly',
  templateUrl: './linear-rassembly.component.html',
  styleUrls: ['./linear-rassembly.component.scss']
})
export class LinearRassemblyComponent extends RassemblyComponent {

  constructor(
    cfresolver: ComponentFactoryResolver
  ) {
    super(cfresolver);
  }

}
