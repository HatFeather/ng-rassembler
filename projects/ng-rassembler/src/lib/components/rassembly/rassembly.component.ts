import {
  Component,
  Input,
  ViewChildren,
  QueryList,
  AfterViewInit,
  OnDestroy,
  ComponentRef,
  Renderer2,
  Injector,
} from '@angular/core';

import { RassemblerNode, RassemblerTarget } from '../../typings';
import { RassemblyContentDirective, RassemblyDirective } from '../../directives';
import { RassemblerComponent } from '../rassembler';

@Component({ template: '' })
export class RassemblyComponent implements AfterViewInit, OnDestroy {

  @Input() children: RassemblerNode[];

  @ViewChildren(
    RassemblyContentDirective,
  ) content: QueryList<RassemblyContentDirective>;

  @ViewChildren(
    RassemblyDirective
  ) subRassemblies: QueryList<RassemblyDirective>;

  private componentRefs: Array<ComponentRef<any>>;
  private rassembler: RassemblerComponent;

  constructor(
    injector: Injector,
  ) {
    this.rassembler = injector.get(RassemblerComponent);
  }

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
      let componentFactory = this.rassembler.getComponentFactory(child.tag);
      let viewContainerRef = contentList[i].viewContainerRef;

      // create and set up the component
      viewContainerRef.clear();
      let component = viewContainerRef.createComponent(componentFactory);
      (<RassemblerTarget>component.instance).data = child.data

      // this child exists outside the angular lifecycle and must be initialized separately
      component.changeDetectorRef.detectChanges();
      this.subRassemblies.notifyOnChanges();
      this.componentRefs.push(component);

      // recursively initialize the sub-assemblies after the DOM updates
      this.subRassemblies.changes.subscribe((rassemblies: QueryList<RassemblyDirective>) => {

        console.log(`queried element: ${rassemblies.length}`);
        console.log(`id element: ${document.getElementsByTagName("test")}`);

        if (child.children && child.children.length > 0) {
          return;
        }

        if (rassemblies.length > 1) {
          console.error(`ng-rassembler found more than one rassembly component` +
            `under the ${child.tag} component. This is not currently supported.`);
          return;
        }

        
      });
      
    }
  }
}
