import { Product } from './../../../../core/interfaces/product';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';

@Component({
  selector: 'app-storage-page',
  templateUrl: './storage-page.component.html',
  styleUrls: ['./storage-page.component.scss']
})
export class StoragePageComponent implements OnInit {

  products: Product[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.listProducts()
    .subscribe(data => {this.products = data ;})
  }

}
