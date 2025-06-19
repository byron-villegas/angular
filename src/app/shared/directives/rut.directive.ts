import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[rut]',
  standalone: false
})
export class RutDirective {

  constructor(private element: ElementRef<HTMLInputElement>) { }

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = this.element.nativeElement;
    let value = input.value.replace(/[^0-9kK]/g, '').toUpperCase();

    if (value.length < 2) {
      input.value = value;
      return;
    }

    let parteNumerica = parseInt(value.substring(0, value.length - 1));
    let dv = value[value.length - 1];
    let rut = parteNumerica.toLocaleString('es-CL') + '-' + dv;

    // Solo actualiza y dispara el evento si el valor cambió
    if (input.value !== rut) {
      input.value = rut;
      const inputEvent = new Event('input', { bubbles: true });
      input.dispatchEvent(inputEvent);
    }
  }
}