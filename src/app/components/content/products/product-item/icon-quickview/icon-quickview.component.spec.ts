import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconQuickviewComponent } from './icon-quickview.component';

describe('IconQuickviewComponent', () => {
  let component: IconQuickviewComponent;
  let fixture: ComponentFixture<IconQuickviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconQuickviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconQuickviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
