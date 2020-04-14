import {
  Directive,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[rassembly-host]'
})
export class RassemblyDirective {

  constructor(
    public viewContainerRef: ViewContainerRef,
  ) { }

}
