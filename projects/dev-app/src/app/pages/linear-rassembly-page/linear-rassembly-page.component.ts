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
      { tag: 'test-box', componentType: TestBoxComponent },
    ],
    root: {
      children: [
        {
          tag: 'test-box',
          data: {
            color: '#00FF00',
            text: 'This is the first component!',
            height: '300px',
          },
        },
        {
          tag: 'test-box',
          data: {
            color: '#FF0000',
            text: 'This is the second component!',
            height: '90px',
          },
          children: [
            {
              tag: 'test-box',
              data: {
                color: '#FFFF00',
                text: 'This is the second component\'s first child!',
                height: '120px',
              },
            },
            {
              tag: 'test-box',
              data: {
                color: '#00FFFF',
                text: 'This is the second component\'s second child!',
                height: '120px',
              },
            },
          ],
        },
        {
          tag: 'test-box',
          data: {
            color: '#FF00FF',
            text: 'This is the third component!',
            height: '120px',
          },
        },
        {
          tag: 'test-box',
          data: {
            color: '#4400FF',
            text: 'This is the fourth component!',
          },
        },
      ],
    },
  };

  constructor() { }

  ngOnInit(): void { }

}
