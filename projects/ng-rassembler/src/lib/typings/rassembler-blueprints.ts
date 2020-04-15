import { Type } from "@angular/core";
import { RassemblerNode } from "./rassembler-node";

export interface RassemblerBlueprints {

    mapping: Map<String, Type<any>>;

    root: RassemblerNode;

}
