import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from './components/modal/confirm-modal/confirm-modal.component';
import { EditComponent } from './components/modal/edit/edit.component';



@NgModule({
  declarations: [
    SpinnerComponent, 
    ConfirmModalComponent, 
    EditComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    ConfirmModalComponent, 
    EditComponent
  ],
  entryComponents: [
    ConfirmModalComponent
  ]
})
export class SharedModule { }
