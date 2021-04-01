import { HttpService } from 'src/app/core/http/http.service';
import { CashFlow } from './../../../../core/interfaces/cash-flow';
import { TimeService } from './../../../../shared/services/time.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from './../storage.service';
import { Product } from './../../../../core/interfaces/product';
import { StorageModalService } from './storage-modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storage-modal',
  templateUrl: './storage-modal.component.html',
  styleUrls: ['./storage-modal.component.scss']
})
export class StorageModalComponent implements OnInit {

  modalVisible: boolean;
  operation: any;
  product: Product;
  form: FormGroup;

  constructor(
    private modalService: StorageModalService,
    private storageService: StorageService,
    private formBuilder: FormBuilder,
    private timeService: TimeService,
    private httpService: HttpService,
  ) { }

  ngOnInit() {
    this.modalService.currentModalVisibility.subscribe(bool => this.modalVisible = bool);
    this.storageService.currentSelectedProduct.subscribe(prod => this.product = prod)
    this.storageService.currentOperation.subscribe(op => this.operation = op)

    this.form = this.formBuilder.group({
      valor: [null, Validators.required],
      quant: [null, Validators.required]
    })
  }

  onClose() {
    this.modalService.changeModalVisibility(false)
  }

  onSubmit() {
    if(this.form.value.quant > this.product.quant &&
      this.operation.name == "venda") {
      alert('Não há quantidade suficiente no estoque')
      return
    }

    if(this.form.valid) {

      const cashFlow: CashFlow = {
        id: `${this.product.id}-${new Date()}`,
        product_id: this.product.id,
        nome: this.product.nome,
        categ: this.product.categ,
        foto: this.product.foto,
        quant: this.form.value.quant,
        tipo: this.operation.name,
        data: this.timeService.getCurrentDate(),
        valor: this.form.value.valor,
      }
    
      this.httpService.buyProduct(cashFlow).subscribe(
        success => console.log('sucesso'),
        error => console.log(error),
        () => console.log('request completo')
      )
  
      let produto: Product = {
        id: this.product.id,
        nome: this.product.nome,
        categ: this.product.categ,
        foto: this.product.foto,
        quant: this.product.quant + (this.form.value.quant * this.operation.math),
      }
  
      this.httpService.editProduct(this.product.id, produto).subscribe(
        success => {document.location.reload();}
      )

    }
  }

}
