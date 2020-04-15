import {
  Component,
  Input,
  ComponentFactoryResolver,
  ContentChild,
  AfterContentInit,
  ComponentFactory,
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

  constructor(
    private cfresolver: ComponentFactoryResolver,
  ) { }

  getComponentFactory(tag: String): ComponentFactory<any> {

    // TODO improve performance
    let mapping = this.blueprints.componentMapping;

    for (let i = 0; i < mapping.length; ++i) {
      if (mapping[i].tag === tag) {
        let componentType = mapping[i].componentType;
        return this.cfresolver.resolveComponentFactory(componentType);
      }
    }

    console.error(`ng-rassembler couldn't resolve component with tag '${tag}'`);
  }

  ngAfterContentInit(): void {
    this.root.children = this.blueprints.root.children;
  }

}
