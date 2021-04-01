import { CashFlow } from './../../../../core/interfaces/cash-flow';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';

@Component({
  selector: 'app-cash-flow',
  templateUrl: './cash-flow.component.html',
  styleUrls: ['./cash-flow.component.scss']
})
export class CashFlowComponent implements OnInit {

  cashFlow: CashFlow[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.listCashFlow()
      .subscribe(data => this.cashFlow = data)
  }

}
