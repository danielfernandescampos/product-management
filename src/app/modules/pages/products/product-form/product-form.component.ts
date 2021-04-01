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

  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService
    ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      nome: [null, [Validators.required]],
      categ: [null, [Validators.required]],
      foto: [''],
    })
  }

  onSubmit(){
    /*console.log(this.form.value)
    if(this.form.valid){
      this.httpService.creatProduct(this.form.value).subscribe(
        success => alert('Produto criado com sucesso'),
        error => alert(error),
        () => console.log('completo')
      )
      let produto: Product = {
        id: this.product.id,
        nome: 'string',
        categ: this.product.categ,
        foto: this.product.foto,
        quant: this.product.quant
      }
      this.httpService.editProduct(this.product.id, produto).subscribe(
        success => console.log('sucesso'),
        error => console.log(error)
      )
    }*/
  }

  onChange(event){
    this.file = event.target.files[0];
    console.log(this.file) 
  }

  onCancel(){
    this.form.reset();
    console.log('cancelou')
  }

}
