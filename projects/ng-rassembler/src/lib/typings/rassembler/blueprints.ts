import { RassemblerNode } from "./node";
import { RassemblerComponentMapping } from './component-mapping';
import { RassemblerNodeStyle } from './node-style';

export interface RassemblerBlueprints {

    componentMapping: RassemblerComponentMapping[];

    root: RassemblerNode;

    defaultStyle?: RassemblerNodeStyle;

}
