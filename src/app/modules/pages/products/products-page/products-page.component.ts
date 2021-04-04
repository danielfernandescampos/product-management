import { ProductFormCreateComponent } from './../product-form/product-form-create/product-form-create.component';
import { ProductFormComponent } from './../product-form/product-form.component';
import { ConfirmModalComponent } from './../../../../shared/components/modal/confirm-modal/confirm-modal.component';
import { ModalProductService } from './../product-form/modal-product.service';
import { Product } from './../../../../core/interfaces/product';
import { HttpService } from './../../../../core/http/http.service';
import { Component, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  modalVisible: boolean;
  products: Product[];
  
  closeSub: Subscription;
  @ViewChild('productForm', { read: ViewContainerRef, static: true }) productForm;

  constructor(
    private httpService: HttpService,
    private modalService: ModalProductService,
    
    private injector: Injector,
    private cfr: ComponentFactoryResolver
    ) { }

  ngOnInit() {

    this.modalService.currentModalVisibility.subscribe(bool => this.modalVisible = bool);

    this.httpService.listProducts()
    .subscribe(data => {
      this.products = data; 
    })
  }

  createProduct() {
    console.log('oi');
    const cmpFactory = this.cfr.resolveComponentFactory(ProductFormCreateComponent);
    const componentRef = cmpFactory.create(this.injector);
    this.productForm.insert(componentRef.hostView)
    this.closeSub = componentRef.instance.close.subscribe(()=>{
      this.closeSub.unsubscribe();
      this.productForm.clear()
    })
  }

}
