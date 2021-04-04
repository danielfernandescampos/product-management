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
import { ProductFormComponent } from './products/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StorageModalComponent } from './storage/storage-modal/storage-modal.component';
import { ProductFormCreateComponent } from './products/product-form/product-form-create/product-form-create.component';



@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductCardComponent,
    CashFlowComponent,
    StoragePageComponent,
    StorageCardComponent,
    ProductFormComponent,
    StorageModalComponent,
    ProductFormCreateComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
