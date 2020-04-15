import {
  Directive,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[rassemblyContent]'
})
export class RassemblyContentDirective {

  constructor(
    public viewContainerRef: ViewContainerRef,
  ) { }

}
