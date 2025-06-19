import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClpPipe } from './pipes/clp.pipe';
import { RutDirective } from './directives/rut.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClpPipe, RutDirective],
  exports: [ClpPipe, RutDirective],
  providers: [ClpPipe, RutDirective]
})
export class SharedModule { }
