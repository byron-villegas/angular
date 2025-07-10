import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[hover]',
  standalone: false
})
export class HoverDirective {

  constructor(private element: ElementRef<HTMLElement>) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.element.nativeElement.classList.add('hovered');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.element.nativeElement.classList.remove('hovered');
  }
}
