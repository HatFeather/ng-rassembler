import { Injectable } from '@angular/core';
import { RassemblerBlueprints } from '../typings';
import { NgRassemblerModule } from '../ng-rassembler.module';

@Injectable({
  providedIn: NgRassemblerModule,
})
export class RassemblerBlueprintBuilder {

  constructor() { }

  fromJson(
    json: any,
  ): RassemblerBlueprints {
    return null;
  }

}
