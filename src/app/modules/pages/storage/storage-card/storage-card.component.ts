import { Product } from './../../../../core/interfaces/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-storage-card',
  templateUrl: './storage-card.component.html',
  styleUrls: ['./storage-card.component.scss']
})
export class StorageCardComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

  random(){
    const randomNumber = Math.floor(Math.random() * 100)
    return randomNumber
  }

}
