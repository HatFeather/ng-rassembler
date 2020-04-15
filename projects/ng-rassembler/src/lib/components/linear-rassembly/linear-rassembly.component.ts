import {
  Component,
  OnInit,
  ComponentFactoryResolver
} from '@angular/core';

import { RassemblyComponent } from '../rassembly';

@Component({
  selector: 'linear-rassembly',
  templateUrl: './linear-rassembly.component.html',
  styleUrls: ['./linear-rassembly.component.scss']
})
export class LinearRassemblyComponent extends RassemblyComponent implements OnInit {

  constructor(
    cfresolver: ComponentFactoryResolver
  ) {
    super(cfresolver);
  }

  ngOnInit(): void { }

}
