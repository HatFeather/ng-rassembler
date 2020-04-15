import { Component, OnInit } from '@angular/core';
import { RassemblerBlueprints } from 'projects/ng-rassembler/src/public-api';
import { TestBoxComponent } from '../../components/test-box/test-box.component';

@Component({
  selector: 'app-linear-rassembly-page',
  templateUrl: './linear-rassembly-page.component.html',
  styleUrls: ['./linear-rassembly-page.component.scss']
})
export class LinearRassemblyPageComponent implements OnInit {

  blueprints: RassemblerBlueprints = {
    componentMapping: [
      { tag: 'test-box', component: TestBoxComponent },
    ],
    root: {
      children: [
        {
          tag: 'test-box',
          data: {
            color: '#00FF00',
            text: 'This is the top component!'
          },
        }
      ],
    },
  };

  constructor() { }

  ngOnInit(): void { }

}
