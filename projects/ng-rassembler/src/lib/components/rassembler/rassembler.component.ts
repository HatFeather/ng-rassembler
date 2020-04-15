import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { RassemblerBlueprints } from '../../typings';

@Component({
  selector: 'ng-rassembler',
  templateUrl: './rassembler.component.html',
  styleUrls: ['./rassembler.component.css']
})
export class RassemblerComponent implements OnInit {

  @Input() blueprints: RassemblerBlueprints;

  constructor() { }

  ngOnInit(): void { }

}
