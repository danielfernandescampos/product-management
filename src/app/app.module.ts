import { ProductFormCreateComponent } from './modules/pages/products/product-form/product-form-create/product-form-create.component';
import { ConfirmModalComponent } from './shared/components/modal/confirm-modal/confirm-modal.component';
import { PagesModule } from './modules/pages/pages.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    PagesModule,
    HttpClientModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmModalComponent, ProductFormCreateComponent]
})
export class AppModule { }
