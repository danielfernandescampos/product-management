import { Product } from './../../../../../core/interfaces/product';
import { HttpService } from './../../../../../core/http/http.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-form-create',
  templateUrl: './product-form-create.component.html',
  styleUrls: ['../product-form.component.scss']
})
export class ProductFormCreateComponent implements OnInit {

  form: FormGroup;
  file: File;

  @Output() close = new EventEmitter<void>();

  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService,

  ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      nome: [null, [Validators.required]],
      categ: [null, [Validators.required]],
      foto: [null],
    })

  }

  onSubmit(){
    if(this.form.valid){
      let produto: Product = {
        id: null,
        nome: this.form.value.nome,
        categ: this.form.value.categ,
        foto: this.file,
        quant: 0
      }
      this.httpService.creatProduct(produto).subscribe(
        success => {console.log('sucesso'); document.location.reload()},
        error => console.error(error)
      )
    }
  }

  onChange(event){
    this.file = event.target.files[0];
    console.log(this.file) 
  }

  onCancel(){
    this.form.reset();
    this.close.emit();
  }

}
