import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { RassemblerTarget } from 'projects/ng-rassembler/src/public-api';
import { TestBoxData } from './test-box-data';

@Component({
  selector: 'app-test-box',
  templateUrl: './test-box.component.html',
  styleUrls: ['./test-box.component.scss']
})
export class TestBoxComponent implements OnInit, AfterContentInit, RassemblerTarget<TestBoxData> {

  @Input() public data: TestBoxData;

  constructor() { }

  ngAfterContentInit(): void {
  }

  ngOnInit(): void { 
  }

}
