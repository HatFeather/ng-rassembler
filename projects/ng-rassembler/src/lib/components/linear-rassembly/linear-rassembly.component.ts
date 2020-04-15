import {
  Component,
} from '@angular/core';

import { RassemblerComponent } from '../rassembler';
import { RassemblyComponent } from '../rassembly';

@Component({
  selector: 'ng-linear-rassembly',
  templateUrl: './linear-rassembly.component.html',
  styleUrls: ['./linear-rassembly.component.scss'],
})
export class LinearRassemblyComponent extends RassemblyComponent {

  constructor(rassembler: RassemblerComponent) {
    super(rassembler);
  }

}
