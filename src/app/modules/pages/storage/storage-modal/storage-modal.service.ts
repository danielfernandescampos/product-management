import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageModalService {

  private modalVisibility = new BehaviorSubject<boolean>(false);
  currentModalVisibility = this.modalVisibility.asObservable();

  constructor() { }

  changeModalVisibility(bool: boolean) {
    this.modalVisibility.next(bool);
  }
  
}
