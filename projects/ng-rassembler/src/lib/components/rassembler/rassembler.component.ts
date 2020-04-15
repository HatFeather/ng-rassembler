import {
  Component,
  Input,
  ComponentFactoryResolver,
  ContentChild,
  AfterContentInit,
} from '@angular/core';

import { RassemblerBlueprints } from '../../typings';
import { RassemblyDirective } from '../../directives';

@Component({
  selector: 'ng-rassembler',
  templateUrl: './rassembler.component.html',
  styleUrls: ['./rassembler.component.scss'],
})
export class RassemblerComponent implements AfterContentInit {

  @Input() blueprints: RassemblerBlueprints;

  @ContentChild(
    RassemblyDirective,
  ) rassemblyRoot: RassemblyDirective;

  constructor(
    private cfresolver: ComponentFactoryResolver,
  ) { }

  ngAfterContentInit(): void {
    console.log('after content init');
    console.log(`comp: ${this.rassemblyRoot}`);
    console.log(`blup: ${this.blueprints.root.children[0].tag}`);
  }

}
