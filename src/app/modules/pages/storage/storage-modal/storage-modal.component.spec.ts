import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageModalComponent } from './storage-modal.component';

describe('StorageModalComponent', () => {
  let component: StorageModalComponent;
  let fixture: ComponentFixture<StorageModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
