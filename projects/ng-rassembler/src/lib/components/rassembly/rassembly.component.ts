import {
  Component,
  Input,
  ViewChild,
  OnInit,
  Injector,
  Host,
} from '@angular/core';

import { RassemblerNode } from '../../typings';
import { RassemblyDirective } from '../../directives';
import { RassemblerComponent } from '../rassembler';

@Component({ template: '' })
export class RassemblyComponent implements OnInit {

  @Input() children: RassemblerNode[];

  @ViewChild(
    RassemblyDirective,
    { static: true },
  ) rassemblyHost: RassemblyDirective;

  constructor(
    @Host() private rassembler: RassemblerComponent
  ) { }

  ngOnInit(): void {
    console.log(`rassm: ${this.rassembler.blueprints.root.children[0].tag}`);
  }

}
