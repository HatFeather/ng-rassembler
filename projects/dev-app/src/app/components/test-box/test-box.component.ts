import { Component, OnInit, Input } from '@angular/core';
import { RassemblerTarget } from 'projects/ng-rassembler/src/public-api';

@Component({
  selector: 'app-test-box',
  templateUrl: './test-box.component.html',
  styleUrls: ['./test-box.component.scss']
})
export class TestBoxComponent implements OnInit, RassemblerTarget {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void { }

}
