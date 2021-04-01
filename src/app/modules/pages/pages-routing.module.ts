import { ProductFormComponent } from './products/product-form/product-form.component';
import { CashFlowComponent } from './cash-flow/cash-flow-page/cash-flow.component';
import { StoragePageComponent } from './storage/storage-page/storage-page.component';
import { ProductsPageComponent } from './products/products-page/products-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "products", component: ProductsPageComponent },
  { path: "novo", component: ProductFormComponent },
  { path: "editar/:id", component: ProductFormComponent },
  { path: "storage", component: StoragePageComponent },
  { path: "cashflow", component: CashFlowComponent },
  { path: "**", redirectTo: "storage" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
