import { Product } from './../../../../core/interfaces/product';
import { HttpService } from './../../../../core/http/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  products: Product[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.listProducts()
    .subscribe(data => {
      this.products = data; 
    })
  }

}
