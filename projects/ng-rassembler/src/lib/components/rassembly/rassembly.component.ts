import {
  Component,
  Input,
  ViewChildren,
  QueryList,
  AfterViewInit,
  OnDestroy,
  ComponentRef,
  Injector,
  OnInit,
} from '@angular/core';

import { RassemblerNode, RassemblerTarget } from '../../typings';
import { RassemblyContentDirective } from '../../directives';
import { RassemblerComponent } from '../rassembler';

@Component({ template: '' })
export class RassemblyComponent implements AfterViewInit, OnDestroy, OnInit {

  @Input() public children: RassemblerNode[];

  @ViewChildren(
    RassemblyContentDirective,
  ) content: QueryList<RassemblyContentDirective>;

  private componentRefs: Array<ComponentRef<any>>;
  private rassembler: RassemblerComponent;

  constructor(
    injector: Injector,
  ) {
    this.rassembler = injector.get(RassemblerComponent);
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    if (this.componentRefs) {
      this.componentRefs.forEach((v) => v.changeDetectorRef.detach());
    }
  }

  ngAfterViewInit(): void {

    this.componentRefs = [];
    this.ngOnDestroy();

    let contentList = this.content.toArray();
    let childCount = this.children ? this.children.length : 0;

    for (let i = 0; i < childCount; ++i) {

      let child = this.children[i];
      let componentFactory = this.rassembler.resolveComponentFactory(child.tag);
      let viewContainerRef = contentList[i].viewContainerRef;

      // create and set up the component
      viewContainerRef.clear();
      let component = viewContainerRef.createComponent(componentFactory);
      (<RassemblerTarget>component.instance).data = child.data

      // this child exists outside the angular lifecycle and must be initialized separately
      component.changeDetectorRef.detectChanges();
      this.componentRefs.push(component);
    }
  }
}
