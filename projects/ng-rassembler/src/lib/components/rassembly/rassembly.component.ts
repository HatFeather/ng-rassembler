import {
  Component,
  Input,
  ViewChild,
  OnInit,
  Host,
} from '@angular/core';

import { RassemblerNode } from '../../typings';
import { RassemblyContentDirective } from '../../directives';
import { RassemblerComponent } from '../rassembler';

@Component({ template: '' })
export class RassemblyComponent implements OnInit {

  @Input() children: RassemblerNode[];

  @ViewChild(
    RassemblyContentDirective,
    { static: true },
  ) content: RassemblyContentDirective;

  constructor(
    @Host() private rassembler: RassemblerComponent
  ) { }

  ngOnInit(): void {
    console.log(`rassm: ${this.rassembler.blueprints.root.children[0].tag}`);
  }

}
