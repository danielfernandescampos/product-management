import { ModalProductService } from './../product-form/modal-product.service';
import { Product } from './../../../../core/interfaces/product';
import { HttpService } from './../../../../core/http/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  modalVisible: boolean;

  products: Product[];

  constructor(
    private httpService: HttpService,
    private modalService: ModalProductService
    ) { }

  ngOnInit() {

    this.modalService.currentModalVisibility.subscribe(bool => this.modalVisible = bool);

    this.httpService.listProducts()
    .subscribe(data => {
      this.products = data; 
    })
  }

}
