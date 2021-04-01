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

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  onDelete() {
    alert("Esse método ainda não foi implementado")
    /*this.httpService.deleteProduct(this.product.id).subscribe(
      success => alert('Produto excluído com sucesso'),
        error => alert(error)
    );*/
  }

  onEdit(id) {
    console.log('editar ', id);
    alert("Esse método ainda não foi implementado")
  }

}
