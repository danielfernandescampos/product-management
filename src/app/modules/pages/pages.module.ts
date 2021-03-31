import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';
import { ProductsPageComponent } from './products/products-page/products-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { CashFlowComponent } from './cash-flow/cash-flow-page/cash-flow.component';
import { StoragePageComponent } from './storage/storage-page/storage-page.component';
import { StorageCardComponent } from './storage/storage-card/storage-card.component';



@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductCardComponent,
    CashFlowComponent,
    StoragePageComponent,
    StorageCardComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class PagesModule { }
