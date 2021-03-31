import { HttpService } from './http/http.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HttpService
  ],
  imports: [
    CommonModule,
  ]
})
export class CoreModule { }
