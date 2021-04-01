import { StorageModalService } from './../storage-modal/storage-modal.service';
import { StorageService } from './../storage.service';
import { Product } from './../../../../core/interfaces/product';
import { TimeService } from './../../../../shared/services/time.service';
import { CashFlow } from './../../../../core/interfaces/cash-flow';
import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';

@Component({
  selector: 'app-storage-card',
  templateUrl: './storage-card.component.html',
  styleUrls: ['./storage-card.component.scss']
})
export class StorageCardComponent implements OnInit {

  @Input() product: Product;

  constructor(
    private storageService: StorageService,
    private modalService: StorageModalService
    ) { }

  ngOnInit() {
  }

  onBuy() {
    this.modalService.changeModalVisibility(true)
    this.storageService.changeSelectedProduct(this.product)

    this.storageService.selectOperation({
      math: 1,
      name: "compra",
      txtBtn: "Comprar"
    })
  }
  
  onSell() {
    this.modalService.changeModalVisibility(true)
    this.storageService.changeSelectedProduct(this.product)

    this.storageService.selectOperation({
      math: -1,
      name: "venda",
      txtBtn: "Vender"
    })
  }

}
