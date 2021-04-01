import { PagesModule } from './modules/pages/pages.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { StorageModalComponent } from './modules/storage/storage-modal/storage-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StorageModalComponent,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
