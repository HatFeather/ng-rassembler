import {
  Component,
  Input,
  ComponentFactoryResolver,
  ContentChild,
  AfterContentInit,
  ComponentFactory,
  Type,
  OnInit,
} from '@angular/core';

import { RassemblerBlueprints } from '../../typings';
import { RassemblyComponent } from '../rassembly';

@Component({
  selector: 'ng-rassembler',
  templateUrl: './rassembler.component.html',
  styleUrls: ['./rassembler.component.scss'],
})
export class RassemblerComponent implements AfterContentInit, OnInit {

  @Input() blueprints: RassemblerBlueprints;

  @ContentChild(
    RassemblyComponent,
  ) rassembly: RassemblyComponent;

  private cmap: Map<String, Type<any>>;

  constructor(
    private cfresolver: ComponentFactoryResolver,
  ) { }

  public resolveComponentFactory(tag: String): ComponentFactory<any> {
    let ctype = this.cmap.get(tag);
    if (ctype) {
      return this.cfresolver.resolveComponentFactory(ctype);
    }

    console.error(`ng-rassembler couldn't resolve component with tag '${tag}'`);
    return undefined;
  }

  ngOnInit(): void {
    this.cmap = this.buildComponentTypeMap();
  }

  ngAfterContentInit(): void {
    this.rassembly.children = this.blueprints.root?.children ?? [];
  }

  private buildComponentTypeMap(): Map<String, Type<any>> {
    let result = new Map<String, Type<any>>();
    let clist = this.blueprints.componentMapping;

    for (let i = 0; i < clist.length; ++i) {
      result.set(clist[i].tag, clist[i].componentType);
    }

    return result;
  }

}
