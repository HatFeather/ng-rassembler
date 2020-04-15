import {
  Component,
  Input,
  Host,
  ViewChildren,
  QueryList,
  AfterViewInit,
  OnDestroy,
  ComponentRef,
} from '@angular/core';

import { RassemblerNode, RassemblerTarget } from '../../typings';
import { RassemblyContentDirective } from '../../directives';
import { RassemblerComponent } from '../rassembler';

@Component({ template: '' })
export class RassemblyComponent implements AfterViewInit, OnDestroy {

  @Input() children: RassemblerNode[];

  @ViewChildren(
    RassemblyContentDirective,
  ) content: QueryList<RassemblyContentDirective>;

  private componentRefs: Array<ComponentRef<any>>;

  constructor(
    @Host() public rassembler: RassemblerComponent
  ) { }

  ngOnDestroy(): void {
    if (this.componentRefs) {
      this.componentRefs.forEach((v) => v.changeDetectorRef.detach());
    }
  }

  ngAfterViewInit(): void {
    console.log(`length = ${this.content.length}`);

    this.componentRefs = [];
    this.ngOnDestroy();

    let contentList = this.content.toArray();

    for (let i = 0; i < this.children.length; ++i) {

      let child = this.children[i];
      let componentFactory = this.rassembler.getComponentFactory(child.tag);

      let viewContainerRef = contentList[i].viewContainerRef;
      viewContainerRef.clear();

      let component = viewContainerRef.createComponent(componentFactory);
      (<RassemblerTarget>component.instance).data = child.data;
      component.changeDetectorRef.detectChanges();

      this.componentRefs.push(component);
    }
  }
}
