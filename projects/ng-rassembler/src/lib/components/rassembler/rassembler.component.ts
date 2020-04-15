import {
  Component,
  OnInit,
  Input,
  ComponentFactoryResolver,
  ViewChild,
} from '@angular/core';

import { RassemblerBlueprints } from '../../typings';
import { RassemblyRootDirective } from '../../directives';

@Component({
  selector: 'ng-rassembler',
  templateUrl: './rassembler.component.html',
  styleUrls: ['./rassembler.component.scss']
})
export class RassemblerComponent implements OnInit {

  @Input() blueprints: RassemblerBlueprints;

  @ViewChild(
    RassemblyRootDirective,
    { static: true },
  ) rassemblyRoot: RassemblyRootDirective;

  constructor(
    private cfresolver: ComponentFactoryResolver,
  ) { }

  ngOnInit(): void { }

}
