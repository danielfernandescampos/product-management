import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';
import { ProductsPageComponent } from './products/products-page/products-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { CashFlowComponent } from './cash-flow/cash-flow-page/cash-flow.component';
import { StoragePageComponent } from './storage/storage-page/storage-page.component';



@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductCardComponent,
    CashFlowComponent,
    StoragePageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule,
  ]
})
export class PagesModule { }
