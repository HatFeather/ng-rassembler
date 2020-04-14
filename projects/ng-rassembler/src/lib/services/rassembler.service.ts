import {
  Injectable,
} from '@angular/core';

import {
  RassemblerBlueprints
} from '../typings';

@Injectable()
export class RassemblerService {

  constructor() { }

  public loadFromBlueprints(
    blueprints: RassemblerBlueprints,
  ): void { }

}
