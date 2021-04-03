import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from './components/modal/confirm-modal/confirm-modal.component';



@NgModule({
  declarations: [
    SpinnerComponent, 
    ConfirmModalComponent, 
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    ConfirmModalComponent, 
  ],
  entryComponents: [
    ConfirmModalComponent
  ]
})
export class SharedModule { }
