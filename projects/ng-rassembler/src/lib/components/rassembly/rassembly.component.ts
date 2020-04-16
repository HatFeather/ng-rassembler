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
  ContentChildren,
  TemplateRef,
} from '@angular/core';

import { RassemblerNode, RassemblerTarget } from '../../typings';
import { RassemblyContentDirective } from '../../directives';
import { RassemblerComponent } from '../rassembler';

@Component({ template: '' })
export class RassemblyComponent implements AfterViewInit, OnDestroy, OnInit {

  @Input() children: RassemblerNode[];

  @ViewChildren(
    RassemblyContentDirective,
  ) content: QueryList<RassemblyContentDirective>;

  @ContentChildren(
    RassemblyComponent,
    { descendants: true },
  ) subrassemblies: QueryList<RassemblyComponent>;

  private componentRefs: Array<ComponentRef<any>>;
  private rassembler: RassemblerComponent;

  constructor(
    injector: Injector,
  ) {
    this.rassembler = injector.get(RassemblerComponent);
  }

  ngOnInit(): void { 
    this.subrassemblies.changes.subscribe((rassemblies: QueryList<RassemblyComponent>) => {

    });
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
    // let subrassemblyList = this.subrassemblies.toArray();
    console.log(this.subrassemblies);
    let childCount = this.children ? this.children.length : 0;

    for (let i = 0; i < childCount; ++i) {

      let child = this.children[i];
      let componentFactory = this.rassembler.resolveComponentFactory(child.tag);
      let viewContainerRef = contentList[i].viewContainerRef;
      // let subrassembly = subrassemblyList[i];

      // create and set up the component
      viewContainerRef.clear();
      let component = viewContainerRef.createComponent(componentFactory);
      (<RassemblerTarget>component.instance).data = child.data

      // this child exists outside the angular lifecycle and must be initialized separately
      component.changeDetectorRef.detectChanges();
      this.componentRefs.push(component);

      // recursively initialize the sub-assemblies
      // if (child.children && child.children.length > 0) {
        
      // }

      this.subrassemblies.changes.subscribe((rassemblies: QueryList<RassemblyComponent>) => {
        // console.log(rassemblies.toArray());

      //   console.log(`queried element: ${rassemblies.length}`);

      //   if (child.children && child.children.length > 0) {
      //     return;
      //   }

      //   if (rassemblies.length > 1) {
      //     console.error(`ng-rassembler found more than one rassembly component` +
      //       `under the ${child.tag} component. This is not currently supported.`);
      //     return;
      //   }

      });

    }
  }
}
