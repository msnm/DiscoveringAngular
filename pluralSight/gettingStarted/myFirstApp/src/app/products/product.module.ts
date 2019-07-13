import {ProductListComponent} from './product-list.component';
import {ProductDetailComponent} from './product-detail.component';
import {ConvertToSpacesPipe} from '../shared/convert-to-spaces.pipe';
import {StarComponent} from '../shared/star.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ProductDetailGuard} from './product-detail.guard';
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
        { path: 'products', component: ProductListComponent },
        { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent},
  ]),
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
  ]
})
export class ProductModule {

}
