import {
  Component,
  Input,
  ViewChild,
  ComponentFactoryResolver,
  OnInit,
} from '@angular/core';

import { RassemblerNode } from '../../typings';
import { RassemblyDirective } from '../../directives';

@Component({ template: '' })
export class RassemblyComponent implements OnInit {

  @Input() children: RassemblerNode[];

  @ViewChild(
    RassemblyDirective,
    { static: true },
  ) rassemblyHost: RassemblyDirective;

  constructor(
    private cfresolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void { }

}
