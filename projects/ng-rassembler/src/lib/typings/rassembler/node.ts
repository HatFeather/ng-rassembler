import { RassemblerNodeStyle } from './node-style';

export interface RassemblerNode {

    tag?: String;

    children?: RassemblerNode[];

    data?: any;

    style?: RassemblerNodeStyle;

}
