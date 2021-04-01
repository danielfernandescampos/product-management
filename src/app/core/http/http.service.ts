import { CashFlow } from './../interfaces/cash-flow';
import { Product } from './../interfaces/product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly API_PRODUCTS = 'http://localhost:3000/produtos'
  private readonly API_CAHSFLOW = 'http://localhost:3000/movimentoCaixa'

  constructor(private http: HttpClient) { }

  listProducts(){
    return this.http.get<Product[]>(this.API_PRODUCTS)
  }

  listCashFlow() {
    return this.http.get<CashFlow[]>(this.API_CAHSFLOW)
  }

  buyProduct(cashFlow: CashFlow) {
    return this.http.post(this.API_CAHSFLOW, cashFlow)
  }

  sellProduct(cashFlow: CashFlow) {
    return this.http.post(this.API_CAHSFLOW, cashFlow)
  }

  editProduct(id: number, produto: Product) {
    return this.http.put(`${this.API_PRODUCTS}/${id}`, produto)
  }

  creatProduct(produto: Product) {
    return this.http.post(this.API_PRODUCTS, produto)
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.API_PRODUCTS}/${id}`)
  }

  onUpload(file: File, url: string) {

    const formData = new FormData();
    formData.append('file', file, file.name)

    const request = new HttpRequest('POST', url, formData);
    return this.http.request(request);
  }

}
