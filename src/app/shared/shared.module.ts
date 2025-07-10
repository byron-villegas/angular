import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClpPipe } from './pipes/clp.pipe';
import { RutDirective } from './directives/rut.directive';
import { HoverDirective } from './directives/hover.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClpPipe, RutDirective, HoverDirective],
  exports: [ClpPipe, RutDirective, HoverDirective],
  providers: [ClpPipe, RutDirective, HoverDirective]
})
export class SharedModule { }
