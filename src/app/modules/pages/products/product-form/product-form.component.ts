import { StorageService } from './../../storage/storage.service';
import { ModalProductService } from './modal-product.service';
import { Product } from './../../../../core/interfaces/product';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/core/http/http.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  form: FormGroup;
  file: File;
  product: Product;

  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService,
    private modalService: ModalProductService,
    private storageService: StorageService,
    ) { }

  ngOnInit() {

    this.storageService.currentSelectedProduct.subscribe(prod => {this.product = prod; console.log(prod)});

    this.form = this.formBuilder.group({
      nome: [this.product.nome, [Validators.required]],
      categ: [this.product.categ, [Validators.required]],
      //foto: [''],
    })
  }

  onSubmit(){
    if(this.form.valid){
      let produto: Product = {
        id: this.product.id,
        nome: this.form.value.nome,
        categ: this.form.value.categ,
        foto: this.product.foto,
        quant: this.product.quant
      }
      this.httpService.editProduct(this.product.id, produto).subscribe(
        success => {console.log('sucesso'); document.location.reload()},
        error => console.log(error)
      )
    }
  }

  onChange(event){
    this.file = event.target.files[0];
    console.log(this.file) 
  }

  onCancel(){
    this.form.reset();
    this.modalService.changeModalVisibility(false)
  }

}
