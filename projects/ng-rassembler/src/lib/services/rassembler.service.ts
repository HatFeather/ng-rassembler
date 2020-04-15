import { Injectable } from '@angular/core';
import { RassemblerBlueprints } from '../typings';
import { NgRassemblerModule } from '../ng-rassembler.module';

@Injectable({
  providedIn: NgRassemblerModule,
})
export class Rassembler {

  constructor() { }

  public loadFromBlueprints(
    blueprints: RassemblerBlueprints,
  ): void { }

}
