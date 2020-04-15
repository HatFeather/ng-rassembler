import { Type } from "@angular/core";
import { RassemblerNode } from "./rassembler-node";

export interface RassemblerBlueprints {

    componentMapping: {
        tag: String,
        component: Type<any>,
    }[];

    root: RassemblerNode;

}
