import {
  Component,
  Input,
  ComponentFactoryResolver,
  ContentChild,
  AfterContentInit,
  Type,
} from '@angular/core';

import {
  RassemblerBlueprints,
} from '../../typings';

import {
  RassemblyComponent,
} from '../rassembly';

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

  private componentMap: Map<String, Type<any>>;

  constructor(
    private cfresolver: ComponentFactoryResolver,
  ) {

  }

  getComponent(tag: String): Type<any> {
    // TODO improve performance
    let mapping = this.blueprints.componentMapping;
    
    for (let i = 0; i < mapping.length; ++i) {
      if (mapping[i].tag === tag) {
        return mapping[i].component;
      }
    }

    console.error(`[ng-rassembler] couldn't resolve component with tag '${tag}'`);
  }

  ngAfterContentInit(): void {
    this.root.children = this.blueprints.root.children;

    console.log('after content init');
    console.log(`comp: ${this.root}`);
    console.log(`blup: ${this.blueprints.root.children[0].tag}`);
    console.log(`host: ${this.root.children[0].tag}`);
  }

}
