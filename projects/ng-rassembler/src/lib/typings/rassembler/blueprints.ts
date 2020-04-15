import { RassemblerNode } from "./node";
import { RassemblerComponentMapping } from './component-mapping';

export interface RassemblerBlueprints {

    componentMapping: RassemblerComponentMapping[];

    root: RassemblerNode;

}
