import {
  Component,
  Input,
  Host,
  ViewChildren,
  QueryList,
  AfterViewInit,
} from '@angular/core';

import { RassemblerNode, RassemblerTarget } from '../../typings';
import { RassemblyContentDirective } from '../../directives';
import { RassemblerComponent } from '../rassembler';

@Component({ template: '' })
export class RassemblyComponent implements AfterViewInit {

  @Input() children: RassemblerNode[];

  @ViewChildren(
    RassemblyContentDirective,
  ) content: QueryList<RassemblyContentDirective>;

  constructor(
    @Host() public rassembler: RassemblerComponent
  ) { }

  ngAfterViewInit(): void {
    console.log(`length = ${this.content.length}`);

    let contentList = this.content.toArray();
    for (let i = 0; i < this.children.length; ++i) {

      let child = this.children[i];
      let componentFactory = this.rassembler.getComponentFactory(child.tag);

      let viewContainerRef = contentList[i].viewContainerRef;
      viewContainerRef.clear();

      let component = viewContainerRef.createComponent(componentFactory);
      (<RassemblerTarget>component.instance).data = child.data;
    }
  }
}
