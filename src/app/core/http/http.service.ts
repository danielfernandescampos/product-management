import { Product } from './../interfaces/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly API_PRODUCTS = 'https://fakestoreapi.com/products'

  constructor(private http: HttpClient) { }

  listProducts(){
    return this.http.get<Product[]>(this.API_PRODUCTS)
  }

}
