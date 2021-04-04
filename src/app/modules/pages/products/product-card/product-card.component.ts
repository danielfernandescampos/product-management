import { StorageService } from './../../storage/storage.service';
import { ModalProductService } from './../product-form/modal-product.service';
import { Product } from './../../../../core/interfaces/product';
import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product

  constructor(
    private httpService: HttpService,
    private modalService: ModalProductService,
    private storageService: StorageService    
    ) { }

  ngOnInit() {
  }

  onDelete() {
    let res = confirm("Tem certeza que deseja deletar esse produto?");
    if(res == true) {
      this.httpService.deleteProduct(this.product.id).subscribe(
        success => {alert('Produto excluído com sucesso'); document.location.reload()},
        error => alert(error)
      );
    }
  }

  onEdit(id) {
    this.storageService.changeSelectedProduct(this.product);
    this.modalService.changeModalVisibility(true);
  }

}
