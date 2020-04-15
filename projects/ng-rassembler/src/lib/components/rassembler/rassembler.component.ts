import {
  Component,
  Input,
  ComponentFactoryResolver,
  ContentChild,
  AfterContentInit,
} from '@angular/core';

import { RassemblerBlueprints } from '../../typings';
import { RassemblyComponent } from '../rassembly';

@Component({
  selector: 'ng-rassembler',
  templateUrl: './rassembler.component.html',
  styleUrls: ['./rassembler.component.scss'],
})
export class RassemblerComponent implements AfterContentInit {

  @Input() blueprints: RassemblerBlueprints;

  @ContentChild(
    RassemblyComponent,
  ) root: RassemblyComponent;

  constructor(
    private cfresolver: ComponentFactoryResolver,
  ) { }

  ngAfterContentInit(): void {
    this.root.children = this.blueprints.root.children;

    console.log('after content init');
    console.log(`comp: ${this.root}`);
    console.log(`blup: ${this.blueprints.root.children[0].tag}`);
    console.log(`host: ${this.root.children[0].tag}`);
  }

}
