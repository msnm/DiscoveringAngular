import {NgModule} from '@angular/core';
import {declarationTransformFactory} from '@angular/compiler-cli/src/ngtsc/transform';
import {StarComponent} from './star.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarComponent
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule {

}
