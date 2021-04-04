import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalProductService {

  private modalVisibility = new Subject<boolean>();
  currentModalVisibility = this.modalVisibility.asObservable();

  constructor() { }

  changeModalVisibility(bool: boolean) {
    this.modalVisibility.next(bool);
  }
  
}

