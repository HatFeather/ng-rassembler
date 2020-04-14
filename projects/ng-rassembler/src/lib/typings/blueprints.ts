import { Type } from "@angular/core";
import { NgRassemblerNode } from "./node";

export interface NgRassemblerBlueprints {
    mapping: Map<String, Type<any>>;
    nodes: NgRassemblerNode[];
}
