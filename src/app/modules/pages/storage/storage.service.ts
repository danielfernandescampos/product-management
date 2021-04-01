import { Product } from './../../../core/interfaces/product';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private selectedProduct = new BehaviorSubject<Product>(null);
  currentSelectedProduct = this.selectedProduct.asObservable();
  
  private selectedOperation = new BehaviorSubject<any>({
    math: null,
    name: null,
    txtBtn: null
  });
  currentOperation = this.selectedOperation.asObservable();

  constructor() { }

  changeSelectedProduct(product: Product) {
    this.selectedProduct.next(product);
  }
 
  selectOperation(operation: any) {
    this.selectedOperation.next(operation);
  }
}

