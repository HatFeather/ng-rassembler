import {
  Directive,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[rassembler-host]'
})
export class RassemblerDirective {

  constructor(
    public viewContainerRef: ViewContainerRef,
  ) { }

}
