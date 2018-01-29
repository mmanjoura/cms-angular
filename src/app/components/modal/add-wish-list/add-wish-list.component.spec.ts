import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWishListComponent } from './add-wish-list.component';

describe('ModalAddWishListComponent', () => {
  let component: AddWishListComponent;
  let fixture: ComponentFixture<AddWishListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWishListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
