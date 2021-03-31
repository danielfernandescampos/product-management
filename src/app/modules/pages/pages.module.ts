import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';
import { ProductsPageComponent } from './products/products-page/products-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './products/product-card/product-card.component';



@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule,
  ]
})
export class PagesModule { }
