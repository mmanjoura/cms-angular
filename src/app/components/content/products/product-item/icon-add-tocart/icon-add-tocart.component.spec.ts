import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconAddTocartComponent } from './icon-add-tocart.component';

describe('IconAddTocartComponent', () => {
  let component: IconAddTocartComponent;
  let fixture: ComponentFixture<IconAddTocartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconAddTocartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconAddTocartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
