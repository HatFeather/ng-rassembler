import {
  Directive,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[rassembly]'
})
export class RassemblyDirective {

  constructor(
    public viewContainerRef: ViewContainerRef,
  ) { }

}
