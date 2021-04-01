import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalProductService {

  private modalVisibility = new BehaviorSubject<boolean>(false);
  currentModalVisibility = this.modalVisibility.asObservable();

  constructor() { }

  changeModalVisibility(bool: boolean) {
    this.modalVisibility.next(bool);
  }
  
}

